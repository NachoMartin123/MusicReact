import React from 'react';
import { connect } from 'react-redux';

import {Button, Container, Row, Col} from 'react-bootstrap';

import { ImPrevious2, ImPlay3, ImNext2 } from "react-icons/im";
import { ImVolumeMute2, ImVolumeLow, ImVolumeMedium, ImVolumeHigh} from "react-icons/im";



const Footer = ({}) => {

    return (
      <Row>
          <Col style={{width:"75%"}}>
              <Container id="footer_song_div">
                <h2 id="song_title_footer">Song title</h2>
                <span> - </span>
                <h2 id="artist_name_footer">Artist</h2>
              </Container>
          </Col>
          <Col id="buttons_play" style={{width:"25%"}}>
                <Button id="volume" className="roundedButton"><i><ImVolumeHigh/></i></Button>
                <Button id="back" className="roundedButton"><i><ImPrevious2/></i></Button>
                <Button id="play" className="roundedButton"><i><ImPlay3/></i></Button>
                <Button id="next" className="roundedButton"><i><ImNext2/></i></Button>
          </Col>
      </Row>
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