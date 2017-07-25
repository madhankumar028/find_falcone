(function() {

	'use strict';

	angular
	.module('find-falcon')
	.controller('SearchController', SearchCtrl);

	SearchCtrl.$inject = ['getAllPlanets'];

	function SearchCtrl(getAllPlanets) {
		var self = this;

		self.planets = getAllPlanets

		console.log(self.planets);
	}

})();
