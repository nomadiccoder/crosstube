'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _videos = [];

var VideoStore = assign({},EventEmitter.prototype,{

	addChangeListener(callback){
		this.on(CHANGE_EVENT,callback);
	},

	removeChangeListener(callback){
		this.removeListener(CHANGE_EVENT,callback);
	},

	emitChange(){
		this.emit(CHANGE_EVENT);
	},

	getAllVideos(){
		return _videos;
	},

	getVideoById(id){
		return _.find(_videos,{id:parseInt(id)});
	},

  getAllVideosExceptById(id){
    return _.find(_videos,{id:parseInt(id)});
  }

});

Dispatcher.register(function(action){
	debugger;
	switch(action.actionType){
		case ActionTypes.INITIALIZE:
			_videos = action.initialData.videos;
			VideoStore.emitChange();
			break;
		case ActionTypes.VIDEOS_LOADED:
			_videos = action.initialData.videos;
			VideoStore.emitChange();
			break;
		case ActionTypes.VIDEOS_LOAD_FAILED:
			break;
		default:
			//no op
	}
});

module.exports = VideoStore;
