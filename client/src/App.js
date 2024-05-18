import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import HomePage from './components/HomePage';
// import AboutPage from './components/AboutPage';
import FileList from './Pages/landingPage'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/receive" element={<FileList />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
