angular.module('App')
	.config(function ($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'app/pages/home/home.html'
		})
		.when('/about', {
			templateUrl: 'app/pages/about/about.html'
		})
		.when('/fruit', {
			templateUrl: 'app/pages/fruit/fruit.html'
		})
		.otherwise({
			redirectTo: '/'
		});
	});