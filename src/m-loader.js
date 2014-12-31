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


