import { Navbar, Container, Button } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className="justify-content-between ">
        <Navbar.Brand href="#home">To Do List</Navbar.Brand>

        <Button variant="outline-light">Logout</Button>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
