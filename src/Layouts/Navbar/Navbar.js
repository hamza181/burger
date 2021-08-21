import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./navbar.css";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Burger</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="nav">
            <Nav className="me-auto mainDiv">
              <div className="mainDiv">
                <div className="navDiv">
                  <Nav.Link className="list">
                    <Link to="/">Burger</Link>
                  </Nav.Link>
                  <Nav.Link className="list">
                    <Link to="/checkout">Checkout</Link>
                  </Nav.Link>
                </div>
                <div className="buttonDiv">
                  <Nav.Link href="#pricing" className="list">
                    <button className="Button">Login</button>
                  </Nav.Link>
                </div>
              </div>
            </Nav>
            {/* <Nav className='me-auto'>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <button className='Button'>Login</button>
              </Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default navbar;
