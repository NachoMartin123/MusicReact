import React from 'react';
import { connect } from 'react-redux';

import {Button, Container, Row, Col} from 'react-bootstrap';

import {BsFillArrowRightCircleFill} from "react-icons/bs"



const ButtonMR = ({}) => {

    return (
        <Button className="buttonMR">See events <BsFillArrowRightCircleFill className="svgHoverParent"/>
        </Button>      
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
)(ButtonMR);