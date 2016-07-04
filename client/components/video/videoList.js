"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var VideoCard = require('./videoCard');
var VideoStore = require('../../stores/videoStore');

function getFirstTenVideos(){
	return {
		videos:VideoStore.getAllVideos()
	};
}

var VideoList = React.createClass({

  getInitialState(){
    return getFirstTenVideos();
  },

  componentWillMount(){
    this.setState(getFirstTenVideos());
  },

  render(){
    function createVideoCard(videoData){
      return(
        <VideoCard key = {videoData.id} videoData={videoData}/>
      );
    }
    return(
      <div>
        {this.state.resultVideos.map(createVideoCard,this)}
      </div>
    );
  }
});

module.exports= VideoList;
