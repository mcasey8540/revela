'use strict';
 
/* Factories */
  
//interceptor for 404 errors when auth cookie expires
revelaFactories.factory('error404Interceptor', ['$q', '$rootScope', function ($q, $rootScope) {
    return {
 
        'responseError': function (rejection) {
            if (rejection.status === 404) {
                location.reload(true);
            }
            return $q.reject(rejection);
        }
    }
 
}]);
//
//revelaFactories.factory('UserSidUsage', ['$http', '$rootScope',
//  function ($http, $rootScope) {
//      return {
//          query: function (params) {
//              return $http({ method: 'GET', url: $rootScope.rootUrl + '/api/userusageapi', params: params });
//          }
//      }
//  }]);