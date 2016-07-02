"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var VideosApi = require('../api/videosApi');

var InitializeActions = {
	initApp(){
		Dispatcher.dispatch({
			actionType:ActionTypes.INITIALIZE,
			initialData:{
				articles:VideosApi.getAllVideos(),
				dataFetchState: "loading",
			}
		});
	}
};

module.exports = InitializeActions;
