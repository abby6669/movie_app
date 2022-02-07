import {Card, Form, Button} from 'react-bootstrap';

function Login() {

    return (
        <>
        <Card className="w-75 mx-auto mt-5">
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

                    <Button className="w-100" variant="primary" type="submit">
                        Iniciar sesión 
                    </Button>
                </Form>
                <Card.Text className="text-muted text-center my-3">
                </Card.Text>
                <Card.Text style={{ fontSize: "14px" }} className="text-muted text-center my-3">
                    ¿Aún no tienes cuenta? 
                </Card.Text>
            </Card.Body>
        </Card>
        </>
    )
}

export default Login;