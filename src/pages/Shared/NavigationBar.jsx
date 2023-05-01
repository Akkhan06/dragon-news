import React, { useContext } from 'react';
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/authProvider';
;

const NavigationBar = () => {
    const {user, logOut} = useContext(AuthContext)
    console.log(user)
    const signout = () => {
        logOut()
        .then(() => {
            alert('Log Out success')
        })
        .catch(error => {

        })
    }
    return (
        <Container>
              <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                            
                            
                        </Nav>
                        <Nav className='d-flex align-items-center'>
                            {user && <Nav.Link href="#deets">
                                {<FaUserCircle style={{fontSize: "2rem"}}></FaUserCircle>}
                            </Nav.Link>}
                            
                                {!user ? <Link to="/login"><Button variant="secondary">Login</Button></Link> : <Button onClick={signout} variant="secondary">Log Out</Button>}
                            
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;