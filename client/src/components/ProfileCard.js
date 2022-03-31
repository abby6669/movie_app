import {Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'
import {useEffect, useState} from 'react'
import axios from 'axios'

export function ProfileCard() {
const { currentUser } = useAuth();
const [profile, setProfile]=useState([])
//const [loading, setLoading] = useState(false)


  function getProfile(name, email, password, imgUrl) {

    const URL_GET = `http://localhost:8080/api/v1/users/${currentUser.id}`;
    return axios.get(URL_GET)
      .then(response => {setProfile(response.data.user)})
      .catch(error => error.message);
  }
  useEffect(() => getProfile(), []);


    return (
      <Card className="mx-auto my-5" style={{ width: '25rem' }}>
        <Card.Img variant="top" src={profile.imgUrl} alt="foto perfil" />
        <Card.Body>
          <Card.Title> Nombre de usuario: {profile.name}</Card.Title>
          <Card.Text>

              <ul>
                <li> Correo: {profile.email}</li>
                <li> Descripción: ⭐</li>
              </ul>
          </Card.Text>

          <Button className="w-100" variant="primary" as={Link} to="/update-profile">Actualizar Perfil</Button>
        </Card.Body>
    </Card>

    )
 }

 export default ProfileCard;
