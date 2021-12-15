import { Form, Card, Button } from "react-bootstrap";
import axios from "axios";

const Login = () => {
  const handleLogin = async e => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      const res = await axios.post("/api/v1/auth/login", { email, password });

      console.log(res.data);
    } catch (err) {
      console.error("Form Submit Error:", err);
    }
  };

  return (
    <Card className="p-4 shadow-lg" border="dark">
      <Form className="" onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            defaultValue="test1@gmail.com"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            defaultValue="password123"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  );
};

export default Login;
