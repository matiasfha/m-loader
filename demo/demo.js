var app = angular.module('demo', ['ngSanitize', 'm-loader']);

app.controller('DemoCtrl',function($rootScope,$scope,$timeout){
	$scope.showLoader = function(){
		$rootScope.$emit('m-show');
	};

	$scope.hideLoader = function(){
		$rootScope.$emit('m-hide');
	};
	$timeout(function(){
		$scope.showLoader();
	},5000);
});