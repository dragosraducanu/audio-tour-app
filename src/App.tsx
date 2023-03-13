import React from 'react';
import logo from './logo.svg';
import './App.css';
import TourPage from './pages/TourPage';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Nav } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
          <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Tours
          </Navbar.Brand>
          <NavbarCollapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Bla </Nav.Link>
              <Nav.Link href="#link">Bla bla</Nav.Link>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
     <TourPage/>
    </div>
  );
}

export default App;



// var src = 'https://storage.googleapis.com/tour-guide-tours/samples/Sample-Tour-1.kmz';
  
// let map: google.maps.Map;
// const center: google.maps.LatLngLiteral = {lat: 30, lng: -110};

// map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
//   center,
//   zoom: 8,
//   mapTypeId: google.maps.MapTypeId.ROADMAP
// });

// let kmlLayer = new google.maps.KmlLayer({
//   url: src,
//   suppressInfoWindows: true,
//   preserveViewport: false,
//   map: map
// });
