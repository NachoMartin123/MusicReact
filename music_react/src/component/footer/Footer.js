import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import {Button, Container, Row, Col} from 'react-bootstrap';
import useViewport from "../../hooks/useViewport";

import {BsFillPauseFill, BsFillPlayFill, BsSkipEndFill} from "react-icons/bs";
import { ImVolumeMute2, ImVolumeLow, ImVolumeMedium, ImVolumeHigh} from "react-icons/im";


import {nav_change_song_status, nav_next_song, nav_previous_song} from '../../redux/actions/navActions';


const Footer = ({currentArtist, currentSong, nav_change_song_status, nav_next_song, nav_previous_song}) => {
    const { heightViewport, widthViewport } = useViewport();

    function nextSong() {
        nav_next_song();
        nav_change_song_status({status:"pause"});//useEffect changes to play
    }
    function previousSong() {
        nav_previous_song();
        nav_change_song_status({status:"pause"});//useEffect changes to play
    }

    function changeStatus() {

        if(currentSong.status==="play"){
            nav_change_song_status({status:"pause"});
        }else if(currentSong.status==="pause"){
            nav_change_song_status({status:"play"});
        }

    }
    
    return (
        <section  id="footerMR" >
            <Row >
                <Col id="footer_song_div" xs={7} lg={8} className='centerElementsX'>   
                        <span id="song_title_footer">{currentSong.title}</span>
                        <span id="artist_name_footer">{currentArtist.artistName}</span>
                </Col>
                <Col xs={5} lg={4} id="buttons_play" className='centerElementsX footerButtons'>
                    {
                        widthViewport >= 480 ?
                        <Button id="volume" className="roundedButton"><ImVolumeHigh /></Button>
                        :""
                    }
                    <Button id="back" onClick={previousSong} className="roundedButton"><BsSkipEndFill style={{transform: "rotate(180deg)"}}/></Button>
                    <Button id="play" onClick={changeStatus}>{
                        currentSong.status==="play" ?
                        <BsFillPlayFill/>
                         :  <BsFillPauseFill/>
                    }
                    </Button>
                    <Button id="next" onClick={nextSong} className="roundedButton"><BsSkipEndFill /></Button>
                </Col>
            </Row>
        </section>
    );
}


const mapStateToProps = (state) => {
    return {
        currentArtist: state.navState.currentArtist,
        currentSong: state.navState.currentSong,
        currentSongList: state.navState.currentSongList
    }
}

export default connect(
    mapStateToProps, 
    {nav_change_song_status, nav_next_song, nav_previous_song}
)(Footer);