"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var VideoCard = require('./videoCard');

var VideoList = React.createClass({

  propTypes:{
		resultVideos: React.PropTypes.array.isRequired
	},

  render(){
    function createVideoCard(videoData){
      return(
        <VideoCard data={this.videoData}/>
      );
    }
    return(
      <div>
        {this.props.resultVideos.map(createVideoCard,this)}
      </div>
    );
  }
});

module.exports= VideoList;
