import React, { useState } from 'react';

const ShareFiles = ({ serverApi, requestUrl }) => {
  const [fileNames, setFileNames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileUpload = (event) => {
    const files = event.target.files;
    const names = Array.from(files).map(file => file.name);
    setFileNames(names);
  };

  const sendFileNamesToServer = () => {
    setLoading(true);
    const payload = fileNames.map(filename => ({
      Filename : filename,
      Link: requestUrl // Assuming you want to send the current URL as the requestUrl
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
        console.error('Error sending files:', error);
        setError(error);
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>Upload Files</h1>
      <input type="file" multiple onChange={handleFileUpload} />
      <button onClick={sendFileNamesToServer}>Send Files to Server</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {fileNames.length > 0 && (
        <div>
          <h2>Selected Files</h2>
          <ul>
            {fileNames.map((file, index) => (
              <li key={index}>{file}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ShareFiles;
