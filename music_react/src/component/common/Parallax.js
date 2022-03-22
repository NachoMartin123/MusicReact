import React, { Component } from "react";
import { connect } from "react-redux";
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';


const Parallax = ({minY, maxY, img}) => {
	
    return (
        <Parallax
			className="custom-class"
			offsetYMax={maxY}
			offsetYMin={minY}
			slowerScrollRate={false}
			tag="figure">
			<img src={img} alt="image description" />
			<h3>With Props</h3>
		</Parallax>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
		minY: ownProps.minY, 
		maxY: ownProps.maxY, 
		img: ownProps.img
	};
};

export default connect( 
	mapStateToProps, 
	{}
)(Parallax);
