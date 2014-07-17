'use strict';
 
/* Directives */
  
revelaDirectives.directive('jqdatepicker', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        transclude: true,
        link: function (scope, element, attrs, ngModelCtrl) {
 
            element.datepicker({
                dateFormat: 'yy-mm-dd',
            });
            element.css({
                cursor: 'pointer'
            });
        }
    };
});