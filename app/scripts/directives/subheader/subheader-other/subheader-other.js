'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosSubHeader
 */
angular.module('sbAdminApp')
	.directive('subheaderOther',function(){
		return {
        templateUrl:'scripts/directives/subheader/subheader-other/subheader-other.html',
        restrict: 'E',
        replace: true,
    	}
	});


