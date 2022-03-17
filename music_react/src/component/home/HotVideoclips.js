import React, { } from 'react';
import { connect } from 'react-redux';

import Iframe from 'react-iframe';

import {Button, Container, Row, Col} from 'react-bootstrap';

import VideoClipItem from './VideoclipItem';


const HotVideoclips = ({}) => {

    return (
      <Row style={{height:'150%'}}>
            <Col lg={8}>
                <Iframe url="https://www.youtube.com/embed/ovdm2yX4MA"
                            width="100%"
                            height="400em"
                            id="currentVideoclip"
                            className=""
                            display="initial"
                            position="relative"
                            allowfullscreen />
            </Col>
            <Col lg={4} style={{height:'100%'}} >
                <VideoClipItem songName="Levels" artistName="Avicii" videoUrl="https://www.youtube.com/embed/watch?v=_ovdm2yX4MA" position="1" status="down"/>
                <VideoClipItem songName="Sun is Shining" artistName="Axwell /\ Ingrosso" videoUrl="https://www.youtube.com/watch?v=nbXgHAzUWB0" position="2" status="up"/>
                <VideoClipItem songName="Pizza" artistName="Martin Garrix" videoUrl="https://www.youtube.com/watch?v=JsKIAO11q1Y" position="3" status="up"/> 
                <VideoClipItem songName="Stole The Show ft Parson James" artistName="Kygo" videoUrl="https://www.youtube.com/watch?v=BgfcToAjfdc" position="4" status="down"/> 
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