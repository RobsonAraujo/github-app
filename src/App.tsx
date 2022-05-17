import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./pages/detail";

import Home from "./pages/home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/organization/:name" element={<Detail />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
