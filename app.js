/**
 * @author madhankumar028
 */
(function() {

    'use strict';

    angular.module('find-falcon', ['ui.router'])
    .config(Config);

    function Config($urlRouterProvider, $stateProvider) {

        $stateProvider
        .state('search', {
            name: 'search',
            url: '/search',
            templateUrl: '',
            controllerAs: ''
        })
        .state('result', {
            name: 'result',
            url: '/result',
            templateUrl: ''            
        });

        $urlRouterProvider.otherwise('/search');
    }
})();
