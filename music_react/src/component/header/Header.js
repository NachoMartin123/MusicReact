import React, {} from "react";
import { connect } from "react-redux";

import { Navbar, Nav, Container } from "react-bootstrap";
import MusicReact from "../../assets/MusicReact.svg";
import useViewport from "../../hooks/useViewport";

import { nav_show_modal } from "../../redux/actions/navActions";

import {BsFillHouseDoorFill, BsMusicNoteBeamed, BsFillPersonFill, BsListUl, BsInfoCircleFill} from "react-icons/bs";

const Header = ({ nav_show_modal }) => {
    const { mobileBreakpoint, heightViewport, widthViewport } = useViewport(); 

    function showModalTrigger() {
        nav_show_modal(true);
    }

    return (
        <section id="headerId">
            <Container>
                <Navbar fixed={widthViewport > mobileBreakpoint ? "top": "bottom"}>
                    <Container fluid>
                        {
                        widthViewport > mobileBreakpoint ? 
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
                            <Nav.Link href="/">
                                { widthViewport >= mobileBreakpoint ? "" : <BsFillHouseDoorFill/>}
                                Home
                            </Nav.Link>
                            <Nav.Link onClick={showModalTrigger} >
                                { widthViewport > mobileBreakpoint ? "" : <BsMusicNoteBeamed/>}
                                Songs
                            </Nav.Link>
                            <Nav.Link href="/artists" >
                                { widthViewport > mobileBreakpoint ? "" : <BsFillPersonFill/>}
                                Artists
                            </Nav.Link>
                            <Nav.Link onClick={showModalTrigger}>
                                { widthViewport > mobileBreakpoint ? "" : <BsListUl/>}
                                Genres
                            </Nav.Link>
                            <Nav.Link href="/about">
                                { widthViewport > mobileBreakpoint ? "" : <BsInfoCircleFill/>}
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
