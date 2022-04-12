import React from 'react';
import { connect } from 'react-redux';

import {Button, Container, Row, Col} from 'react-bootstrap';

import {BsFillPlayFill, BsFillPauseFill} from "react-icons/bs";


const ButtonPlay = ({}) => {

    

    return (
        <Button ><BsFillPlayFill className=""/>
        </Button>      
    );
}




const mapStateToProps = (state) => {
    return {

    }
}

/*recibe un “state” y obtiene las propiedades de este que vaya a utilizar el componente */
const mapDispatchToProps = {}


export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(ButtonPlay);