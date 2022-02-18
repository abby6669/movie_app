import { Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { useThemeContext } from '../contexts/ThemeContext';

function Navegacion() {
  // const { toggle, handleToggle } = useThemeContext();

  return (
    <Navbar bg="dark" variant="dark" sticky="top" className="d-flex align-items-end">
        <Navbar.Brand className="ms-5" as={Link} to="/">ULTRA MOVIE APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Button variant="primary" as={Link} to="/register" className="ml-3" >Registro</Button>{' '}
            <Button variant="outline-primary" as={Link} to="/login">Iniciar sesión</Button>{' '}
            <Nav.Link as={Link} to="/update-profile">Ajustes</Nav.Link>
            <Nav.Link as={Link} to="/">Cerrar sesión</Nav.Link>
            {/* <Button
              className={`boton ${toggle ? 'dark' : 'light'}`}
              onClick={handleToggle}
            >
              Cambiar tema: {toggle ? '🌚' : '🌞'}
            </Button> */}
          </Nav>
          <Form className="d-flex me-5">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Navegacion;