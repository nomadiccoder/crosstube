"use strict";

var React = require("react");
var ReactRouter = require("react-router");
var VideoApi = require('../api/VideoApi');

var VideoSearchActions = {
    searchVideos(size){
      console.log("Search request received to limit the search result to size "+size);
      var searchResult = VideoApi.getAllVideos(size);
    }
}

module.exports=VideoSearchActions;
