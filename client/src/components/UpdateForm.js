import { Card, Form, Button, Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext'
import axios from 'axios'

function UpdateForm() {
  const [ error, setError ] = useState('');
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
//  const updatePic = useRef();
const { currentUser } = useAuth();
  async function handleSubmit(e){
    e.preventDefault();

    function updateRequest(email, password){
      const URL_PRODUCTS_API = `http://localhost:8080/api/v1/users/${currentUser.id}`;
      return axios
        .post(URL_PRODUCTS_API, { email, password })
        .then(response => response.data.user)
        .catch(error => error.message);
    }

    const passwordsMatch = passwordRef.current.value === confirmPasswordRef.current.value;
    if(!passwordsMatch) {
      return setError('Passwords no coinciden!');
      try {
        setError('')
        await updateRequest(emailRef.current.value, passwordRef.current.value);
      } catch (e) {
        setError('Error al registrarse: ' + e.message)
        console.log(e);
      }
    }
  }


  return (
    <Card className="w-75 mx-auto my-5">
      <Card.Body>
          <h1 className="display-4 text-center my-3">Actualizar perfil</h1>
          { error && error !== '' && <Alert variant="danger">{ error }</Alert> }
          <Form onSubmit={ handleSubmit }>
              <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Ingresa tu nombre, pero cuál nombre?" autoComplete="off" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control ref={emailRef} type="email" placeholder="Ingresa tu email" autoComplete="off" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control ref={passwordRef} type="password" placeholder="Ingresa tu contraseña" autoComplete="off" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label> Confirmación de contraseña </Form.Label>
                  <Form.Control ref={confirmPasswordRef} type="password" placeholder="Confirma tu contraseña" autoComplete="off" required />
              </Form.Group>

              <Button className="w-100" variant="primary" type="submit">
                  Actualizar perfil
              </Button>
          </Form>
          <Card.Text className="text-muted text-center my-3">
          </Card.Text>
      </Card.Body>
  </Card>
);
}

export default UpdateForm;
