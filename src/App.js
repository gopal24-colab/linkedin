import React from "react";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/*" />
    </Routes>
  );
};

export default App;
