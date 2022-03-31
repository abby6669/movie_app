import { Card, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext'

function UpdateForm() {
  const [ error, setError ] = useState('');
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const imgUrlRef = useRef();
//const updatePic = useRef();
  const { currentUser, updateProfile } = useAuth();
  const navigate = useNavigate();
  const [ loading, setLoading ] = useState(false);


  async function handleSubmit(e){
    e.preventDefault();

    const passwordsMatch = passwordRef.current.value === confirmPasswordRef.current.value;
    if(!passwordsMatch) {
      return setError('Passwords no coinciden!');
    }

    const updatedName = nameRef.current.value ? nameRef.current.value : currentUser.name
    const updatedEmail = emailRef.current.value ? emailRef.current.value : currentUser.email
    const updatedPassword = passwordRef.current.value ? passwordRef.current.value : currentUser.password
    const updatedImgUrl = imgUrlRef.current.value ? imgUrlRef.current.value : currentUser.imgUrl

    try {
      setError('')
      setLoading(true)
      await updateProfile(updatedName, updatedEmail, updatedPassword, updatedImgUrl);
      navigate('/profile')
    } catch (e) {
      setError('Error al actualizar: ' + e.message)
      setLoading(false)
      console.log(e);
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
                  <Form.Control ref={nameRef} type="text" placeholder={currentUser.name ? currentUser.name : 'Ingresa aquí tu nombre'} autoComplete="off" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control ref={emailRef} type="email" placeholder={currentUser.email} autoComplete="off" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control ref={passwordRef} type="password" placeholder="Ingresa tu nueva contraseña" autoComplete="off" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label> Confirmación de contraseña </Form.Label>
                  <Form.Control ref={confirmPasswordRef} type="password" placeholder="Confirma tu contraseña" autoComplete="off" />
              </Form.Group>
              <Form.Group controlId="formFileSm" className="mb-3">
                 <Form.Label>Cambiar foto de perfil</Form.Label>
                 <Form.Control ref={imgUrlRef} type="img" size="sm" />
               </Form.Group>
              <Button className="w-100" variant="primary" type="submit" disabled={loading}>
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
