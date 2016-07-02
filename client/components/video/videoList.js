"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var VideoCard = require('./videoCard');

var VideoList = React.createClass({
  render(){
    return(
      <div>
        <h1> This space will render the vidoes</h1>
        <VideoCard/>
      </div>
    );
  }
});

module.exports= VideoList;
