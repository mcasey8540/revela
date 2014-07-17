'use strict';

var revelaControllers = angular.module('revelaControllers', []); 
var revelaDirectives = angular.module('revelaDirectives',[]);
var revelaFactories = angular.module('revelaFactories', []);

var appModule1 = angular.module('appModule1', ['ngRoute']);
 
// setting rootUrl before adding controllers and services which call on this
appModule1.run(function ($rootScope) {
    //$rootScope.rootUrl = window.saw.rootUrl;
})
 
// this module holds factories and directives
var appFactoriesDirectives = angular.module('appFactoriesDirectives', ['revelaFactories', 'revelaDirectives']);
 
// this module bootstraps the application
var revelaApp = angular.module('revelaApp', ['appModule1', 'revelaControllers', 'appFactoriesDirectives']);
 
// this runs function to get current user
revelaApp.run(function ($rootScope, $timeout, $route) {
    
    //appstartup related code here
  
});
 
revelaApp.config(['$routeProvider', '$locationProvider', '$httpProvider',
  function ($routeProvider, $locationProvider, $httpProvider) {
      
      //var root = window.saw.rootUrl;
 
      $routeProvider.when('/', {
          templateUrl: 'views/home/home.html',
          controller: 'HomeCtrl'
      });
      $routeProvider.when('/tenants', {
          templateUrl: 'views/tenant/tenant.html',
          controller: 'TenantCtrl'
      });
      $routeProvider.otherwise({
          redirectTo: '/'
      });
  
      // Specify HTML5 mode (using the History APIs) or HashBang syntax.
      $locationProvider.html5Mode(false).hashPrefix('!');
      
  }]);