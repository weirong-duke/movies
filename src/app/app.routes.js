(function() {
  'use strict';

  angular.module('app').config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider.state('main', {
      url: '/',
      component: 'main',
    });

    $urlRouterProvider.otherwise('/');
  }

})();
