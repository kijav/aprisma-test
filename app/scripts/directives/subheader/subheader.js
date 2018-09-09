'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosSubHeader
 */
angular.module('sbAdminApp')
	.directive('subheader',function(){
		return {
        templateUrl:'scripts/directives/subheader/subheader.html',
        restrict: 'E',
        replace: true,
    	}
	});


