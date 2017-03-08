(function() {
  function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
      enabled: true,
      requireBase: false
    });
	  
	  $urlRouterProvider.otherwise('/');
	  
	  $stateProvider
      .state('main', {
      url: '/',
      controller: 'MainCtrl as main',
      templateUrl: '/templates/main.html'
    });
  }

    angular
      .module('blocChat', ['ui.router', 'firebase'])
      .config(config);
  })();