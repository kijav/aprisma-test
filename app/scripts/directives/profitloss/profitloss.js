'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
	.directive('profitloss',function(){
		return {
        templateUrl:'scripts/directives/profitloss/profitloss.html',
        restrict: 'E',
		replace: true,
		scope: {
		},
		controller:function($scope){
			$scope.message = "hahahaha";
			$scope.bar = {
				labels: ['Sept-13', 'Oct-13', 'Nov-13', 'Dec-13', 'Jan-14', 'Feb-14'],
				series: ['Cash In', 'Cash Out'],
				data: [
				   [430000, 500000, 69000, 290000, 900000, 530000],
				   [320000, 380000, 100000, 150000, 400000, 230000]
				],
				options: {
					backgroundColor: [
						'red',    // color for data at index 0
						'blue'
					]
				}
			};
		  }
    	}
	});


