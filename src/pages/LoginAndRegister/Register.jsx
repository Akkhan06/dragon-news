import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/authProvider";
import { useState } from "react";


const Register = () => {
  const {createUser, varification, updateProfile} = useContext(AuthContext)
  const [accepted, setAccepted] = useState(false)
  const handlerAccepted = event => {
    setAccepted(event.target.checked)
  }
  const navigate = useNavigate()
  const registerHandler = event => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password)
    createUser(email, password)
    .then((result) => {
      const user = result.user
      alert('please login')
      // ====VARIFICATON SECTITON=======
      varification().then(() => {
        alert('please check your email address')
      })
      // =========UPDATE PROFILE USER=====
      // updateProfile(name, photo).then(() => {}).catch(()=>{})
      console.log(user)
      navigate('/login')
    })
    .catch(error => {
      console.log(error)
    })
  }
  return (
    <Container className="w-50">
      <h3>Please Login</h3>
      <Form onSubmit={registerHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your name</Form.Label>
          <Form.Control name="name" type="name" placeholder="Your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo url</Form.Label>
          <Form.Control name="photo" type="photo" placeholder="Photo url" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="position-relative mb-3">
            <Form.Check
            onClick={handlerAccepted}
              required
              name="terms"
              label={<>Agree <Link to="/trams">to terms and conditions</Link></>}
              
              feedbackTooltip
            />
          </Form.Group>
        <Button variant="primary" disabled={!accepted} type="submit">
          Register
        </Button>{" "}
        <br />
        <Form.Text className="text-danger">
          You have already an account? <Link to="/login">Login</Link>
        </Form.Text>{" "}
        <br />
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
