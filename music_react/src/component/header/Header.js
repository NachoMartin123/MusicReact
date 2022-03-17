import React from 'react';
import { connect } from 'react-redux';

import {Navbar, Nav, Container} from 'react-bootstrap'
import MusicReact from "../../assets/MusicReact.svg"

import {nav_show_modal} from "../../redux/actions/navActions";

const Header = ({nav_show_modal}) => {

  function showModalTrigger(){
    nav_show_modal(true);
  }

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
                  <Nav.Link style={{color: 'white'}} onClick={showModalTrigger}>Songs</Nav.Link>
                  <Nav.Link style={{color: 'white'}} href="/artists">Artists</Nav.Link>
                  <Nav.Link style={{color: 'white'}} onClick={showModalTrigger}>Genres</Nav.Link>
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

export default connect(
    mapStateToProps, 
    {nav_show_modal}
)(Header);