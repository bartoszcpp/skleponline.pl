import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React, { useState, useContext } from "react";
import Link from "next/link";
import { AppContext } from "./contex/AppContex";
const Header = () => {
  const {
    cart,
    toggleCart,
    price,
    togglePrice,
    count,
    toggleCount,
  } = useContext(AppContext);

  return (
    <>
      <Navbar fixed="top" bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="/">sklepOnline.pl</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Produkty</Nav.Link>
            <Nav.Link href="#home">Kontakt</Nav.Link>
            <Nav.Link href="#home">{count}</Nav.Link>

            <Link href="/Cart">
              <a>Cart</a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
