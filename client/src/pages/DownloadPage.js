import React, { useState, useEffect } from 'react';

function DownloadPage({fetchUrl}) {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    handleRefresh();
  }, [fetchUrl]);

  const handleRefresh = () => {
    fetch(fetchUrl)
      .then(response => response.json())
      .then(data => setFiles(data))
      .catch(error => console.error('Error fetching files:', error));
  };

  const handleDownload = (file) => {
    const downloadLink = document.createElement('a');
    downloadLink.href = file.Link + file.Filename;
    downloadLink.download = file.Filename;
    downloadLink.click();
  };
  

  return (
    <div className="file-list-container">
      <h2>List of Available Files</h2> 
      <table className="file-table">
        <thead>
          <tr>
            <th>Link</th>
            <th>Filename</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {files.map(file => (
            <tr k>
              <td>{file.Link}</td>
              <td>{file.Filename}</td>
              <td>
                <button className="download-button" onClick={() => handleDownload(file)}>Download</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default DownloadPage;
