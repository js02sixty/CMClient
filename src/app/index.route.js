(function() {
  'use strict';

  angular
    .module('cmclient')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('test', {
        url: '/test',
        templateUrl: 'app/test/test.html',
      })
      .state('test2', {
        url: '/test2',
        templateUrl: 'app/test/test2.html',
      });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  }

})();
