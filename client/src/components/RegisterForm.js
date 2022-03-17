import {Form, Button, Card, Alert} from 'react-bootstrap/';
import { Link, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext'

function RegisterForm() {
      const [ error, setError ] = useState('');
      const [ loading, setLoading ] = useState(false);

      const emailRef = useRef();
      const passwordRef = useRef();
      const confirmPasswordRef = useRef();

      const { currentUser, register } = useAuth();
      const navigate = useNavigate();

      async function handleSubmit(e){
        e.preventDefault();

        const inputValuesAreEmpty = emailRef.current.value === '' || passwordRef.current.value === '';
        if(inputValuesAreEmpty) {
          return setError('Por favor ingresa un email y un password');
        }

        const passwordsMatch = passwordRef.current.value === confirmPasswordRef.current.value;
        if(!passwordsMatch) {
          return setError('Passwords no coinciden!');
        }

        try {
          setError('')
          setLoading(true)
          await register(emailRef.current.value, passwordRef.current.value);
          navigate('/');
        } catch (e) {
          setError('Error al registrarse: ' + e.message)
          setLoading(false)
          console.log(e);
        }
      }

      if (currentUser) {
        navigate('/');
      }

    return (
      <>
      <Card className="w-75 mx-auto my-5">
          <Card.Body>
              <h1 className="display-4 text-center my-3">Registrarse</h1>
              { error && error !== '' && <Alert variant="danger">{ error }</Alert> }
              <Form onSubmit={ handleSubmit }>
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

                  <Button className="w-100" variant="primary" type="submit" disabled={ loading }>
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
