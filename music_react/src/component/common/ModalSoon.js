import {React, useEffect} from 'react';
import { connect } from 'react-redux';

import {nav_show_modal} from "../../redux/actions/navActions";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const ModalSoon = ({showModal, nav_show_modal}) => {

    function showModalTrigger(){
        nav_show_modal(true);
    }

    function hideModalTrigger(){
        nav_show_modal(false);
    }

     useEffect( () => {
      nav_show_modal(false);
    }, [])

    return (
        <Modal
          show={showModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="myModal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Coming soon
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Available views: Home, Artist and About</h4>
            <p>
              Check available views: Home, Artists and About 
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={hideModalTrigger}>Close</Button>
          </Modal.Footer>
        </Modal>  
    );

}




const mapStateToProps = (state) => {
    return { 
        showModal: state.navState.showModal
    }
}

export default connect(
    mapStateToProps, 
    {nav_show_modal}
)(ModalSoon);