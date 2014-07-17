'use strict';


// Declare app level module which depends on filters, and services
angular.module('revelaApp', [
  'ngRoute',
  'filters',
  'services',
  'directives',
  'controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
  $routeProvider.when('/tenants', {templateUrl: 'partials/tenants.html', controller: 'TenantCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
