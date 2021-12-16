import { Form, Card, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [viewError, setViewError] = useState(false);
  const handleLogin = async e => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      const res = await axios.post("/api/v1/auth/login", { email, password });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("name", res.data.user.name);
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
    <Card className="p-4 shadow" border="dark">
      <Form className="" onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" defaultValue="test1@gmail.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" defaultValue="password123" />
        </Form.Group>

        <Alert variant="danger" show={viewError} className="text-center" transition>
          {errorMessage}
        </Alert>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  );
};

export default Login;
