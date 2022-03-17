import React, { Component} from 'react';
import { connect } from 'react-redux';

import Carousel from 'react-bootstrap/Carousel';
import SliderImg1 from "../../assets/home/slider/ultra-music.jpg";
import SliderImg2 from "../../assets/home/slider/david-guetta.jpg";
import SliderImg3 from "../../assets/home/slider/collab.jpg";

import {Container} from 'react-bootstrap'

const Slider = ({}) => {
    return (
        <Carousel>
            <Carousel.Item>
                <h2>Ultra Music Festival <span className="customGreen">Miami Friday 25th</span></h2>
                <img
                className="d-block w-100"
                src={SliderImg1}
                alt="Ultra Music Festival"
                />
                <Carousel.Caption>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <h2>David Guetta <span className="customGreen">new single</span></h2>
                <img
                className="d-block w-100"
                src={SliderImg2}
                alt="David Guetta"
                />
                <Carousel.Caption>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <h2>Bruno Mars & theWeekend<span className="customGreen"> new collab</span></h2>
                <img
                className="d-block w-100"
                src={SliderImg3}
                alt="Collab"
                />
                <Carousel.Caption>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
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
)(Slider);