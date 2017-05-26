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
				var m = math;
				debugger;
				// m.parse('2+2').compile() => error
				var tree = math.parse('2+2');
				debugger;
				// tree.compile() => error
				var exp = math.parse('2+2').eval();
				debugger;
				// exp => 4
			}],

			template: require('html-loader!./demo.html')
		};
	}];
}());
