import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from "./Authentification/login";
import Register from "./Authentification/Register";
import ChatPage from "./Components/ChatPage";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path='/Register' element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/chatpage" element={<ChatPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
