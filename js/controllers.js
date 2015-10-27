'use strict';

var controllers = angular.module('dabbbleFail.controllers', []);

var apiKey = 'INSERT API KEY HERE';

controllers.controller('AppCtrl', function ($scope) {
	$scope.name = "Module!!!";
	$scope.updateName = function () {
		$scope.name = "World from Module function!";
	};
});

controllers.controller('MovieListCtrl', function ($scope, tmdb, $routeParams){
	var validLists = ['now_playing', 'popular', 'top_rated', 'upcoming'];
	var list = $routeParams.list.toLowerCase();

	if(validLists.indexOf(list) > -1){
		tmdb.list(list, {api_key: apiKey}).then(function (data){
			console.log(data);
			$scope.list = data.data;
		});
	} else {
		window.location.href = '#/now_playing';
	}

	$scope.loadNextPage = function() {
		tmdb.list(list, {api_key: apiKey, page: $scope.list.page + 1}).then(function (data){
			console.log(data);
			$scope.list.page = data.data.page;
			$scope.list.results = $scope.list.results.concat(data.data.results);
		});
	}
});

controllers.controller('MovieCtrl', function ($scope, tmdb, $routeParams){
	var movie = $routeParams.id;

	tmdb.movie(movie, {api_key: apiKey}).then(function (data){
		console.log(data);
		$scope.movie = data.data;
		
		var thumbsUp = Math.round($scope.movie.vote_average);
		var thumbsDown = 10 - thumbsUp;
		$scope.thumbs = [];
		
		for(var i = 0; i < thumbsUp; i++){
			$scope.thumbs.push(String.fromCharCode('9733'));
		}
		
		for(var i = 0; i < thumbsDown; i++){
			$scope.thumbs.push(String.fromCharCode('9734'));
		}
	});
});