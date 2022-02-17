import Navbar from '../components/Navbar';
import MovieInfo from '../components/MovieInfo'
import Footer from '../components/Footer';
import CommentCard from '../components/CommentCard'
import CommentsList from '../components/CommentsList'

function IndividualMovie() {
  
  return (
    <>
    <Navbar />
    <MovieInfo />
    <h3 className="display-5 my-5">Deja tu comentario:</h3>
    <CommentCard />
    <CommentsList />
    <Footer />
    </>
  );
}

export default IndividualMovie;