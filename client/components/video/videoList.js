"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var VideoCard = require('./videoCard');
var VideoStore = require('../../stores/videoStore');

var VideoList = React.createClass({

  getInitialState(){
    return{
      videos:[]
    };
  },

  componentWillMount(){
    var videos = VideoStore.getAllVideos();
    this.setState({resultVideos:videos});
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
