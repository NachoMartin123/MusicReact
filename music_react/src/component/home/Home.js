import React, { Component } from 'react';
import { connect } from 'react-redux';

import TopArtistItem from './TopArtistItem';
import VideoClipItem from './VideoClipItem';
import Slider from './Slider';

import VideoPromo from '../../assets/video_app_Promo.mp4';
import NoticiaImg from '../../assets/SHM_worldTour.png';


import {Button, Container, Row, Col} from 'react-bootstrap';

const Home = ({}) => {

    return (
        <div>
            <section id="noticia">
                <Row>
                    <Col style={{width:'75%'}}>
                        <img src={NoticiaImg}></img>
                    </Col>
                    <Col style={{width:'25%'}}>
                        <h1>SWEDISH HOUSE MAFFIA <span className="customGreen">WORLD TOUR</span></h1>
                        <p>Swedish House Mafia announced their first official tour since 2013, planning 44 dates in North America and the UK/Europe in 2022. The group timed the announcement of the Paradise Again tour dates with the release of a new swingle, featuring The Weeknd.</p>
                    </Col>
                </Row>
            </section>
            <section id="slider">
                <Container>
                    <Slider></Slider>
                </Container>
            </section>
            <section id="top_artist">
                <div>
                    <div className="inlineElements">
                        <hr />
                        <h1 style={{display : 'inline'}}>TOP ARTIST</h1>
                        <hr/>
                        <h2>Most streamed artist of the week</h2>
                    </div>
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
                <div> Esto es el video frame</div>
                <VideoClipItem/>
                <VideoClipItem/>
                <VideoClipItem/> 
            </section>
            <section id="join_our_app">
                <div className="centerElements">
                    <h1 style={{display : 'inline'}}>Join our <span className="customGreen">app</span></h1>
                    {/*<h1 style={{display : 'inline'}}> </h1>*/}
                </div>
                <video src={VideoPromo} width="100%"  autoPlay loop muted>
                    <source src={VideoPromo} type="video/mp4"/>
                    {/*<source src="movie.ogg" type="video/ogg">*/}
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