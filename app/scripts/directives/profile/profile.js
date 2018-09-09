'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
	.directive('profile',function(){
		return {
        templateUrl:'scripts/directives/profile/profile.html',
        restrict: 'E',
        replace: true,
    	}
	});


