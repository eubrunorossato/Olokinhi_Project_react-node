import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../Styles/NavBar.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from '../Componetes/button'
import OlokinhoPicture from './OlokinhoPicture'
 
const NavBar = ()=>{
    return(
            <Container>
                <Row>
                    <Col>
                    </Col>
                    <Col md={12}>
                        <Navbar sticky = "top" bg="primary" variant="primary" >
                            <Nav.Item></Nav.Item>
                            <Nav.Item><Button title = "Home"/></Nav.Item>
                            <Nav.Item><Button title = "My Olokito"/></Nav.Item>
                            <Nav.Item><Button title = "The Contract"/></Nav.Item>
                            <Navbar.Collapse className="justify-content-end">
                                <Navbar.Text>
                                    <OlokinhoPicture text="Olokinho"/>
                                </Navbar.Text>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
    )   
}

export default NavBar;
