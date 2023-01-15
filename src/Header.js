import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const mystyle = {
  backgroundColor: "#00000",
  color: "white"
};

function Header() {
  return (
    <Navbar style={mystyle} expand="lg">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">
              <b>
                <font color="white">Home</font>
              </b>
            </Nav.Link>
            <Nav.Link href="/book/add">
              <b>
                <font color="white">Add Book</font>
              </b>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
