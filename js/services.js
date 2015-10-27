'use strict';

var services = angular.module('dabbbleFail.services', []);

services.factory('tmdb', function ($http) {
	function load(path, params){
		params = params || {};
		params.callback = "JSON_CALLBACK"

		return $http.jsonp('https://api.themoviedb.org/3/movie/' + path, {params: params})
	}

	return {
		list: function(type, params){
			return load(type,params);
		},
		movie: function(movie, params){
			return load(movie,params);
		}
	}
});