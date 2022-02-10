import {Card, Form, Button} from 'react-bootstrap';

export function ProfileCard() {
    return (

        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="#" />
  <Card.Body>
    <Card.Title>Nombre</Card.Title>
    <Card.Text>
      Datos de Usuario.
    </Card.Text>
    <Button variant="primary">Actualizar Perfil</Button>
  </Card.Body>
    </Card>

    )
 }

 export default ProfileCard;