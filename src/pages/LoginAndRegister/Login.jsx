import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
   
  return (
    <Container className="w-50">
        <h3>Please Login</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Login
        </Button> <br />

        <Form.Text className="text-danger">
           Don't have an account? <Link to="/register">Register</Link>
          </Form.Text> <br />
        <Form.Text className="text-success">
        
          </Form.Text>

          <Form.Text className="text-danger">
            
          </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
