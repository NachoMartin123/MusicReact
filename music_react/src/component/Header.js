import React, { Component } from 'react';
import { connect } from 'react-redux';

import {Navbar, Nav, Container} from 'react-bootstrap'
import MusicReact from "../assets/MusicReact.svg"

const Header = ({}) => {

    return (
      <div >

          <img style={{width : '10%'}} src={MusicReact} alt="Music React"/>

          <Navbar bg="light" expand="lg" style={{display: 'inline'}}>
            <Container>
              <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="">Songs</Nav.Link>
                <Nav.Link href="/artists">Artist</Nav.Link>
                <Nav.Link href="">Genres</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
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