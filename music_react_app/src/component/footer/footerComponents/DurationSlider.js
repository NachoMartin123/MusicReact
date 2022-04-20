import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';

import {Button, Container, Row, Col} from 'react-bootstrap';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'

import {nav_set_song_current_seconds} from "../../../redux/actions/navActions";


const DurationSlider = ({currentSong, nav_set_song_current_seconds, totalSeconds, currentSeconds}) => {
    
    useEffect(()=>{

    },[currentSong.title]); 

    useEffect(()=>{
       
    }, [currentSeconds]);


    function handleChange (handleValue) {
        nav_set_song_current_seconds(parseInt(handleValue));
    }

    function calculateStringCurrentSeconds(){
        if(currentSeconds % 60 <10)
            return Math.floor(currentSeconds / 60)+":0"+ currentSeconds % 60;
        return Math.floor(currentSeconds / 60)+":"+ currentSeconds % 60;
    }

    return (
        <div className='durationSlider centerElementsX' style={{display:"flex"}}>
            <span className="centerElementsY">{
                currentSeconds == 0 || isNaN(currentSeconds) ? "0:00" 
                : calculateStringCurrentSeconds() }
            </span>
            <Slider id="sliderVolume" className="slider" 
                min={0}
                max={parseInt(totalSeconds)}
                value={currentSeconds}
                onChange={handleChange}
                tooltip={false}
            />
            <span className="centerElementsY">{
                currentSong.duration=="" ? "0:00": currentSong.duration}</span>
        </div>
    );
}


const mapStateToProps = (state, ownProps) => {
    return {
        currentSong: state.navState.currentSong,
        currentSeconds : state.navState.currentSeconds,
        totalSeconds: ownProps.totalSeconds
    }
}

export default connect(
    mapStateToProps, 
    {nav_set_song_current_seconds}
)(DurationSlider);