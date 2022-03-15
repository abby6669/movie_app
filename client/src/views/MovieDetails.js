import Navbar from '../components/Navbar';
import MovieInfo from '../components/MovieInfo'
import Footer from '../components/Footer';
import PostComment from '../components/PostComment'
import CommentsList from '../components/CommentsList'

function IndividualMovie() {

  return (
    <>
    <Navbar />
    <MovieInfo />
    <CommentsList />
    <PostComment />
    <Footer />
    </>
  );
}

export default IndividualMovie;
