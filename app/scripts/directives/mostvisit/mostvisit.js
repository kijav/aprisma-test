'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
	.directive('mostvisit',function(){
		return {
        templateUrl:'scripts/directives/mostvisit/mostvisit.html',
        restrict: 'E',
        replace: true,
    	}
	});


