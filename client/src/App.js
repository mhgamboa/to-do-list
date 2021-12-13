import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ListView from "./pages/ListView";

import "./App.css";

function App() {
  const [userName, updateUserName] = useState("");

  return (
    // TODO: If user is logged in, route to "/home" immediately. Else go to "/"
    <div className="App">
      <h1>Navbar</h1>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<ListView />} />
      </Routes>
    </div>
  );
}

export default App;
