import {Card, Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {useAuth} from '../contexts/AuthContext'
import axios from 'axios';

function Login(props) {
    // const { email, password } = props;
    const { email, password } = useAuth();

    function handleLogin() {
            // const headers = {'Authorization': `Bearer ${token}`}
            const URL_API_LOGIN = 'http://localhost:8080/api/v1/user/login'
            return axios.post(URL_API_LOGIN, {email: email, password: password})
            .then(response => console.log(response.data))
            .catch(error => error.message);  
    }

  return (
    <>
    <Navbar />
    <Card className="w-75 mx-auto mt-5 mb-5">
        <Card.Body>
            <h1 className="display-4 text-center my-3">Inicia sesión</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingresa tu email" autoComplete="off" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Ingresa tu contraseña" autoComplete="off" required />
                </Form.Group>

                <Button className="w-100" variant="primary" type="submit" onClick={handleLogin}>
                    Iniciar sesión 
                </Button>
            </Form>
            <Card.Text className="text-muted text-center my-3">
            </Card.Text>
            <Link style={{ fontSize: "14px" }} className="text-muted d-flex justify-content-center my-3 mx-auto" to="/register">
                ¿Aún no tienes cuenta? 
            </Link>
        </Card.Body>
    </Card>
    <Footer />
    </>
  );
}

export default Login;