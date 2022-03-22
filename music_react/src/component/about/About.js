import React, { Component } from "react";
import { connect } from "react-redux";

import { Row, Col, Container } from "react-bootstrap";
import ButtonMR from "../common/ButtonMR";
import Badge from "./badge/Badge.js";
import back1 from "../../assets/about/back1.jpg";
import back2 from "../../assets/about/back2.jpg";
import TechChart from "./usedTechnologies/TechChart";
import MethologiesChart from "./usedTechnologies/MethologiesChart";


const About = ({}) => {
    return (
        <div>
			<div className="back1" style={{height:"50%", paddingTop:"4em", paddingBottom:"4em", backgroundImage:`url(${(back1)})`}}>
				<Container style={{backdropFilter: "blur(1px)"}}>
					<h2  className="titleSecondary">USED <span className="customGreen">TECHNOLOGIES</span></h2>
					<Row>
						<Col xs={6}>
							<TechChart />
						</Col>
						<Col xs={6}>
							<MethologiesChart/>
						</Col>
					</Row>
				</Container>
			</div>
			<div className="back2" style={{backgroundImage:`url(${(back2)})`}}>
				<Container className="backFilter" style={{paddingTop:"6em", paddingBottom:"9em"}}>
					<h2 className="titleSecondary" style={{paddinTop:"9em"}}>
						OUR <span className="customGreen">NUMBERS</span>
					</h2>
					<Row style={{marginTop:"2em", marginBottom:"2em"}}>
						<Badge iconType="test"/>
						<Badge iconType="users"/>
						<Badge iconType="satisfaction"/>
						<Badge iconType="speed"/>
					</Row>
					<Container style={{textAlign:"center", marginTop:"2em", marginBottom:"2em"}}>
						<h1>Do you want to support?</h1>
						<ButtonMR texto="Buy a coffe" />
					</Container>
				</Container>
			</div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {};
};

export default connect(
	mapStateToProps, 
	{}
)(About);

