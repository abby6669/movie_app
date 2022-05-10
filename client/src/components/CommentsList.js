import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import CommentCard from './CommentCard';

function CommentsList(props) {
  const {fetchComments, comments, loading} = props

  // eslint-disable-next-line
  useEffect(() => fetchComments(), []);

  if (loading) {
    return (
        <>
        <div className="d-flex justify-content-center p-5">
            <Spinner className="m-5" animation="border" variant="primary" role="status" size="lg" />
        </div>
        </>
    )
  } 
  
  return (
    <div className="mb-5">
      <h3 className="display-5 text-center">Comentarios:</h3>

      {comments.length > 0
      ? comments.map(comment => (
          comment && <CommentCard 
            key={comment.userId}
            userId={ comment.userId }
            content={ comment.content }
            createdAt={ comment.createdAt }
            />
        ))
      : <h3 className="lead text-center">Sé el primero en dejar un comentario</h3>
      }
    </div>
  )
}

export default CommentsList
