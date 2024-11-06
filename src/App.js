// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Food from "./pages/Food";
import All from "./pages/AllInteractions";
import New from "./pages/NewInteractions";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate" element={<LogIn />} />
        <Route path="/food" element={<Food />} />
        <Route path="/all-interactions" element={<All />} />
        <Route path="/new-interactions" element={<New />} />
      </Routes>
    </Router>
  );
};

export default App;
