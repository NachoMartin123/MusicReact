import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';

import {Button, Container, Row, Col} from 'react-bootstrap';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'

import {nav_next_song, nav_change_song_status} from "../../../redux/actions/navActions";


const DurationSlider = ({currentSong, nav_next_song, nav_change_song_status}) => {
    const [totalSeconds, setTotalSeconds] = useState();
    
    const [currentSeconds, setCurrentSeconds] = useState(0);
  
    useEffect(()=>{
        setCurrentSeconds(0);
        setTotalSeconds(100);
    },[]);
    
    useEffect(()=>{
        setCurrentSeconds(0);
        var data = currentSong.duration.split(":");
        setTotalSeconds(parseInt(data[1])+parseInt(data[0])*60);
        nav_change_song_status({status:"play"});
    },[currentSong.title]); 


    useEffect(()=>{
        var data = currentSong.duration.split(":");
        setTotalSeconds(parseInt(data[1])+parseInt(data[0])*60);

        var intervalId;
        if(currentSong.status=="play"){
            intervalId = setInterval(() => update(), 1000);
        }
        return () => clearInterval(intervalId);
    }, [currentSong.status, currentSeconds]);

    function update(){
        if(currentSong.status=="play"){
            console.log("status: PLAY");
            console.log("currentSeconds==totalSeconds ? "+(currentSeconds==totalSeconds));
            if((currentSeconds===totalSeconds))
                nav_next_song();
            if(currentSeconds == 0)
                setCurrentSeconds(1);
            else
                setCurrentSeconds(currentSeconds+1);

            console.log("actual currentSeconds:"+currentSeconds+", totalSeconds: "+totalSeconds)
        }
    }

    function handleChange (handleValue) {
        setCurrentSeconds(parseInt(handleValue));
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
            <Slider className="slider" 
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


const mapStateToProps = (state) => {
    return {
        currentSong: state.navState.currentSong
    }
}

export default connect(
    mapStateToProps, 
    {nav_next_song, nav_change_song_status}
)(DurationSlider);