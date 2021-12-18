import { Navbar, Container, Button } from "react-bootstrap";

const NavbarComponent = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className="justify-content-between ">
        <Navbar.Brand href="#home">To Do List</Navbar.Brand>

        {localStorage.getItem("name") && localStorage.getItem("token") && (
          <Button variant="outline-light" onClick={handleLogout}>
            Logout
          </Button>
        )}
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
