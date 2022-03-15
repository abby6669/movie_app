import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext'

function CommentCard(props) {
  const {userId, content, createdAt, userName } = props;


//Cantidad excesiva de código para una sola cosa, intentar enviar a Auth.
  const [profile, setProfile]=useState([])
  const { currentUser, updateProfile } = useAuth();
  function getName(name) {

    const URL_GET = `http://localhost:8080/api/v1/users/${currentUser.id}`;
    return axios.get(URL_GET)
      .then(response => {setProfile(response.data.user)})
      .catch(error => error.message);
  }
  useEffect(() => getName(), []);

  return (
    <Card className="w-75 mx-auto mt-5">
      <Card.Body>
        <Card.Header className="text-muted small">
        { profile.name }  hace: { createdAt }</Card.Header>
        <Card.Text> { userId } </Card.Text>
        <Card.Text>  </Card.Text>
        <Card.Text>{ content }</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CommentCard
