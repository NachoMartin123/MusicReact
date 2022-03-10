import React, { Component } from 'react';
import { connect } from 'react-redux';

import {Navbar, Nav, Container} from 'react-bootstrap'
import MusicReact from "../../assets/MusicReact.svg"

const Header = ({}) => {

    return (
      <section id="headerId">
          <Container>
            <Navbar fixed="top">
              <Container >
              <Navbar.Brand href="#home">
              <img
                src={MusicReact}
                width="90"
                height="90"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
                <Nav id="navMR" style={{width:'100%'}} className="centerElementsX">
                  <Nav.Link style={{color: 'white'}} href="/">Home</Nav.Link>
                  <Nav.Link style={{color: 'white'}} href="">Songs</Nav.Link>
                  <Nav.Link style={{color: 'white'}} href="/artists">Artists</Nav.Link>
                  <Nav.Link style={{color: 'white'}} href="">Genres</Nav.Link>
                  <Nav.Link style={{color: 'white'}} href="/about">About</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </Container>
      </section>
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