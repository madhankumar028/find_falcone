(function() {

	'use strict';

	angular
	.module('find-falcon')
	.controller('SearchController', SearchCtrl);

	SearchCtrl.$inject = ['getAllPlanets'];

	function SearchCtrl(getAllPlanets, $scope) {
		
		var self = this;
		
		self.planets = getAllPlanets;
		self.selected = self.planets[0].name;
	}

})();
