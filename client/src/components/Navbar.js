import { Navbar, Nav, Container, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../contexts/ThemeContext';

function Navegacion() {
  const { toggle, handleToggle } = useThemeContext();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className={`header ${toggle ? 'dark' : 'light'}`} >
      <Container>
        <Navbar.Brand as={Link} to="/">Super Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/login">Iniciar sesión</Nav.Link>
            <Nav.Link as={Link} to="/register">Registro</Nav.Link>
            <Nav.Link as={Link} to="/profile">Perfil</Nav.Link>
            <Nav.Link as={Link} to="/update-profile">Ajustes</Nav.Link>
            <Nav.Link as={Link} to="/">Cerrar sesión</Nav.Link>
            <Button
              className={`boton ${toggle ? 'dark' : 'light'}`}
              onClick={handleToggle}
            >
              Cambiar tema: {toggle ? '🌚' : '🌞'}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegacion;