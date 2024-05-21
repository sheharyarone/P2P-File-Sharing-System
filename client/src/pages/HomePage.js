import React from "react";

const HomePage = () => {
  return (
    <div className="home-page d-flex flex-column justify-content-center align-items-center vh-100">
      <h1>Welcome to P2P File Sharing System</h1>
      <div className="d-flex justify-content-center gap-3 mt-4">
        <button onClick={() => (window.location.href = "./share")}>
          Share Files
        </button>
        <button onClick={() => (window.location.href = "./receive")}>
          Download Files
        </button>
      </div>
    </div>
  );
};

export default HomePage;
