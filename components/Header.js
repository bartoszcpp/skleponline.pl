import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  return (
    <>
      <Navbar fixed="top" bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="#home">sklepOnline.pl</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Produkty</Nav.Link>
            <Nav.Link href="#home">Kontakt</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
