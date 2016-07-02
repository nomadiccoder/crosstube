"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var VideoTitle = require('./VideoTitle');
var VideoRating = require('./videoRating');
var VideoDescription = require('./videoDesc');

var VideoCard = React.createClass({
  render(){
    return(
      <div>
        <VideoTitle/>
        <VideoRating/>
        <VideoDescription/>
      </div>
    );
  }
});

module.exports=VideoCard;
