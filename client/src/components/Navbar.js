import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

export function Navegacion() {
    return (
      <header>

        <Navbar bg="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Super Movies</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link Link to="/">Home</Nav.Link>
        <Nav.Link Link to="/">Peliculas</Nav.Link>
        <NavDropdown title="Perfil" id="basic-nav-dropdown">
          <NavDropdown.Item Link to="/profile">Perfil</NavDropdown.Item>
          <NavDropdown.Item Link to="/login">Login</NavDropdown.Item>
          <NavDropdown.Item Link to="/register">Registrate</NavDropdown.Item>
          
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

</header>




    );
}

export default Navegacion;