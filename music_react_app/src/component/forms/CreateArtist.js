import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import {reduxForm, Field} from 'redux-form';

import {Button, Container, Row, Col} from 'react-bootstrap';
import {createArtist} from '../../redux/actions/apiActions';

const validate = values => {
    const errors = {};
    return errors;
}


const renderField = ({label, input, type}) => (
    <div>
        <label className='control-label'>{label}</label>
        <div>
            <input {...input} type={type} className='form-control' placeholder={label} />
            
        </div>
    </div>
)

let CreateArtist = ({handleSubmit, createArtist}) => {
    //The submitted data is passed as JSON object to your onSubmit function
    const beforeSubmit = (event, values) => {
        console.log("Los values son: "+values);
        event.preventDefault();// the user press 'enter', the page won't reload:
        /* const myNewUser = {
            artistName: values.artistName
        } */
        //values.user_id = 13;
        createArtist(values);
    }
    return (
        <div className="Form">
            <h3>Insert new artist</h3>
            <form onSubmit={beforeSubmit}>
                <Container>
                    <label htmlFor="artistName" style={{color:'white', margin:'1em'}}>Artist name</label>
                    <Field name='artistName' type='text' component="input"/>
                </Container>
                <Container>
                    <input type='submit' value='Enviar'/>
                </Container>
            </form>
            { /*isArtistCreated ? 'Datos enviados correctamente' : '' */}
        </div>
    );
    
};



CreateArtist = reduxForm({
    form: 'new artist'//, unique name for the form
    //validate
})(CreateArtist)

const mapStateToProps = (state) => {
    return {
        //isArtistCreated: state.apiState.isArtistCreated
    };
};

export default connect(
    mapStateToProps, 
    { createArtist }
)(CreateArtist);
