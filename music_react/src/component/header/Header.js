import React, {} from "react";
import { connect } from "react-redux";

import { Navbar, Nav, Container } from "react-bootstrap";
import MusicReact from "../../assets/MusicReact.svg";
import useViewport from "../../hooks/useViewport";

import { nav_show_modal } from "../../redux/actions/navActions";

import {BsFillHouseDoorFill, BsMusicNoteBeamed, BsFillPersonFill, BsListUl, BsInfoCircleFill} from "react-icons/bs";

const Header = ({ nav_show_modal }) => {
    const { heightViewport, widthViewport } = useViewport();

    function showModalTrigger() {
        nav_show_modal(true);
    }

    return (
        <section id="headerId">
            <Container>
                <Navbar fixed={widthViewport >= 480 ? "top": "bottom"}>
                    <Container fluid>
                        {
                        widthViewport >= 480 ? 
                        <Navbar.Brand href="#home">
                            <img
                                src={MusicReact}
                                width="90"
                                height="90"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand> 
                        : ""
                        }
                        <Nav id="navMR" style={{ width: "100%" }} className="centerElementsX">
                            <Nav.Link style={{ color: "white" }} href="/" className="fw-bold">
                                { widthViewport >= 480 ? "" : <BsFillHouseDoorFill/>}
                                Home
                            </Nav.Link>
                            <Nav.Link onClick={showModalTrigger} className="fw-bold">
                                { widthViewport >= 480 ? "" : <BsMusicNoteBeamed/>}
                                Songs
                            </Nav.Link>
                            <Nav.Link href="/artists" className="fw-bold">
                                { widthViewport >= 480 ? "" : <BsFillPersonFill/>}
                                Artists
                            </Nav.Link>
                            <Nav.Link onClick={showModalTrigger} className="fw-bold">
                                { widthViewport >= 480 ? "" : <BsListUl/>}
                                Genres
                            </Nav.Link>
                            <Nav.Link href="/about" className="fw-bold">
                                { widthViewport >= 480 ? "" : <BsInfoCircleFill/>}
                                About
                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </Container>
        </section>
    );
};

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, { nav_show_modal })(Header);
