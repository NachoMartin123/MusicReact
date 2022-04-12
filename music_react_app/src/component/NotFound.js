import React, { Component } from 'react';
import { connect } from 'react-redux';

const NotFound = ({}) => {

    return (
      <div>
          <h1>Not found motherfucker</h1>
      </div>
    );
}




const mapStateToProps = (state) => {
    return {

    }
}


export default connect(
    mapStateToProps, 
    {}
)(NotFound);