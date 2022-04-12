import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';

import {Button, Image,  Container, Row, Col, Offcanvas} from 'react-bootstrap';
import useViewport from "../../hooks/useViewport";
import DurationSlider from './footerComponents/DurationSlider';
import VolumeSlider from './footerComponents/VolumeSlider';

import { BsCircleFill } from "react-icons/bs";

import Marquee from "react-fast-marquee";

import {BsFillFileEarmarkMusicFill, BsChevronUp, BsFillPauseFill, BsFillPlayFill, BsSkipEndFill} from "react-icons/bs";
import {nav_change_song_status, nav_next_song, nav_previous_song, nav_set_footer_show} from '../../redux/actions/navActions';



const Footer = ({currentArtist, currentSong, footerShow, 
        nav_change_song_status, nav_next_song, nav_previous_song, nav_set_footer_show}) => {
    const { mobileBreakpoint, heightViewport, widthViewport } = useViewport();
    
    const handleClose = () => nav_set_footer_show(false);
    const handleShow = () => nav_set_footer_show(true);
  
    useEffect(() => {
        //nav_set_footer_show(true)
    }, [])
    

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
        <>
            {
                widthViewport > mobileBreakpoint ? //shows toggleButton Offcanvas if not mobile view
                    footerShow == true ? <Button id="hideOffCanvas" onClick={handleClose} className="roundedButton"><BsChevronUp style={{transform: "rotate(180deg)"}} /></Button>
                    : <Button id="hideOffCanvas" onClick={handleShow} className="roundedButton"><BsChevronUp /></Button>
                :<></>
            }

            {
                widthViewport > mobileBreakpoint ? //footer for web view
                    <Offcanvas id="offCanvasFooter" style={{width:"100%"}} keyboard={false} scroll={true} backdrop={false} autoFocus={false} enforceFocus={false} placement="bottom" show={footerShow} onHide={handleClose} >
                        <Offcanvas.Body style={{width:"100%"}} id="footerMR" >
                            <Row>
                                <Col sm={3} id="footer_song_div"> 
                                    <Row>
                                        <Col sm={3} style={{textAlign:"center"}}>
                                            <BsFillFileEarmarkMusicFill style={{height:"4em", width: "4em", marginTop:"10%" ,stroke:"black"}}/> 
                                            {/* <Image fluid="true" style={{border: "1px solid black"}}></Image> */}                     
                                        </Col>
                                        <Col sm={6}>
                                            <Marquee 
                                                    pauseOnHover="true" 
                                                    gradient="false"
                                                    gradientWidth="0"
                                                    speed="10"
                                                    className="song_title_footer">
                                                        {currentSong.title=="" ? "No song selected" : <span>{currentSong.title }</span>}
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
                                            <Row className="centerElementsX" /* style={{width:"100%"}} */>
                                                {/* <Col /* xs={9}  style={{display:"flex", alignItems:"center"}}> */}
                                                    <VolumeSlider/>
                                               {/*  </Col> */}
                                                
                                            </Row>
                                        </Col>
                                        :""
                                }
                                
                            </Row>
                        </Offcanvas.Body>
                    </Offcanvas>
                : 
                <Row className="footerMobileView">
                    <Col xs={7} className="marqueeMobileView centerElementsY"> {/* mobile view */}
                        <Marquee 
                                pauseOnHover="true" 
                                gradient="false"
                                gradientWidth="0"
                                speed="10"
                                >
                                    {currentSong.title=="" ? "No song selected - Unknown artist" : <><span className="song_title_footer">{currentSong.title}</span><BsCircleFill style={{fill:"black", marginTop:"0"}} className="ballSeparator"/><span className="artist_name_footer">{currentArtist.artistName}</span><BsCircleFill style={{fill:"black", marginTop:"0"}} className="ballSeparator"/></>}
                        </Marquee>
                    </Col>
                    <Col xs={5} className="centerElementsX centerElementsY" >
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
 
            }
            
        </>
    );
}


const mapStateToProps = (state) => {
    return {
        currentArtist: state.navState.currentArtist,
        currentSong: state.navState.currentSong,
        currentSongList: state.navState.currentSongList,
        footerShow: state.navState.footerShow
    }
}

export default connect(
    mapStateToProps, 
    {nav_change_song_status, nav_next_song, nav_previous_song, nav_set_footer_show}
)(Footer);