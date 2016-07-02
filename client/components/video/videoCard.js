"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var VideoTitle = require('./VideoTitle');
var VideoRating = require('./videoRating');
var VideoDescription = require('./videoDesc');

var VideoCard = React.createClass({

  propTypes:{
		videoData: React.PropTypes.isRequired
	},

  render(){
    return(
      <div>
        <VideoTitle title = {this.props.videoData.title}/>
        <VideoPlayer rating = {this.props.videoData.srcUrl}/>
        <VideoRating rating = {this.props.videoData.id}/>
        <VideoDescription description = {this.props.videoData.description}/>
      </div>
    );
  }
});

module.exports=VideoCard;
