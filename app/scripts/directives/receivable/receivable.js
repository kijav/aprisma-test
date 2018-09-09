'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
	.directive('receivable',function(){
		return {
        templateUrl:'scripts/directives/receivable/receivable.html',
        restrict: 'E',
        replace: true,
    	}
	});


