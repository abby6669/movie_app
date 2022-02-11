import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Navegacion() {
    return (
      <header>

        <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Super Movies</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/">Peliculas</Nav.Link>
        <NavDropdown title="Perfil" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to="/profile">Perfil</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/register">Registrate</NavDropdown.Item>  
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

</header>




    );
}

export default Navegacion;