import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatLayaout from "./components/ChatLayaout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatLayaout />} />
      </Routes>
    </Router>
  );
}

export default App;
