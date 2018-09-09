'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
	.directive('payable',function(){
		return {
        templateUrl:'scripts/directives/payable/payable.html',
        restrict: 'E',
        replace: true,
    	}
	});


