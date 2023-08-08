import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-info ">
      <Container fluid>
        <Navbar.Brand className="text-white">Dream Cars</Navbar.Brand>
        <i className="fa-solid fa-car bg-info"></i>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-5 my-lg-0 text-white px-5 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="text-black">Home</Nav.Link>
            <Nav.Link className="text-black">About</Nav.Link>
            <NavDropdown
              className="text-white"
              title="List"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">Super cars</NavDropdown.Item>
              <NavDropdown.Item href="#action4">vintage cars</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">store <i className="fa-solid fa-cart-shopping"></i></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex text-white">
            <Form.Control
              type="search"
              placeholder="Search your dream car "
              className="me-2 "
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <i className="fa-solid fa-cart-plus px-4 "></i>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
