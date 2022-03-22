import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

import {Container, Col, Row} from 'react-bootstrap';

import {BsFillBugFill, BsPeopleFill, BsHandThumbsUpFill, BsSpeedometer} from "react-icons/bs"

const Badge = ({iconType}) => {
    const [texto1, setTexto1] = useState("");//initial state value
    const [texto2, setTexto2] = useState("");//initial state value

    useEffect(() => {
        if(iconType=="test"){
            setTexto1(">90");
            setTexto2("Test");
        }else if(iconType=="users"){
            setTexto1("15M");
            setTexto2("Users per month");
        }else if(iconType=="satisfaction"){
            setTexto1("100%");
            setTexto2("User satisfaction");
        }else if(iconType=="speed"){
            setTexto1("Speed");
            setTexto2("Instant load");
        }
    }, []);

    return (
        <Col className="badge">
           {
               texto1=="test" ? <BsFillBugFill/>
               : texto1=="users" ? <BsPeopleFill/>
               : texto1=="satisfaction" ? <BsHandThumbsUpFill/>
               : texto1=="speed" ? <BsSpeedometer/>
               : <BsSpeedometer/>
           }
            <h3>{texto1}</h3>
            <h4 style={{color:"white", textAlign:"center"}}>{texto2}</h4>
            <div className="badge-linea"></div>
        </Col>    
    );
}


const mapStateToProps = (state, ownProps) => {
    return {
        iconType: ownProps.iconType
    }
}

export default connect(
    mapStateToProps, 
    {}
)(Badge);