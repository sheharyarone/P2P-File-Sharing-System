import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DownloadPage from './pages/DownloadPage'
import ShareFiles from './components/shareFiles';

function App() {
  const apiUrl = 'http://localhost:4000/files';
  const requestUrl='http://localhost:5050/download?fileName='
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/receive" element={<DownloadPage fetchUrl={apiUrl} />} />
      <Route path='/share' element={<ShareFiles requestUrl={requestUrl} serverApi={apiUrl}/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
