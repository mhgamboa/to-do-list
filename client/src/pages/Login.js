import { Form, Card, Button, Alert, Container, Row } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const Login = ({ type, setCurrentPage, setLoggedIn }) => {
  const [alertMessage, setAlertMessage] = useState("");
  const [alertShow, setAlertShow] = useState(false);
  const [alertVariant, setAlertVariant] = useState("");

  const handleLogin = async e => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      const res = await axios.post("/api/v1/auth/login", { email, password });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("name", res.data.user.name);
      setLoggedIn(true);
      setCurrentPage("home");
    } catch (err) {
      err.response.data.msg
        ? setAlertMessage(err.response.data.msg)
        : setAlertMessage("An Error ocurred");
      setAlertVariant("danger");
      setAlertShow(true);
      setTimeout(() => {
        setAlertShow(false);
      }, 3000);
    }
  };

  const handleRegister = async e => {
    e.preventDefault();

    let email = e.target[0].value;
    let password = e.target[1].value;
    let name = e.target[2].value;

    try {
      const res = await axios.post("/api/v1/auth/register", { name, email, password });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("name", res.data.user.name);

      setAlertMessage("Success!");
      setAlertVariant("primary");
      setAlertShow(true);

      e.target[0].value = "";
      e.target[1].value = "";
      e.target[2].value = "";

      await setTimeout(() => {
        setAlertShow(false);
      }, 3000);

      setCurrentPage("login");
    } catch (err) {
      err.response.data.msg
        ? setAlertMessage(err.response.data.msg)
        : setAlertMessage("An Error ocurred");
      setAlertVariant("danger");
      setAlertShow(true);
      setTimeout(() => {
        setAlertShow(false);
      }, 3000);
    }
  };

  return (
    <Container>
      <Row>
        <Card className="p-4 shadow" border="dark">
          <Form onSubmit={type === "login" ? handleLogin : handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            {type === "register" && (
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>
            )}

            <Alert variant={alertVariant} show={alertShow} className="text-center" transition>
              {alertMessage}
            </Alert>

            <Button variant="primary" type="submit">
              {type === "login" ? "Login" : "Register "}
            </Button>
          </Form>
        </Card>
      </Row>
    </Container>
  );
};

export default Login;
