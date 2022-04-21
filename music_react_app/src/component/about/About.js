import React, { Component } from "react";
import { connect } from "react-redux";

import { Row, Col, Container, ListGroup, Tab, Toast, Image} from "react-bootstrap";


import ButtonMR from "../common/ButtonMR";
import Badge from "./aboutComponents/myBadge/MyBadge.js";
import back1 from "../../assets/about/back1.jpg";
import back2 from "../../assets/about/back2.jpg";
import LanguagesChart from "./appInfo/LanguagesChart/LanguagesChart";
import MethologiesChart from "./appInfo/MethologiesChart/MethologiesChart";
import MyPopOver from "../common/MyPopOver"

import { BsEmojiWink } from "react-icons/bs";

import {Link} from 'react-router-dom';

import FooterBarImg from '../../assets/about/gettingStarted/songControl/footer-bar.jpg';
import HideButtonImg from '../../assets/about/gettingStarted/songControl/hide-button.jpg';


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
								<ListGroup.Item action href="#link3">What is Music React?</ListGroup.Item>
								<ListGroup.Item action href="#link4">Setting a playlist</ListGroup.Item>
								<ListGroup.Item action href="#link5">Song control</ListGroup.Item>
								<ListGroup.Item className="genericTab">User</ListGroup.Item>
								<ListGroup.Item action href="#link6">Edit profile</ListGroup.Item>
								<ListGroup.Item action href="#link7">Change password</ListGroup.Item>
								<ListGroup.Item action href="#link8">Contact</ListGroup.Item>
							</ListGroup>
						</Col>
						<Col sm={8} className="contentMenuAbout">
							<Tab.Content>
								<Tab.Pane eventKey="#link1">
									<h2>Programing languages used to develop the app </h2>
									<LanguagesChart />
									Most part off the integration is <strong>based on Javascript</strong>, due to React and NodeJS. As a front-end oriented project, it is influenced by traditional 
									languages like HTML and CSS, the latter being treated by Sass
								</Tab.Pane>
								<Tab.Pane eventKey="#link2">
									<h2 style={{color:"black"}}>Methologies used to integrate the app functionallity. </h2>
									The front-end area is focused in the use of React with special features as <strong>React-Redux</strong> and <strong>React-Bootstrap. </strong>
									This has been prototyped with adobe tools, especially <MyPopOver triggerText="Adobe XD" popHeader="Adobe XD" popBody="Is a vector-based user experience design tool for web apps and mobile apps that enables website wireframing and creating click-through prototypes." popPostion="bottom"/> and complemented
									with graphic design editors like Adobe Photoshop and Adobe After Effets.
																		
									<Toast className="myToastClass"  >
										<Toast.Header>
											<strong className="me-auto">React (also known as React.js or ReactJS) </strong>
										</Toast.Header>
										<Toast.Body>
											Is a free and open-source front-end JavaScript library for building user interfaces based on UI components. 
											It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React can be used as a base in the development of single-page, mobile, 
											or server-rendered applications with frameworks like Next.js.
										</Toast.Body>
									</Toast>
									
									NodeJS is the platform used to implement the backend due to the flexibilitty and the variety of 
									modules offered to develop a faster and simplier web application based on Javascript

									<Toast className="myToastClass"  >
										<Toast.Header>
											<strong className="me-auto">Node.js </strong>
										</Toast.Header>
										<Toast.Body>
											Node.js is an open source, cross-platform runtime environment for developing server-side and networking 
											applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime 
											on OS X, Microsoft Windows, and Linux.
										</Toast.Body>
									</Toast>
									<div className="centerElementsX" style={{marginBottom:"2em"}}>
										<MethologiesChart/>
									</div>
								</Tab.Pane>
								<Tab.Pane eventKey="#link3">
									<h2>What is Music React</h2>
									<p>
										Music React is an application where you can stay in touch with the latest news of your favourite artist, see the coolest videoclips and listen to all the music you want, all at the same time!
									</p>
									<p>
										You can enjoy all this features without the need to register as a user. 
										However, to <strong>be registered gives you access to extra utilities</strong> as "tag" a song as 
										"favourite", make your own custom lists or vote in MusicReact ranks.
									</p>
									<p>
									
										In our <Link to={{pathname:'/'}}>Home</Link> view, you can see the latest news about the music world: festivals, concerts, band tours, collabs... everything. 
									</p>
									<p>
										In addition to this points, there are ranks for the most voted artists and videoclips. This <strong>ranks are updated every week by regarding the votes of registered users</strong>.
									</p>
									<p>
										That's it! Easy, simple and powerfull, enjoy! <BsEmojiWink/>
									</p>
								</Tab.Pane>
								<Tab.Pane eventKey="#link4">
									<h2>Setting a playlist</h2>
									<p>
										It's very easy. Navigate to <Link to={{pathname:'/artists'}}>Artists</Link> view and click in the name of an artist (also you can find it using the search bar). 
									</p>
									<p>
										The app will show a full list of the artist's songs, the info shown per song is:
									</p>
									<ul>
										<li>Postion in list (or icon pause/play if its matches with song selected)</li>
										<li>Related image</li>
										<li>Title</li>
										<li>Album</li>
										<li>Duration</li>
									</ul>
									<p>
										By clicking one song, it will start being played and the playlist will be attached to the session.
									</p>
									<p>
										As additional info, the app displays the number of total songs in the list as well as the total duration
									</p>
								</Tab.Pane>
								<Tab.Pane eventKey="#link5">
									<h2>Song control</h2>
									<p>
										The footer bar displays the controls and info of the song that currently is been played
 										If no song is selected, this controls will do nothing.
									</p>
									<p>
										The footer bar has 3 sections:
									</p>
									<ul>
										<li><strong>On the left</strong>, the image related to the song, next to the title and the artist's name</li>
										<li><strong>On the middle</strong>, a progress bar detailing the current playback point of the song. On top of it, there are the controls no play/pause the song and change to the previous or next song. 
											Also, the playback point can be change if you click in any part of the progress bar. Once the song ends, it skips to the next song automatically </li>
										<li><strong>On the right</strong>, a slider controlling the volume. By clicking on the icon it will be mute/unmute. Volume can be regulated by cliking in any part of the slider</li>
									</ul>
									<Image fluid src={FooterBarImg}/>
									<p>
										As additional info, the footer bar can be hidden or shown clicking the button on the top right.
									</p>
									<Image fluid src={HideButtonImg}/>
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

