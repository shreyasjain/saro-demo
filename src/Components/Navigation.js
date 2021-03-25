import React from 'react'
import { Navbar, Nav, FormControl, Form, Button } from 'react-bootstrap'
import androidpic from "../Media/androidpic.png"
import iospic from "../Media/iospic.png"

function Navigation() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">ROLEIT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Form inline>
            <Nav.Item>
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Features</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Guide</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">Blog</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="link-2">
                <img src={iospic}/>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">
              <img src={androidpic}/>
              </Nav.Link>
            </Nav.Item>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation
