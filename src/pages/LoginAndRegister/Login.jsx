import React from "react";
import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/authProvider";

const Login = () => {
  const navigate = useNavigate();
  
// ===========SET TARGETED LOCATION===========
  const location = useLocation()
  console.log(location)
  const from = location?.state?.from.pathname || "/category/0"

   const {loginUser} = useContext(AuthContext)
   const SignInHandler = event => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
    .then(result => {
      const user = result.user

      // ===========SET TARGETED LOCATION===========
      navigate(from)

    })
    .catch(error => {
      console.log(error)
    })
   }
  return (
    <Container className="w-50">
        <h3>Please Login</h3>
      <Form onSubmit={SignInHandler}>
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
