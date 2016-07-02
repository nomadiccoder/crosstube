"use strict";

//This file is mocking a web API by hitting hard coded data.
var RestConfig = require('../constants/restConfig');
var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(article) {
	return article.title.toLowerCase();
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var VideoApi = {
	getAllVideos: function() {
		$.ajax({
			url: RestConfig.VIDEOS_FETCH_URL,
			dataType: 'json',
			cache: false,
			success: function(data){
				Dispatcher.dispatch({
						actionType:ActionTypes.VIDEOS_LOADED,
						initialData:{
								vidoes:data,
								dataFetchState: "ready",
						}
				});
			},
			error:function(xhr,status,err){
				Dispatcher.dispatch({
						actionType:ActionTypes.VIDEOS_LOAD_FAILED,
						initialData:{
								vidoes:null,
								dataFetchState: "failed",
						}
				});
			}
		});
	},

	getVideoById: function(id) {
		var video = _.find(videos, {id: id});
		return _clone(video);
	},


module.exports = VideoApi;