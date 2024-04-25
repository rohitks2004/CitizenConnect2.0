// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import HomeAdmin from './pages/HomeAdmin.jsx';
import Signup from './pages/Signup.jsx';
import Complaints from './pages/Complaints.jsx';
import Solved from './pages/Solved.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    
    const checkLoggedInStatus = () => {
   
      const userToken = localStorage.getItem('token'); 
      setIsLoggedIn(!!userToken); 
    };

    checkLoggedInStatus();
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
   
    localStorage.removeItem('token'); 
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />} />

        <Route path="/home" element={isLoggedIn ? <Home onLogout={handleLogout} /> : <Navigate to="/" />} />
        <Route path="/signup" element={<Signup />} />
        
        <Route path="/home-Admin" element={isLoggedIn ? <HomeAdmin onLogout={handleLogout} /> : <Navigate to="/" />} />

        {/* admin routes  */}
        <Route path="/complaints" element={<Complaints/>} />
        <Route path="/solved" element={<Solved/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
