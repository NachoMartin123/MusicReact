import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import {Button, Container, Row, Col} from 'react-bootstrap';
import useViewport from "../../hooks/useViewport";
import DurationSlider from './footerComponents/DurationSlider';
import VolumeSlider from './footerComponents/VolumeSlider';

import {BsChevronUp, BsFillPauseFill, BsFillPlayFill, BsSkipEndFill} from "react-icons/bs";


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
            <Row>
                <Col id="footer_song_div" xs={2}  sm={3} className='centerElementsX'> 
                    <div className="loopHorizontalAnimation">
                        <div><span className="song_title_footer">{currentSong.title}</span></div>
                        <div><span className="artist_name_footer">{currentArtist.artistName}</span></div>
                    </div>
                </Col>
                <Col xs={5}  sm={6} id="buttons_play" className='centerElementsX footerButtons'>
                    <Row style={{width:"100%"}}>
                        <Row className="centerElementsX centerElementsY" >
                            <Button id="back" onClick={previousSong} className="roundedButton"><BsSkipEndFill style={{transform: "rotate(180deg)"}}/></Button>
                            <Button id="play" onClick={changeStatus}>{
                                currentSong.status==="play" ?
                                <BsFillPlayFill/>
                                :  <BsFillPauseFill/>
                            }
                            </Button>
                            <Button id="next" onClick={nextSong} className="roundedButton"><BsSkipEndFill /></Button>
                        </Row>
                        <Row className="centerElementsX" style={{width: "100%"}}>
                            <DurationSlider/>
                        </Row>
                    </Row>
                </Col>
                {
                    widthViewport >= 576 ?
                        <Col  id="volume_footer" xs={4} sm={3} className="centerElementsY">
                            <Row className="centerElementsX" style={{width:"100%"}}>
                                <Col xs={9} style={{display:"flex", alignItems:"center"}}>
                                    <VolumeSlider/>
                                </Col>
                                <Col xs={3} className="centerElementsX" style={{alignItems:"center"}}>
                                    <Button id="volume" className="roundedButton"><BsChevronUp /></Button>
                                </Col>
                            </Row>
                        </Col>
                        :""
                }
                
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