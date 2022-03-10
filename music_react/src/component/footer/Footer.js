import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import {Button, Container, Row, Col} from 'react-bootstrap';

import { ImPrevious2, ImPlay3, BsFillPauseFill, ImNext2 } from "react-icons/im";
import { ImVolumeMute2, ImVolumeLow, ImVolumeMedium, ImVolumeHigh} from "react-icons/im";



const Footer = ({currentArtist, currentSong}) => {


    
    return (
        <section  id="footerMR" >
            <Row >
                <Col id="footer_song_div" xs={7} lg={8} className='centerElementsX'>     
                    <h3>
                        <span id="song_title_footer">{currentSong.title }</span>
                        <span className="colorNegro"> - </span>
                        <span id="artist_name_footer">{currentArtist.artistName}</span>
                    </h3> 
                </Col>
                <Col xs={5} lg={4} id="buttons_play" style={{paddingRight:'0', paddingLeft:'0'}} className='centerElementsX'>
                    <Button id="volume" className="roundedButton"><i><ImVolumeHigh /></i></Button>
                    <Button id="back" className="roundedButton"><i><ImPrevious2 /></i></Button>
                    <Button id="play" ><i><ImPlay3 /></i></Button>
                    <Button id="next" className="roundedButton"><i><ImNext2 /></i></Button>
                </Col>
            </Row>
        </section>
    );
}


const mapStateToProps = (state) => {
    return {
        currentArtist: state.navState.currentArtist,
        currentSong: state.navState.currentSong
    }
}

export default connect(
    mapStateToProps, 
    {}
)(Footer);