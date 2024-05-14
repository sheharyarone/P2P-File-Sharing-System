import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null); // Add state for error

  useEffect(() => {
    fetch('http://localhost:4000/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => setError(error)); // Handle errors with catch
  }, []);

  return (
    <div>
      {error ? (
        <p>Error fetching data: {error.message}</p>
      ) : data ? (
        <p>{data.message}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MyComponent;
