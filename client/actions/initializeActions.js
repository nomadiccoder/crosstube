"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var VideosApi = require('../api/videoApi');

var InitializeActions = {
	initApp(){

		Dispatcher.dispatch({
			actionType:ActionTypes.INITIALIZE,
			initialData:{
				videos:VideosApi.getAllVideos(),
				dataFetchState: "loading",
			}
		});
	}
};

module.exports = InitializeActions;
