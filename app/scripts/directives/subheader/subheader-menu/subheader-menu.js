'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosSubHeader
 */
angular.module('sbAdminApp')
	.directive('subheaderMenu',function(){
		return {
        templateUrl:'scripts/directives/subheader/subheader-menu/subheader-menu.html',
        restrict: 'E',
        replace: true,
    	}
	});


