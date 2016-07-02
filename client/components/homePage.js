'use strict';

var React = require('react');
var Router = require('react-router');
var Header = require('./common/header');
var VideoStore = require('../stores/videoStore');
var VideoList = require('./video/videoList');
var Link = Router.Link;

var Home = React.createClass({

	getInitialState(){
    return {
      videos : VideoStore.getAllVideos()
    };
  },

	render(){
		return(
				<div className="container">
					<div className="jumbotron text-center">
						<h2> Crossover Video Portal </h2>
					</div>
					<VideoList resultVideos={this.state.videos}/>
				</div>
			);
	}
});

module.exports=Home;
