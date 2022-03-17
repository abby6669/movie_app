import { useRef, useState } from 'react';
import { Alert, Button, Card, Form } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { currentUser, login } = useAuth();
  const [ error, setError ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e){
    e.preventDefault();

    const inputValuesAreEmpty = emailRef.current.value === '' || passwordRef.current.value === '';
        if(inputValuesAreEmpty) {
          return setError('Por favor ingresa un email y un password');
    }

    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value);
      navigate('/');
    } catch (e) {
      setError('Error al iniciar sesión: ' + e.message)
      setLoading(false)
      console.log(e);
    }
  }

  if (currentUser) {
    navigate('/');
  }

  return (
    <>
      <Navbar />
      <Card className="w-75 mx-auto mt-5">
        <Card.Body>
          <h1 className="display-4 text-center my-3">LogIn</h1>
          { error && error !== '' && <Alert variant="danger">{ error }</Alert> }
          <Form onSubmit={ handleSubmit }>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control ref={ emailRef } type="email" placeholder="Enter email" autoComplete="off" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control ref={ passwordRef } type="password" placeholder="Password" autoComplete="off" required />
            </Form.Group>

            <Button className="w-100" variant="primary" type="submit" disabled={ loading }>
              Log In
            </Button>
          </Form>

          <Card.Text className="text-muted text-center my-3">
            Necesitas una cuenta? <Link to="/register">Regístrate aquí</Link>
          </Card.Text>
        </Card.Body>
      </Card>
      <Footer />
    </>
  );
}

export default Login;