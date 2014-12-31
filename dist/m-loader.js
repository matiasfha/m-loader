/*!
 * angular-directive-boilerplate
 * https://github.com/mohsen1/angular-directive-boilerplate
 * Version: 0.0.8 - 2014-12-31T12:38:16.185Z
 * License: MIT
 */


'use strict';

angular.module('m-loader', []).directive('mLoader', function () {
  return {
    restrict: 'AE',
    templateUrl: 'm-loader.html',
    replace: true,
    controller:function($scope,$rootScope){
      $rootScope.$on('m-hide',function(event,msg){
      	$scope.show = false;

      });

      $rootScope.$on('m-show',function(event,msg){
        $scope.show = true;
      });
    }
  };
});



angular.module("m-loader").run(["$templateCache", function($templateCache) {$templateCache.put("m-loader.html","<div class=\"loading\" data-ng-class=\"{visible: show}\"><div class=\"overlay\"></div><div class=\"spinner\"><div class=\"rect1\"></div><div class=\"rect2\"></div><div class=\"rect3\"></div><div class=\"rect4\"></div><div class=\"rect5\"></div></div></div>");}]);