import {Form, Button, Card} from 'react-bootstrap/'

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
              <Card.Text className="text-muted text-center my-3">
              </Card.Text>
          </Card.Body>
      </Card>
      </>
    );
  }
export default RegisterForm
