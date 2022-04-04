import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';

import {Button, Container, Row, Col} from 'react-bootstrap';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'

import {nav_next_song} from "../../../redux/actions/navActions";


const DurationSlider = ({currentSong}) => {
    const [totalSeconds, setTotalSeconds] = useState();
    const [initLabel, setInitLabel] = useState("0:00");

    const [currentSeconds, setCurrentSeconds] = useState(0);
  
    useEffect(()=>{
        setCurrentSeconds(0);
        setTotalSeconds(100);
    },[]);

    useEffect(()=>{
        const timer = setTimeout(() => update(), 1000) //every 1 second

        var data = currentSong.duration.split(":");
        setTotalSeconds(parseInt(data[1])+parseInt(data[0])*60);

        return () => clearTimeout(timer)
    },[currentSong.title]);

    function update(){
        if(currentSong.duration==""){
            setCurrentSeconds(0);
            setTotalSeconds(100);
        }
        else{
            if(currentSong.status=="play"){
                setInitLabel(currentSeconds);
                if(currentSeconds==totalSeconds)
                    nav_next_song();
                if(currentSeconds==0) 
                    setCurrentSeconds(1);
                else
                    setCurrentSeconds(currentSeconds+1);
            }
        }
    }

    function handleChange (handleValue) {
        setCurrentSeconds(parseInt(handleValue));
        console.log("handleValue: "+handleValue+",  parseInt(handleValue)"+parseInt(handleValue))
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
    {nav_next_song}
)(DurationSlider);