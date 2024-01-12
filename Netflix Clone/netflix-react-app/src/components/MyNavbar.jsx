import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

function MyNavbar() {
  return (
    <>
    <div className='d-flex'>
      <div className='col-9'>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><img src="../src/assets/netflix_logo.png" style={{width: '130px', marginLeft:'30px'}}/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
            <Nav.Link href="#features" className='text-white'>Tv Shows</Nav.Link>
            <Nav.Link href="#pricing" className='text-white'>Movies</Nav.Link>
            <Nav.Link href="#pricing" className='text-white'>Recently Added</Nav.Link>
            <Nav.Link href="#pricing" className='text-white'>My List</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
  
      <div className='col-3'>
    <Navbar expand="lg" className="bg-dark" style={{height: '81px'}}>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            navbarScroll
          >
         <Nav.Link href="#action1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-search me-2" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></Nav.Link>
<Nav.Link href="#action2" className='text-white me-2'>KIDS</Nav.Link>
            <Nav.Link href="#action2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-bell-fill me-2" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"/>
</svg></Nav.Link> 
           
            <NavDropdown title={ <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png" style={{height:'30px'}} />} id="navbarScrollingDropdown" className='me-5'>
              <NavDropdown.Item href="#action3">Manage Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Account
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Help Center
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
               Signout Netflix
              </NavDropdown.Item>
            </NavDropdown>
  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </div>
    </>
  );
}

export default MyNavbar;