import { Navbar, Container, Button } from "react-bootstrap";

const NavbarComponent = ({ loggedIn, setLoggedIn, currentPage, setCurrentPage }) => {
  const handleLogout = () => {
    localStorage.clear();
    setLoggedIn(false);
    setCurrentPage("login");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className="justify-content-between ">
        <Navbar.Brand href="#home">To Do List</Navbar.Brand>
        {loggedIn ? (
          <Button variant="outline-light" onClick={handleLogout}>
            Logout
          </Button>
        ) : currentPage === "login" ? (
          <Button variant="outline-light" onClick={() => setCurrentPage("register")}>
            Register
          </Button>
        ) : (
          <Button variant="outline-light" onClick={() => setCurrentPage("login")}>
            Login
          </Button>
        )}
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
