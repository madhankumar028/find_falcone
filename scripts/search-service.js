(function() {

	'use strict';

	angular
	.module('find-falcon')
	.service('SearchService', SearchService);

	SearchService.$inject = ['$http', '$q', 'FALCONE'];

	function SearchService($http, $q, FALCONE) {
		var self = this;

		self.message;
		self.getPlanets = getPlanets;

		function getPlanets() {

			var options = {
				url: FALCONE.config.baseUrl + FALCONE.config.planets,
				method: 'GET',
				cache: true,
				headers: {'Content-Type': 'application/json'}
			},
			deferred = $q.defer();

			console.log(options);

			$http(options).success(successCallback).error(failureCallback);

			function successCallback(data, status, headers, config) {
				if (status == 200) {
					self.message = 'Received all available Planets';
				} 
				deferred.resolve(data, status, headers, config);
			}

			function failureCallback(data, status, headers, config) {
				if (status !== 200) {
					self.message = 'Error occured';
				}
				deferred.reject(data, status, headers, config);
			}

			return deferred.promise;
		}
	}

})();
