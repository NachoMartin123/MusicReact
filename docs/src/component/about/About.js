import React, { Component } from "react";
import { connect } from "react-redux";

import { Row, Col, Container, ListGroup, Tab} from "react-bootstrap";


import ButtonMR from "../common/ButtonMR";
import Badge from "./aboutComponents/myBadge/MyBadge.js";
import back1 from "../../assets/about/back1.jpg";
import back2 from "../../assets/about/back2.jpg";
import LanguagesChart from "./appInfo/LanguagesChart/LanguagesChart";
import MethologiesChart from "./appInfo/MethologiesChart/MethologiesChart";


const About = ({}) => {
    return (
        <div>
			<div className="back1About" style={{height:"50%", paddingTop:"4em", paddingBottom:"4em", backgroundImage:`url(${(back1)})`}}>
				<Container style={{backdropFilter: "blur(1px)"}}>
					<h2  className="titleSecondary">COMMON <span className="customGreen">QUESTIONS</span></h2>
					
				</Container>
			</div>

			<div style={{paddingTop:"5em", paddingBottom:"5em", backgroundColor:"black"}}>
				<Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
					<Row style={{height:"100%"}}>
						<Col sm={4} className="menuAbout">
							<ListGroup variant="flush" >
								<ListGroup.Item className="genericTab">App info</ListGroup.Item>
								<ListGroup.Item action href="#link1">Languages</ListGroup.Item>
								<ListGroup.Item action href="#link2">Methologies</ListGroup.Item>
								<ListGroup.Item className="genericTab">Getting started</ListGroup.Item>
								<ListGroup.Item action href="#link3">Home</ListGroup.Item>
								<ListGroup.Item action href="#link4">Setting playlist</ListGroup.Item>
								<ListGroup.Item action href="#link5">Song control</ListGroup.Item>
								<ListGroup.Item className="genericTab">User info</ListGroup.Item>
								<ListGroup.Item action href="#link6">Edit profile</ListGroup.Item>
								<ListGroup.Item action href="#link7">Change password</ListGroup.Item>
								<ListGroup.Item action href="#link8">Contact</ListGroup.Item>
							</ListGroup>
						</Col>
						<Col sm={8} className="contentMenuAbout">
							<Tab.Content>
								<Tab.Pane eventKey="#link1">
									Programing languages used to develop the app:
									<LanguagesChart />
								</Tab.Pane>
								<Tab.Pane eventKey="#link2">
									Frontend and backend integration diagram
									<MethologiesChart/>
								</Tab.Pane>
								<Tab.Pane eventKey="#link3">
									How to use the app
									<p>Ignacio Martín Franco, software engineer graduated.</p>
								</Tab.Pane>
								<Tab.Pane eventKey="#link4">
									<p>Ignacio Martín Franco, software engineer graduated.</p>
								</Tab.Pane>
							</Tab.Content>
						</Col>
					</Row>
				</Tab.Container>
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

