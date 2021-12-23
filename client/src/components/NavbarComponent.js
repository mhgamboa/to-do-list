import { Navbar, Container, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const NavbarComponent = () => {
  // const [buttonType, setButtonType] = useState("register");
  const [windowLocation, setWindowLocation] = useState("");

  useEffect(() => {
    setWindowLocation(`/${window.location.href.split("/")[3]}`);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setWindowLocation("/");
    window.location.href = windowLocation;
  };

  const goToRegister = () => {
    window.location.href = "/register";
  };

  const goToLogin = () => {
    window.location.href = "/";
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className="justify-content-between ">
        <Navbar.Brand href="#home">To Do List</Navbar.Brand>

        {windowLocation === "/" ? (
          <Button variant="outline-light" onClick={goToRegister}>
            Register
          </Button>
        ) : windowLocation === "/register" ? (
          <Button variant="outline-light" onClick={goToLogin}>
            Login
          </Button>
        ) : (
          <Button variant="outline-light" onClick={handleLogout}>
            Logout
          </Button>
        )}

        {/* {localStorage.getItem("name") && localStorage.getItem("token") ? (
          <Button variant="outline-light" onClick={handleLogout}>
            Logout
          </Button>
        ) : buttonType === "login" ? (
          <Button variant="outline-light" onClick={goToLogin}>
            Login
          </Button>
        ) : (
          <Button variant="outline-light" onClick={goToRegister}>
            Register
          </Button>
        )} */}
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
