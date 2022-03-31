import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

function CommentCard(props) {
  const {userId, content, createdAt } = props;

  const [profile, setProfile]=useState({})
  
  function getProfile() {
    const URL_GET = `http://localhost:8080/api/v1/users/${userId}`;
    return axios.get(URL_GET)
      .then(response => setProfile(response.data.user))
      .catch(error => error.message);
  }

  useEffect(() => getProfile(), []);

  console.log(profile)

  return (
    <Card className="w-75 mx-auto mt-5">
      <Card.Body>
        <Card.Header className="text-muted small">
          { profile.email }  hace: { createdAt }
        </Card.Header>
        <Card.Text>{ content }</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CommentCard
