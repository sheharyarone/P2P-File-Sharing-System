import React, { useState, useEffect } from "react";

function DownloadPage({ fetchUrl }) {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    handleRefresh();
  }, [fetchUrl]);

  const handleRefresh = () => {
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((data) => setFiles(data))
      .catch((error) => console.error("Error fetching files:", error));
  };

  const handleDownload = (file) => {
    const downloadLink = document.createElement("a");
    downloadLink.href = file.Link + file.Filename;
    downloadLink.download = file.Filename;
    downloadLink.click();
  };

  return (
    <div>
      .
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h2 className="text-center mb-4">List of Available Files</h2>
        <table className="table table-striped table-bordered file-table">
          <thead>
            <tr>
              <th scope="col">Link</th>
              <th scope="col">Filename</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file) => (
              <tr key={file.id}>
                {" "}
                {/* Assuming a unique identifier for each file */}
                <td>{file.Link}</td>
                <td>{file.Filename}</td>
                <td>
                  <button onClick={() => handleDownload(file)}>Download</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DownloadPage;
