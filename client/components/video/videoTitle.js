"use strict";

var React = require('react');
var ReactRouter = require('react-router');


var VideoTitle = React.createClass({
  propTypes:{
    name:React.PropTypes.string.isRequired
  },

  render(){
    return(
      <div>
        <p> {this.props.name}</p>
      </div>
    );
  }
});

module.exports=VideoTitle;
