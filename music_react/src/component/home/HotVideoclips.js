import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Iframe from 'react-iframe';

import {Row, Col} from 'react-bootstrap'; 

import VideoClipItem from './VideoclipItem';



const HotVideoclips = ({currentVideoclip}) => {

    /* useEffect(() => {
        
    }, [currentVideoclip]); */

    return (
      <Row style={{height:'150%'}}>
            <Col lg={8}>
                <Iframe url={currentVideoclip.videoUrl}
                            width="100%"
                            height="400em"
                            id="currentVideoclip"
                            className=""
                            display="initial"
                            position="relative"
                            allowfullscreen />
            </Col>
            <Col lg={4} style={{height:'100%'}} >
                <VideoClipItem songName="Dancing in my head ft Eric Turner" artistName="Avicii" videoUrl="https://www.youtube.com/embed/ZMScU2bRORE" position="1" status="up"/>
                <VideoClipItem songName="Sun is Shining" artistName="Axwell /\ Ingrosso" videoUrl="https://www.youtube.com/embed/nbXgHAzUWB0" position="2" status="down"/>
                <VideoClipItem songName="Pizza" artistName="Martin Garrix" videoUrl="https://www.youtube.com/embed/JsKIAO11q1Y" position="3" status="up"/> 
                <VideoClipItem songName="Stole The Show ft Parson James" artistName="Kygo" videoUrl="https://www.youtube.com/embed/BgfcToAjfdc" position="4" status="down"/> 
            </Col>
      </Row>
    );
}




const mapStateToProps = (state) => {
    return {
        currentVideoclip: state.navState.currentVideoclip
    }
}

export default connect(
    mapStateToProps, 
    {}
)(HotVideoclips);