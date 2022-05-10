import { Navbar, Nav, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Navegacion() {
  const { currentUser } = useAuth();
  
  if (currentUser) {
    return (
      <Navbar bg="dark" variant="dark" sticky="top" className="d-flex align-items-end px-5">
          <Navbar.Brand as={Link} to="/">ULTRA MOVIE APP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/profile" className="text-light">Accediste como: {currentUser.email}</Nav.Link>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/update-profile">Ajustes</Nav.Link>
              <Nav.Link as={Link} to="/likes">Mis likes</Nav.Link>
              <Nav.Link as={Link} to="/logout" className="btn btn-secondary text-light">Cerrar sesión</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    )
  }

  return (
    <Navbar bg="dark" variant="dark" sticky="top" className="d-flex align-items-end px-5">
        <Navbar.Brand as={Link} to="/">ULTRA MOVIE APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Button variant="primary" as={Link} to="/register" className="ms-3">Registro</Button>
            <Button variant="outline-primary" as={Link} to="/login" className="ms-3">Iniciar sesión</Button>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Navegacion;
