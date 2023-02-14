import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import TradLogo from "../Images/TradExpress.png";
import "../Styles/Navbar1.css";

const Navbar1 = () => {
  const style = {
    backgroundColor: "#7C20BE",
  };

  return (
    <Navbar className="navbar1" style={style} expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/">
            <img src={TradLogo} alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/buy" className="nav1"> instant buy/sell </Link>

            <Link className="nav2"> learn</Link>

            <Link to="/login" className="nav3"> Login </Link>

            <Link to="/getstarted1" className="nav4"> Get started </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar1;
