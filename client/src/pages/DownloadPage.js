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
    <div className="mt-5 pt-5">
      .
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h2 className="text-center mb-4">List of Available Files</h2>
        <div>
          <button className="ms-auto float-end mb-4" onClick={() => handleRefresh()}>
            Refresh
          </button>
          <br></br>

          <table className=" table-striped table-bordered">
            <thead>
              <tr>
                {/* <th scope="col">Link</th> */}
                <th scope="col">Filename</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file) => (
                <tr key={file.id}>
                  <td>{file.Filename}</td>
                  <td>
                    <button onClick={() => handleDownload(file)}>
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DownloadPage;
