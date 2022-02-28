import React from 'react';
import { connect } from 'react-redux';

import {Button, Container, Row, Col} from 'react-bootstrap';

import { ImPrevious2, ImPlay3, ImNext2 } from "react-icons/im";
import { ImVolumeMute2, ImVolumeLow, ImVolumeMedium, ImVolumeHigh} from "react-icons/im";



const Footer = ({}) => {

    return (
        <section  id="footerMR" >
            <Row >
                <Col id="footer_song_div" xs={7} className='centerElementsX'>    
                    <h3><span id="song_title_footer">Song title</span> <span className="colorNegro"> - </span><span id="artist_name_footer"> Artist</span></h3> 
                </Col>
                <Col xs={5}  id="buttons_play" style={{paddingRight:'0', paddingLeft:'0'}} className='centerElementsX'>
                    <Button id="volume" className="roundedButton"><i><ImVolumeHigh /></i></Button>
                    <Button id="back" className="roundedButton"><i><ImPrevious2 /></i></Button>
                    <Button id="play" ><i><ImPlay3 /></i></Button>
                    <Button id="next" className="roundedButton"><i><ImNext2 /></i></Button>
                </Col>
            </Row>
        </section>
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
)(Footer);