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
			<div className="back1About" style={{height:"50%", paddingTop:"4em", paddingBottom:"4em", backgroundImage:`url(${(back1)})`}}>
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
			<div className="back2About" style={{backgroundImage:`linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(0,212,255,0) 100%), url(${(back2)})`}}>
				<Container className="backFilter" style={{paddingTop:"6em", paddingBottom:"9em"}}>
					<h2 className="titleSecondary" style={{marginTop:"2em"}}>
						OUR <span className="customGreen">NUMBERS</span>
					</h2>
					<Row style={{marginTop:"5em", marginBottom:"2em"}}>
						<Badge iconType="test"/>
						<Badge iconType="users"/>
						<Badge iconType="satisfaction"/>
						<Badge iconType="award"/>
					</Row>
					<Container style={{textAlign:"center", marginTop:"3em", marginBottom:"2em"}}>
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

