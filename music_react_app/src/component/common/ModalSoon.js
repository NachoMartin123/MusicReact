import {React, useEffect} from 'react';
import { connect } from 'react-redux';

import {nav_show_modal} from "../../redux/actions/navActions";

import Modal from 'react-bootstrap/Modal';
import {Container,Row, Col, Button} from 'react-bootstrap';

import MusicReact from "../../assets/MusicReact.svg"


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
          <Modal.Header className="myModal modalHeader" style={{border:0}} /* closeButton */>
            <Modal.Title id="contained-modal-title-vcenter"> 
                <img
                    src={MusicReact}
                    width="90"
                    height="90"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                <h4>Coming soon</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="myModal">
            <h4>Available views: Home, Artist and About</h4>
            {/* <p>
              Check available views: Home, Artists and About 
            </p> */}
          </Modal.Body>
          <Modal.Footer className="myModal" style={{border:0}}>
            <Button className="buttonModal" onClick={hideModalTrigger}>Close</Button>
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