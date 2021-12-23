import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NavbarComponent from "./components/NavbarComponent";
import { useState } from "react";

import "./App.css";

function App() {
  const [authType, setAuthType] = useState("login");

  return (
    <div className="App">
      <NavbarComponent authType={authType} setAuthType={setAuthType} />
      <div className="main m-5 d-flex justify-content-center">
        <Routes>
          <Route path="/" element={<Login type="login" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Login type="register" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
