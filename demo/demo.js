(function () {
	'use strict';

	var math = require('mathjs');

	module.exports = [function () {
		return {
			restrict: 'E',
			transclude: true,
			scope: {},
			controller: ["$scope", function ($scope) {
				$scope.value = math.parse('2 + 2').compile().eval();
			}],

			template: require('html-loader!./demo.html')
		};
	}];
}());
