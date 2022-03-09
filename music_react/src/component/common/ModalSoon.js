import {React, useState} from 'react';
import { connect } from 'react-redux';

import {Button, Container, Row, Col} from 'react-bootstrap';
import {Modal} from 'react-bootstrap/Modal';

import {BsFillArrowRightCircleFill} from "react-icons/bs"



const ModalSoon = ({}) => {

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


export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(ModalSoon);