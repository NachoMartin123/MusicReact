import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import {Button, Image,  Container, Row, Col} from 'react-bootstrap';
import useViewport from "../../hooks/useViewport";
import DurationSlider from './footerComponents/DurationSlider';
import VolumeSlider from './footerComponents/VolumeSlider';

import Marquee from "react-fast-marquee";

import {BsChevronUp, BsFillPauseFill, BsFillPlayFill, BsSkipEndFill} from "react-icons/bs";
import {nav_change_song_status, nav_next_song, nav_previous_song} from '../../redux/actions/navActions';

import { BsMusicNoteBeamed } from "react-icons/bs";


const Footer = ({currentArtist, currentSong, nav_change_song_status, nav_next_song, nav_previous_song}) => {
    const { heightViewport, widthViewport } = useViewport();

    function nextSong() {
        if(currentSong.title!=""){
            nav_next_song();
            nav_change_song_status({status:"pause"});
        }
    }
    function previousSong() {
        if(currentSong.title!=""){
            nav_previous_song();
            nav_change_song_status({status:"pause"});
        }
    }

    function changeStatus() {
        if(currentSong.title!=""){
            if(currentSong.status==="play"){
                nav_change_song_status({status:"pause"});
            }else if(currentSong.status==="pause"){
                nav_change_song_status({status:"play"}); 
            }
        }
    }
    
    return (
        <section  id="footerMR" >
            <Row>
                <Col sm={3} id="footer_song_div" className='centerElementsX'> 
                    <Row>
                        <Col sm={4} style={{padding:"0.5em"}}>
                            <BsMusicNoteBeamed style={{height:"80%", width: "80%",stroke:"black"}}/>
                            {/* <Image style={{border: "1px solid black"}}></Image>    */}                     
                        </Col>
                        <Col sm={8} style={{padding:"0.5em"}}>
                            <Marquee 
                                    pauseOnHover="true" 
                                    gradient="false"
                                    gradientWidth="0"
                                    speed="10"
                                    className="song_title_footer">
                                        {currentSong.title=="" ? "No song selected" : currentSong.title}
                            </Marquee>
                            <Marquee 
                                    pauseOnHover="true" 
                                    gradient="false"
                                    gradientWidth="0"
                                    speed="10"
                                    className="artist_name_footer">
                                        {currentSong.title=="" ? "Unknown artist" : currentArtist.artistName}
                            </Marquee>
                        </Col>
                    </Row>
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
                        <Col  id="volume_footer" className="centerElementsY">
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