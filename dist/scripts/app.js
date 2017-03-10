(function() {
  function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
      enabled: true,
      requireBase: false
    });
	  
	  
	  
	  $stateProvider
      .state('main', {
      url: '/',
      controller: 'MainCtrl as main',
      templateUrl: '/templates/main.html'
    });
	  
	  $urlRouterProvider.otherwise('/');
  }

    angular
      .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
      .config(config);
  })();