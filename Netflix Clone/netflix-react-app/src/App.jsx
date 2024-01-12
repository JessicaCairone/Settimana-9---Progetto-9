
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MyNavbar from './components/MyNavbar';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';
import Container from 'react-bootstrap/Container';
import Gallery from './components/Gallery';



function App({children}) {
 


  return (
    <>
   
     <MyNavbar/>
     <MyHeader/>
     <Container className='main' fluid>
     
    <h2 className='text-white mb-3'>Pirati dei Caraibi</h2>
    
    <Gallery MovieSaga='Pirates of the Caribbean'/>
   
    <h2 className='text-white mb-3'>Hunger Games</h2>
    <Gallery MovieSaga='The Hunger Games' />
   <h2 className='text-white mb-3'>Il Padrino</h2> 
    <Gallery MovieSaga='The Godfather' />
     

     </Container>
      
     <MyFooter/>
    
     <>{children}</>
    </>
  )
}

export default App;


/* <Gallery
retrievePageTitle={retrievePageTitle}
saga='Harry Potter'
></Gallery> */