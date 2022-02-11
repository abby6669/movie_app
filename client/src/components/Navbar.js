import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

export function Navegacion() {
    return (
      <header>

        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Super Movies</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Peliculas</Nav.Link>
        <NavDropdown title="Perfil" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Perfil</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Login</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Register</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

</header>




    );
}

export default Navegacion;