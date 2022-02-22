import React, { Component } from 'react';
import { connect } from 'react-redux';

import {Navbar, Nav, Container} from 'react-bootstrap'
import MusicReact from "../assets/MusicReact.svg"

const Header = ({}) => {

    return (
      <div>
          
            
          <img src={MusicReact} alt="Music React"/>
            {/**
            <object data="../../assets/MusicReact.svg" width="300" height="300"> </object>
             <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
              <text transform="translate(0 80.57)" style="font-size:40px;fill:#fff;font-family:Impact">M
                <tspan x="64.51" y="0" style={{fill: '#01ffb0'}}>R</tspan>
              </text>
            </svg> */}

          <Navbar bg="light" expand="lg">
            <Container>
              <Nav>
                <Nav.Link href="">Home</Nav.Link>
                <Nav.Link href="">Songs</Nav.Link>
                <Nav.Link href="">Artist</Nav.Link>
                <Nav.Link href="">Genres</Nav.Link>
                <Nav.Link href="">About</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
      </div>
    );
}




const mapStateToProps = (state) => {
    return {

    }
}

/*recibe un “state” y obtiene las propiedades de este que vaya a utilizar el componente */
const mapDispatchToProps = {}

/**
 * La función connect() de la librería React Redux genera un componente 
 * que utiliza store.subscribe() para leer una parte del árbol de estado 
 * en Redux y suministrar los props a un componente de presentación que 
 * renderiza
 */
export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Header);