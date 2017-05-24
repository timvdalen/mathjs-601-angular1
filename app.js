(function (scope) {
	'use strict';

	var angular = require('angular');

	angular.module('nl.timvdalen.mathjs.angular1', []).directive('appDemo', require('./demo/demo.js'));
}(window));
