'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
	.directive('forex',function(){
		return {
        templateUrl:'scripts/directives/forex/forex.html',
        restrict: 'E',
        replace: true,
    	}
	});


