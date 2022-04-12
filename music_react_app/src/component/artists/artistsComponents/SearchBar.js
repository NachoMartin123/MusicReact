import React from 'react';
import { connect } from 'react-redux';

import {Form, InputGroup, FloatingLabel} from 'react-bootstrap';
import {Container} from 'react-bootstrap';

import {BsSearch} from "react-icons/bs";
import {get_artist_names} from "../../../redux/actions/apiActions";

import { useForm } from "react-hook-form";


const SearchBar = ({get_artist_names}) => {

    const { register, handleSubmit } = useForm();

    const beforeSubmit = (values) => {
        //preventDefault no refresca la vista
        const data = {artistsFilter: values.artistsFilter}
        get_artist_names(data);
    }

    return (
      <Container id="searchBar">
          <Form onSubmit={handleSubmit(beforeSubmit)}>
            <Form.Group >
                <InputGroup className="searchGroup">
                    <InputGroup.Text ><BsSearch/></InputGroup.Text>
                    <FloatingLabel controlId="floatingPassword" label="Artist name">
                        <Form.Control {...register("artistsFilter")}  type="text" placeholder="artist name" />
                    </FloatingLabel>
                </InputGroup>
            </Form.Group>
          </Form>
      </Container>
    );
}




const mapStateToProps = (state) => {
    return {

    }
}

export default connect(
    mapStateToProps, 
    {get_artist_names}
)(SearchBar);