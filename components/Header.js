import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React, { useState } from "react";

const Header = () => {
  const totalCount = null;
  if (process.browser) {
    totalCount = localStorage.getItem("totalCount");
  }
  return (
    <>
      <Navbar fixed="top" bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="/">sklepOnline.pl</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Produkty</Nav.Link>
            <Nav.Link href="#home">Kontakt</Nav.Link>
            <Nav.Link href="#home">{totalCount}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
