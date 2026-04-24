import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import PasswordStrengthChecker from "./PasswordStrengthChecker";
import TablePagination from "./TablePagination";

function App() {
  return (
    <Router>
      <nav style={{ marginBottom: "20px" }}>
        <br></br> <Link to="/password">Password Checker</Link> |{" "}
        <Link to="/table">Table</Link>
      </nav>

      <Routes>
        <Route path="/" element={<PasswordStrengthChecker />} />
        <Route path="/password " element={<PasswordStrengthChecker />} />
        <Route path="/table" element={<TablePagination />} />
      </Routes>
    </Router>
  );
}

export default App;