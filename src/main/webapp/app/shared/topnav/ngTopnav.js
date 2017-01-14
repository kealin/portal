/**
 * Created by Kim Lindqvist on 14-Jan-17.
 */
angular.module('app').directive('ngSidebar', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/shared/topnav/topnavTemplate.html',
        scope: {},
        link: function ($scope, element, attr) {

        }
    };
});