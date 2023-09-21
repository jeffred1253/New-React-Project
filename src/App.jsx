import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ForgotPass from './pages/ForgotPass';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import UpdatePass from './pages/UpdatePass';
import Users from './pages/Users';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpass" element={<ForgotPass />} />
          <Route path="/updatepass" element={<UpdatePass />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;