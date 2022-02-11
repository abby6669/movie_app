import {Card, Img, Button} from 'react-bootstrap';
import Foto from "./Perfil.jpeg";


export function ProfileCard() {
    return (

        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Foto} alt="foto perfil" />
  <Card.Body>
    <Card.Title>John Miller</Card.Title>
    <Card.Text>
      <ul>
          <li>miller@gmail.com</li>
          <li>Comedia</li>
      </ul>
    </Card.Text>
    <Button variant="primary">Actualizar Perfil</Button>
  </Card.Body>
    </Card>

    )
 }

 export default ProfileCard;