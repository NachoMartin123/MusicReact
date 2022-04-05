import React, { Component } from "react";
import { connect } from "react-redux";

import { Row, Col, Container, ListGroup, Tab} from "react-bootstrap";


import ButtonMR from "../common/ButtonMR";
import Badge from "./aboutComponents/myBadge/MyBadge.js";
import back1 from "../../assets/about/back1.jpg";
import back2 from "../../assets/about/back2.jpg";
import TechChart from "./aboutComponents/TechChart/TechChart";
import MethologiesChart from "./aboutComponents/MethologiesChart/MethologiesChart";


const About = ({}) => {
    return (
        <div>
			<div className="back1About" style={{height:"50%", paddingTop:"4em", paddingBottom:"4em", backgroundImage:`url(${(back1)})`}}>
				<Container style={{backdropFilter: "blur(1px)"}}>
					<h2  className="titleSecondary">COMMON <span className="customGreen">QUESTIONS</span></h2>
					<Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
						<Row style={{height:"100%"}}>
							<Col sm={4}>
								<ListGroup>
									<ListGroup.Item action href="#link1">
										<div className="fw-bold">Languages</div>
      										Programing languages used to develop the app
									</ListGroup.Item>
									<ListGroup.Item action href="#link2">
										<div className="fw-bold">Methologies</div>
      										Frontend and backend integration diagram
									</ListGroup.Item>
									<ListGroup.Item action href="#link3">
										<div className="fw-bold">Getting started</div>
      										How to use the app
									</ListGroup.Item>
									<ListGroup.Item action href="#link4">
										Creator
									</ListGroup.Item>
								</ListGroup>
							</Col>
							<Col sm={8}>
								<Tab.Content>
									<Tab.Pane eventKey="#link1">
										<TechChart />
									</Tab.Pane>
									<Tab.Pane eventKey="#link2">
										<MethologiesChart/>
									</Tab.Pane>
									<Tab.Pane eventKey="#link3">
										<p>Ignacio Martín Franco, software engineer graduated.</p>
									</Tab.Pane>
									<Tab.Pane eventKey="#link4">
										<p>Ignacio Martín Franco, software engineer graduated.</p>
									</Tab.Pane>
								</Tab.Content>
							</Col>
						</Row>
					</Tab.Container>
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

