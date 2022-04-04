import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';

import {Button, Container, Row, Col} from 'react-bootstrap';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'
import useViewport from "../../../hooks/useViewport";

import { ImVolumeMute2, ImVolumeLow, ImVolumeMedium, ImVolumeHigh} from "react-icons/im";

import {nav_set_volume} from "../../../redux/actions/navActions";


const VolumeSlider = ({nav_set_volume, volume}) => {
    const { heightViewport, widthViewport } = useViewport();
    const [valueVolBeforeMute, setValueVolBeforeMute] = useState(volume);
    
    //gets called whenever the slider handle is being dragged or clicked
    function handleChange(handleValue){
        nav_set_volume(parseInt(handleValue));
    }

    function muteUnmute(){
        console.log("MUTE UNMUTE");
        if(volume!=0){
            setValueVolBeforeMute(volume);
            nav_set_volume(0);
        }else{
            nav_set_volume(valueVolBeforeMute);
        }

    }
    
    return (
        <>
            {
                widthViewport >= 480 ?
                      volume == 0? <Button id="volume" onClick={muteUnmute} className="roundedButton"><ImVolumeMute2/></Button>
                    : volume > 0 && volume<=33 ?<Button id="volume" onClick={muteUnmute} className="roundedButton"><ImVolumeLow/></Button>
                    : volume > 33 && volume<=66? <Button id="volume" onClick={muteUnmute} className="roundedButton"><ImVolumeMedium/></Button>
                    : <Button id="volume" onClick={muteUnmute} className="roundedButton"><ImVolumeHigh/></Button>
                :""
            }
            <div style={{width:"90%"}}>
                <Slider className="slider"
                    min={0}
                    max={100}
                    value={volume}
                    onChange={handleChange}
                />
            </div>
        </>
    );
}


const mapStateToProps = (state) => {
    return {
        volume: state.navState.volume
    }
}

export default connect(
    mapStateToProps, 
    {nav_set_volume}
)(VolumeSlider);