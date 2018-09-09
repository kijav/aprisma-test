'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
	.directive('account',function(){
		return {
        templateUrl:'scripts/directives/account/account.html',
        restrict: 'E',
		replace: true,
		scope: {
		},
		controller:function($scope){
			$scope.donut = {
				labels: ["My bank1", "My bank2", "My bank3"],
				data: [300000, 500000, 100000]
			};
			$scope.donut2 = {
				labels: ["Loan", "Cash", "Tax"],
				data: [900000, 300000, 700000]
			};
		  }
    	}
	});


