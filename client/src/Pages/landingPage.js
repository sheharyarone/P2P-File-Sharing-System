// FileList.js
import './landingPage.css'
import React, { useState, useEffect } from 'react';

function FileList() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    handleRefresh();
  }, []);

  const handleRefresh = () => {
    fetch('http://localhost:4000/files')
      .then(response => response.json())
      .then(data => setFiles(data))
      .catch(error => console.error('Error fetching files:', error));
  };

  const handleDownload = (filename) => {
    // Logic to handle file download
    console.log('Downloading file:', filename);
  };

  return (
    <div className="file-list-container">
      <h2>List of Available Files</h2>
      <button className='download-button' onClick={handleRefresh}>Refresh</button>
      <table className="file-table">
        <thead>
          <tr>
            <th>Port</th>
            <th>Filename</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          
          {files.map(file => (
            <tr key={file.port}>
              <td>{file.port}</td>
              <td>{file.filename}</td>
              <td>
                <button className="download-button" to="/receive" onClick={() => handleDownload(file.filename)}>Download</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FileList;
