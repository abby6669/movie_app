import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';
import { Spinner } from 'react-bootstrap';
import CommentCard from './CommentCard';

function CommentsList(props) {
  const {fetchComments, comments, loading} = props

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
      {comments && comments.map(comment => (
          comment && <CommentCard
            userId={ comment.userId }
            content={ comment.content }
            createdAt={ comment.createdAt }
            />
        ))
      }
    </div>
  )
}

export default CommentsList
