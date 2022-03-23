import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

import {Container, Col, Row} from 'react-bootstrap';
import CountUp, { useCountUp } from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import {BsFillBugFill, BsPeopleFill, BsHandThumbsUpFill, BsAwardFill} from "react-icons/bs"

const Badge = ({iconType}) => {
    const [myNumber, setMyNumber1] = useState();//initial state value
    const [texto, setTexto] = useState();//initial state value
    const [prefix, setPrefix] = useState("");//initial state value
    const [sufix, setSufix] = useState("");//initial state value

    useEffect(() => {
        if(iconType=="test"){
            setPrefix(">");
            setMyNumber1(90);
            setTexto("Test");
        }else if(iconType=="users"){
            setSufix("M");
            setMyNumber1(15);
            setTexto("Users per month");
        }else if(iconType=="satisfaction"){
            setSufix("%");
            setMyNumber1(100);
            setTexto("User satisfaction");
        }else if(iconType=="award"){
            setMyNumber1(12);
            setTexto("Award winner");
        }
    }, []);

    return (
        <Col className="badge" md={3} xs={6}>
           {
               iconType=="test" ? <BsFillBugFill/>
               : iconType=="users" ? <BsPeopleFill/>
               : iconType=="satisfaction" ? <BsHandThumbsUpFill/>
               : iconType=="award" ? <BsAwardFill/>
               : <BsAwardFill/>
           }
            <div style={{marginTop:"1em"}}>
                <CountUp end={myNumber} prefix={prefix} suffix={sufix}>
                {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                    </VisibilitySensor>
                )}
                </CountUp>
            </div>
            <h4 style={{marginBottom:"1.5em", color:"white", textAlign:"center"}}>{texto}</h4>
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