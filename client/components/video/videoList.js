"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var VideoCard = require('./videoCard');
var VideoStore = require('../../stores/videoStore');
var VideoTitle = require('./videoTitle');

var VideoList = React.createClass({

  propTypes:{
		resultVideos: React.PropTypes.array.isRequired
	},

  render(){
    return(
      function createVideoCard(videoData){
        return(
          <VideoCard data={videoData}/>
        );}
      <div>
        <h1> This space will render the vidoes</h1>
        {this.props.resultVideos.map(createVideoCard,this)}
      </div>
    );
  }
});

module.exports= VideoList;
