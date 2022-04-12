import React, { useEffect } from "react";
import { connect } from "react-redux";

import TopArtistItem from "../topArtists/TopArtistItem";
import { Container, Row, Col } from "react-bootstrap";
import { Parallax } from "react-parallax";

const TopArtist = (props) => {

    return (
        <div>
            <Parallax bgImage={require("../../../../assets/home/top_artist/back3.jpg")} 
            strength={600} >
                <Container style={{paddingTop:"6em"}}>
                    <div className="inlineElements centerElementsX">
                        <hr className="hr-width15" />
                        <h1>TOP ARTIST</h1>
                        <hr className="hr-width15" />
                    </div>
                </Container>
                <h3 className="titleSecondary" style={{ paddingBottom: "1em" }}>
                    Most streamed artist of the week
                </h3>
                <Container>
                    <Row className="centerElementsX">
                        <Col md={4}>
                            <TopArtistItem artistName="Tiesto" />
                        </Col>
                        <Col md={4}>
                            <TopArtistItem artistName="Avicii" />
                        </Col>
                        <Col md={4}>
                            <TopArtistItem artistName="Daft Punk" />
                        </Col>
                    </Row>
                </Container>
            </Parallax>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, {})(TopArtist);
