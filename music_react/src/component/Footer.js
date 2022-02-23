import React, { Component } from 'react';
import { connect } from 'react-redux';

const Footer = ({}) => {

    return (
      <div>
          <div id="footer_song_div">
              <h2 id="song_title_footer">Song title</h2>
              <h2 id="artist_name_footer">Artist</h2>
          </div>
          <div>

          </div>
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
)(Footer);