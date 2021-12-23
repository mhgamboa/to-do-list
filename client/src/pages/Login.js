import { Form, Card, Button, Alert, Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

const Login = ({ type }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [viewError, setViewError] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("name"))
      window.location.href = "/home";
  }, []);

  const handleLogin = async e => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      const res = await axios.post("/api/v1/auth/login", { email, password });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("name", res.data.user.name);
      window.location.href = "/home";
    } catch (err) {
      err.response.data.msg
        ? setErrorMessage(err.response.data.msg)
        : setErrorMessage("An Error ocurred");
      setViewError(true);
      setTimeout(() => {
        setViewError(false);
      }, 3000);
    }
  };

  const handleRegister = async e => {
    e.preventDefault();
    console.log("register");

    const email = e.target[0].value;
    const password = e.target[1].value;
    const name = e.target[2].value;
    try {
      const res = await axios.post("/api/v1/auth/register", { name, email, password });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("name", res.data.user.name);
      window.location.href = "/home";
    } catch (err) {
      err.response.data.msg
        ? setErrorMessage(err.response.data.msg)
        : setErrorMessage("An Error ocurred");
      setViewError(true);
      setTimeout(() => {
        setViewError(false);
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
              <Form.Control
                type="email"
                placeholder="Enter email"
                defaultValue={type === "login" ? "test1@gmail.com" : ""}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                defaultValue={type === "login" ? "password123" : ""}
              />
            </Form.Group>

            {type === "register" && (
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>
            )}

            <Alert variant="danger" show={viewError} className="text-center" transition>
              {errorMessage}
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
