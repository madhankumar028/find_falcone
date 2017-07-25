(function() {
	
	'use strict';

	angular
	.module('find-falcon')
	.constant('FALCONE', {
		'config': {
			'baseUrl' : 'https://findfalcone.herokuapp.com',
			'planets' : '/planets',
			'vehicles': '/vehicles',
			'token'		: '/token',
			'search'	: '/find'
		}
	});

})();
