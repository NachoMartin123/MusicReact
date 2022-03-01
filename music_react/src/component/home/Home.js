import React, { Component } from 'react';
import { connect } from 'react-redux';

import TopArtistItem from './TopArtistItem';
import HotVideoclips from './HotVideoclips';
import Slider from './Slider';
import ButtonMR from '../common/ButtonMR'

import VideoPromo from '../../assets/video_app_Promo.mp4';
import NoticiaImg from '../../assets/SHM_worldTour.png';
import AviciiImg from '../../assets/top_artist/avicii.jpg';
import DaftPunkImg from '../../assets/top_artist/daft_punk.jpg';
import TiestoImg from '../../assets/top_artist/tiesto.png';

import {Button, Container, Row, Col} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';


const Home = ({}) => {

    return (
        <div>
            <section id="noticia">
                <Row>
                    <Col lg={8} style={{paddinRight:'5em'}}>
                        <Image fluid src={NoticiaImg} alt="SHM World tour" style={{width:'100%'}}/>
                    </Col>
                    <Col lg={4} style={{paddingTop:'1em', textAlign: 'center'}}>
                        <h1>SWEDISH HOUSE MAFFIA <span className="customGreen">WORLD TOUR</span></h1>
                        <p>Swedish House Mafia announced their first official tour since 2013, planning 44 dates in North America and the UK/Europe in 2022. The group timed the announcement of the Paradise Again tour dates with the release of a new swingle, featuring The Weeknd.</p>
                        <ButtonMR id="buttonShmTour" className="centerElementsX"/>
                    </Col>
                </Row>
            </section>
            <section id="slider">
                <Container style={{width:'80%'}}>
                    <Slider ></Slider>
                </Container>
            </section>
            <section id="top_artist">
                <div className="backAzulFuerte">
                    <Container>
                        <div className="inlineElements centerElementsX" >
                            <hr className="hr-width15"/>
                            <h1>TOP ARTIST</h1>
                            <hr className="hr-width15"/>
                        </div>
                    </Container>
                    <h3 className="titleSecondary" style={{paddingBottom:'1em'}}>Most streamed artist of the week</h3>
                    <Container>
                        <Row  className="centerElementsX" > 
                            <Col md={4}>
                                <TopArtistItem artistName="Tiesto"/>
                            </Col>
                            <Col md={4}>
                                <TopArtistItem artistName="Avicii"/>
                            </Col>
                            <Col md={4}>
                                <TopArtistItem artistName="Daft Punk"/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            <section id="hot_videoclips" >
                 <Container> 
                    <h1 id="titleHotVideos" className="titleSecondary" style={{ 
                        textAlign: 'left'}}>HOT <span className="customGreen">VIDEOCLIPS</span></h1>
                    <hr className="hr"/>
                    <HotVideoclips />
                    <hr className="hr"/>
                </Container>
            </section>
            <section id="join_our_app">
                <div className="centerElementsX">
                    <h1 style={{display : 'inline'}}>Join our <span className="customGreen">app</span></h1>
                </div>
                <video src={VideoPromo} width="100%"  autoPlay loop muted>
                    <source src={VideoPromo} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </section>
        </div>
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
)(Home);