/**
 * @author madhankumar028
 */
(function() {

    'use strict';

    angular.module('find-falcon', ['ui.router'])
    .config(Config);

    Config.$inject = ['$urlRouterProvider', '$stateProvider', '$locationProvider'];

    function Config($urlRouterProvider, $stateProvider, $locationProvider) {

        $stateProvider
        .state('search', {
            name: 'search',
            url: '/search',
            templateUrl: 'templates/search.html',
            controller: 'SearchController as SearchCtrl',
            resolve: {
                getAllPlanets: function(SearchService) {
                    return SearchService.getPlanets()
                        .then(function(response) {
                            console.log(response);
                            return response;
                        });
                }
            }
        })
        .state('result', {
            name: 'result',
            url: '/result',
            templateUrl: ''            
        });

        $urlRouterProvider.otherwise('/search');

        $locationProvider.html5Mode(true);
    }
})();
