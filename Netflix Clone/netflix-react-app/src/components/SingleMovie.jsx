import Image from 'react-bootstrap/Image';
import './SingleMovie.css';


const SingleMovie = ({ movie }) => {
  return (
            <div className="d-flex p-0">
              <Image src={movie.Poster} alt={movie.Title} width="150px" height="200px" className='poster'/>
            </div>
    
  );
};


export default SingleMovie;





