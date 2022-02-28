import React, { Component } from 'react';
import { connect } from 'react-redux';

import Iframe from 'react-iframe';

import {Button, Container, Row, Col} from 'react-bootstrap';

import VideoClipItem from './VideoclipItem';


const HotVideoclips = ({}) => {

    return (
      <Row style={{height:'150%'}}>
            <Col lg={8}>
                <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                            width="100%"
                            height="400em"
                            id="currentVideoclip"
                            className=""
                            display="initial"
                            position="relative"/>
            </Col>
            <Col lg={4} style={{height:'100%'}}>
                <VideoClipItem songName="" artistName="" videoUrl="" />
                <VideoClipItem songName="" artistName="" videoUrl=""/>
                <VideoClipItem songName="" artistName="" videoUrl="" /> 
                <VideoClipItem songName="" artistName="" videoUrl="" /> 
            </Col>
      </Row>
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
)(HotVideoclips);