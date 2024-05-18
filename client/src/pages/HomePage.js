import React from 'react';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to P2P File Sharing System</h1>
      <div className="button-container">
        <button  onClick={() => (window.location.href = "./share")}>Share Files</button>
        <button  onClick={() => (window.location.href = "./receive")}>Download Files</button>
      </div>
    </div>
  );
};

export default HomePage;
