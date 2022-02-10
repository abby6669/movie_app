import { Card, Button } from 'react-bootstrap';


function Profile(props) {

    return (

        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Nombre</Card.Title>
    <Card.Text>
      Datos de perfil
    </Card.Text>
    <Button variant="primary">Actualizar Perfil</Button>
  </Card.Body>
</Card>

    )
}

export default Profile