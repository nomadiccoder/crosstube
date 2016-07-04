'use strict';

var React = require('react');
var Router = require('react-router');
var Header = require('./common/header');
var VideoSearchActions = require("../actions/videoSearchActions");
var VideoStore = require('../stores/videoStore');
var VideoList = require('./video/videoList');
var Link = Router.Link;

var Home = React.createClass({

	componentWillMount(){
		var videos = VideoSearchActions.searchVideos(10);
		this.setState({resultVideos:VideoStore.getAllVideos()});
	},
	render(){
		return(
				<div className="container">
					<div className="jumbotron text-center">
						<h2>Video Portal </h2>
					</div>
					<VideoList resultVideos={this.state.resultVideos}/>
				</div>
			);
	}
});

module.exports=Home;
