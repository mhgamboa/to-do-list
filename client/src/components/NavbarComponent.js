import { Navbar, Container, Button } from "react-bootstrap";

const NavbarComponent = ({ authType, setAuthType }) => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const handleRegister = () => {
    // window.location.href = "/";
    setAuthType("register");
  };

  const handleLogin = () => {
    // window.location.href = "/register";
    setAuthType("login");
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className="justify-content-between ">
        <Navbar.Brand href="#home">To Do List</Navbar.Brand>

        {localStorage.getItem("name") && localStorage.getItem("token") ? (
          <Button variant="outline-light" onClick={handleLogout}>
            Logout
          </Button>
        ) : authType === "register" ? (
          <Button variant="outline-light" onClick={handleLogin}>
            Login
          </Button>
        ) : (
          <Button variant="outline-light" onClick={handleRegister}>
            Register
          </Button>
        )}
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
