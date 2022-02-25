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
                <Row lg="auto">
                    <Col lg={8} style={{paddinRight:'5em'}}>
                        <Image src={NoticiaImg} alt="SHM World tour" style={{width:'100%'}}/>
                    </Col>
                    <Col lg={4} style={{paddingTop:'1em'}} style={{textAlign: 'center'}}>
                        <h1>SWEDISH HOUSE MAFFIA <span className="customGreen">WORLD TOUR</span></h1>
                        <p>Swedish House Mafia announced their first official tour since 2013, planning 44 dates in North America and the UK/Europe in 2022. The group timed the announcement of the Paradise Again tour dates with the release of a new swingle, featuring The Weeknd.</p>
                        <ButtonMR id="buttonShmTour" className="centerElementsX"/>
                    </Col>
                </Row>
            </section>
            <section id="slider">
                <Container >
                    <Slider></Slider>
                </Container>
            </section>
            <section id="top_artist" >
                <div>
                    <Container>
                        <div className="inlineElements centerElementsX">
                            <hr/>
                            <h1>TOP ARTIST</h1>
                            <hr/>
                        </div>
                    </Container>
                    <h2 className="titleSecondary" >Most streamed artist of the week</h2>
                    <Row lg="9"> 
                        <Col>
                            <TopArtistItem songName="" artistName="" videoUrl=""/>
                        </Col>
                        <Col>
                            <TopArtistItem songName="" artistName="" videoUrl=""/>
                        </Col>
                        <Col>
                            <TopArtistItem songName="" artistName="" videoUrl=""/>
                        </Col>
                    </Row>
                </div>
            </section>
            <section id="hot_videoclips">
                <h1 id="titleHotVideos" className="titleSecondary" style={{marginLeft:'10%', textAlign: 'left'}}>HOT <span className="customGreen">VIDEOCLIPS</span></h1>
                <Container> 
                    <HotVideoclips/>
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