// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
// import { LoginContext } from "./context/LoginContext";
import NavbarComponent from "./components/NavbarComponent";

import "./App.css";

function App() {
  // const [userName, updateUserName] = useState("");

  return (
    // TODO: If user is logged in, route to "/home" immediately. Else go to "/"
    <div className="App">
      <NavbarComponent />
      <div className="main m-5 d-flex justify-content-center">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
