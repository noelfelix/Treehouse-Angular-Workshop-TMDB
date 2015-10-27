'use strict';

var filters = angular.module('dabbbleFail.filters', []);

filters.filter('dabbbleFailDate', function($filter){

	return function (value, format){
		if (value) {
			value = Date.parse(value);
		}
		return $filter('date')(value, format);
	}
});