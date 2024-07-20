
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const RoundedNavBar = () => {
  return (
    <div>
  <Navbar expand="lg" style={{ backgroundColor: 'white', borderRadius: '25px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: '10px 20px', width:"600px", marginLeft:"450px", marginTop:"20px"
   }}>
      <Container>
        <Nav className="mx-auto">
          <Nav.Link href="#updates" style={{ color: '#555', fontWeight: '500', margin: '0 15px' }}>Updates</Nav.Link>
          <Nav.Link href="#yours" style={{ color: '#555', fontWeight: '500', margin: '0 15px' }}>Yours</Nav.Link>
          <Nav.Link href="#safe" style={{ color: '#555', fontWeight: '500', margin: '0 15px' }}>Safe</Nav.Link>
          <Nav.Link href="#fast" style={{ color: '#555', fontWeight: '500', margin: '0 15px' }}>Fast</Nav.Link>
          <Nav.Link href="#by-google" style={{ color: '#555', fontWeight: '500', margin: '0 15px' }}>By Google</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  <center style={{marginTop:"30px"}}><h5>Need the Chrome installer? <a href='#'><span style={{color:"blue"}}>Download here</span></a> </h5></center> 
    </div>
  );
}

export default RoundedNavBar;
