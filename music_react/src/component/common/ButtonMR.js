import React from 'react';
import { connect } from 'react-redux';

import {Button} from 'react-bootstrap';

import {BsFillArrowRightCircleFill} from "react-icons/bs"



const ButtonMR = ({texto, myHref}) => {

    return (
        <Button className="buttonMR" href={myHref} >{texto} <BsFillArrowRightCircleFill className="svgHoverParent"/>
        </Button>      
    );
}




const mapStateToProps = (state, ownProps) => {
    return {
        texto: ownProps.texto,
        myHref: ownProps.myHref
    }
}

export default connect(
    mapStateToProps, 
    {}
)(ButtonMR);