"use strict";

var app = angular.module('dabbbleFail', [
	'dabbbleFail.controllers',
	'dabbbleFail.filters',
	'dabbbleFail.services']);

app.config(function ($routeProvider){
	$routeProvider
	.when("/movies/:id", {controller: 'MovieCtrl', templateUrl: 'partials/_movie.html'})
	.when("/:list", {controller:"MovieListCtrl", templateUrl: "partials/_movie_list.html"})
	.otherwise({redirectTo: "/now_playing"});
});