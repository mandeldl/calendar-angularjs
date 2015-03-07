var app = angular.module('CalendarApp', [ngRoute]);

// Routes

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		controller: 'DayController',
		templateUrl: 'views/day.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});