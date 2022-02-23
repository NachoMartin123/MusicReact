import React, { Component } from 'react';
import { connect } from 'react-redux';

import TopArtistItem from './TopArtistItem';
import VideoClipItem from './VideoClipItem';
import Slider from './Slider';

import VideoPromo from '../../assets/video_app_Promo.mp4';

const Home = ({}) => {

    return (
        <div>
            <section id="noticia">
                <h1>Estamos en Home</h1>
            </section>
            <section id="slider">
                <h1>Estamos en Home</h1>
                <Slider></Slider>
            </section>
            <section id="top_artist">
                <h1>TOP ARTIST</h1>
                <h2>Most streamed artist of the week</h2>
                <TopArtistItem></TopArtistItem>
                <TopArtistItem></TopArtistItem>
                <TopArtistItem></TopArtistItem>
            </section>
            <section id="hot_videoclips">
                <div> Esto es el video frame</div>
                <VideoClipItem></VideoClipItem>
                <VideoClipItem></VideoClipItem>
                <VideoClipItem></VideoClipItem> 
            </section>
            <section id="join_our_app">
                <div>
                    <h1 style={{display : 'inline'}}>Join our</h1>
                    <h1 style={{display : 'inline'}}> app</h1>
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