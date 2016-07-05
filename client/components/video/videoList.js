"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var VideoCard = require('./videoCard');
var VideoStore = require('../../stores/videoStore');

var VideoList = React.createClass({

  getInitialState(){
    return{
      videos:VideoStore.getAllVideos()
    };
  },

  _onChange(){
		this.setState({ resultVideos:VideoStore.getAllVideos() });
	},

  componentWillMount(){
    VideoStore.addChangeListener(this._onChange);
  },

  render(){
    function createVideoCard(videoData){
      debugger;
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
