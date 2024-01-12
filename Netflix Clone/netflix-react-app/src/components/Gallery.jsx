import { Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import SingleMovie from './SingleMovie';
import LoadingMovies from './LoadingMovies';
import AlertLoading from './Alert';

const Gallery = ({ MovieSaga }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
 
  const url = `http://www.omdbapi.com/?s=${MovieSaga}&apikey=1a73cf6e`;

  const getData = async () => {
    try {
        setLoading(true);
      const response = await fetch(url);
      if (response.ok) {
        let data = await response.json();
        setMovies(data.Search);
        console.log(data.Search);
       // setError(true);
        setLoading(false);
      } else {
        console.log('error');
      }
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
      
      
    }
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <>
      <div className='mb-5 '>
        <Row xs={2} md={3} lg={6}>
        {isLoading && <LoadingMovies />}
        {/*isError && <AlertLoading />*/}
        {movies.length > 0 ?
          movies.slice(0, 5).map((movie) => (
            <div key={movie.imdbID}>
              <SingleMovie movie={movie}></SingleMovie>
            </div>
             
          )) : <AlertLoading /> }
          
        
        </Row>
      </div>
    </>
  );
};

export default Gallery;