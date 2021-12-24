import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NavbarComponent from "./components/NavbarComponent";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
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
