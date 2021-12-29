import Login from "./pages/Login";
import Home from "./pages/Home";
import NavbarComponent from "./components/NavbarComponent";
import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setCurrentPage("home");
      setLoggedIn(true);
    }
    setCurrentPage("login");
  }, []);

  return (
    <div className="App">
      <NavbarComponent
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <div className="main m-5 d-flex justify-content-center">
        {loggedIn ? (
          <Home />
        ) : (
          <Login type={currentPage} setCurrentPage={setCurrentPage} setLoggedIn={setLoggedIn} />
        )}
      </div>
    </div>
  );
}

export default App;
