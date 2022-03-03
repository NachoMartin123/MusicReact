import React, { Component } from 'react';
import { connect } from 'react-redux';

import {Form, InputGroup} from 'react-bootstrap';
import {Container} from 'react-bootstrap';

import {BsSearch} from "react-icons/bs";

const SearchBar = ({}) => {

    return (
      <Container id="searchBar">
          <Form>
            <Form.Group >
                <InputGroup className="searchGroup">
                    <InputGroup.Text ><BsSearch/></InputGroup.Text>
                    <Form.Control type="text" placeholder="artist name" />
                </InputGroup>
            </Form.Group>
          </Form>
      </Container>
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
)(SearchBar);