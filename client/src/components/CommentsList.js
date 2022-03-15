import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';
import { Spinner } from 'react-bootstrap';
import axios from 'axios';
import CommentCard from './CommentCard';

function CommentsList(props) {
  const [ currentCommentsList, setCurrentCommentsList ] = useState([]);
  const [loading, setLoading] = useState(false)
  // const { currentUser } = useAuth();
  const { id } = useParams()

  const fetchComments = () => {
    setLoading(true)
    const URL_API = `http://localhost:8080/api/v1/comments/${id}`;
    console.log('' + URL_API)
    axios
    .get(URL_API)
    .then(response => setCurrentCommentsList(response.data.comments))
    .then(() => setLoading(false))
    .catch(error => console.log(error));
  };

  useEffect(() => fetchComments(), []);

  if (loading) {
    return (
        <>
        <div className="d-flex justify-content-center p-5">
            <Spinner className="m-5" animation="border" variant="primary" role="status" size="lg" />
        </div>
        </>
    )
  } return (
    <div style={{ marginBottom: '10em' }}>
      <h3 className="display-5 my-5 ms-5">Comentarios:</h3>
      {currentCommentsList && currentCommentsList.map(comment => (
          comment && <CommentCard
            user={ comment.userId }
            userName={ comment.userName }
            content={ comment.content }
            createdAt={ comment.createdAt }
            />
        ))
      }
    </div>
  )
}

export default CommentsList
