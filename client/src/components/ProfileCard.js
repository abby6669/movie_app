import {Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Foto from "./Perfil.jpeg";


export function ProfileCard() {
    return (

      <Card className="mx-auto my-5" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Foto} alt="foto perfil" />
        <Card.Body>
          <Card.Title>John Miller</Card.Title>
          <Card.Text>
            <ul>
                <li>miller@gmail.com</li>
                <li>Comedia</li>
            </ul>
          </Card.Text>
          <Button className="w-100" variant="primary" as={Link} to="/update-profile">Actualizar Perfil</Button>
        </Card.Body>
    </Card>

    )
 }

 export default ProfileCard;