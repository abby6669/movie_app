import {Form, Button, Card} from 'react-bootstrap/';
import { Link } from 'react-router-dom';

function RegisterForm() {

    return (
      <>
      <Card className="w-75 mx-auto my-5">
          <Card.Body>
              <h1 className="display-4 text-center my-3">Registrarse</h1>
              <Form>
                  <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Ingresa tu email" autoComplete="off" required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPassword">
                      <Form.Label>Contraseña</Form.Label>
                      <Form.Control type="password" placeholder="Ingresa tu contraseña" autoComplete="off" required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPassword">
                      <Form.Label> Confirmación de contraseña </Form.Label>
                      <Form.Control type="password" placeholder="Confirma tu contraseña" autoComplete="off" required />
                  </Form.Group>

                  <Button className="w-100" variant="primary" type="submit">
                      Crear una nueva cuenta
                  </Button>
              </Form>
              <Link style={{ fontSize: "14px" }} className="text-muted d-flex justify-content-center my-3 mx-auto" to="/login">
                Ya tengo una cuenta 
              </Link>
          </Card.Body>
      </Card>
      </>
    );
  }
export default RegisterForm
