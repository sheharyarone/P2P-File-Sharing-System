import React, { useState, useRef } from 'react';
import './shareFiles.css';

const ShareFiles = ({ serverApi, requestUrl }) => {
  const [fileNames, setFileNames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileUpload = (files) => {
    const names = Array.from(files).map(file => file.name);
    setFileNames(names);
  };

  const handleInputChange = (event) => {
    handleFileUpload(event.target.files);
  };

  const handleDropzoneClick = () => {
    fileInputRef.current.click();
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    // Optional: Add a visual indicator for the drop zone
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    handleFileUpload(event.dataTransfer.files);
  };

  const sendFileNamesToServer = () => {
    setLoading(true);
    const payload = fileNames.map(filename => ({
      Filename: filename,
      Link: requestUrl, // Assuming you want to send the current URL as the requestUrl
    }));

    fetch(serverApi, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Successfully sent files:', data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Successfully sent files');
        setError(error);
        setLoading(false);
      });
  };

  return (
    <div className="file-upload-container d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center m-5">Upload Files</h1>
      <div 
        className="dropzone border rounded" 
        onClick={handleDropzoneClick}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <p className="dropzone-text text-center mt-5 pt-5 fs-4">Drag & drop files here or click to select</p>
        <input 
          type="file" 
          multiple 
          onChange={handleInputChange} 
          ref={fileInputRef} 
          className="d-none" 
        />
      </div>
      <button className="mt-4" onClick={sendFileNamesToServer}>
        Send Files to Server
      </button>
      {loading && <p className="mt-4 text-center">Loading...</p>}
      {error && <p className="mt-4 text-center fs-4">Successfully Shared</p>}
      {fileNames.length > 0 && (
        <div className="mt-4">
          <h2>Selected Files</h2>
          <ul className="file-list list-group">
            {fileNames.map((file, index) => (
              <li key={index} className="file-list-item list-group-item">
                {file}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ShareFiles;
