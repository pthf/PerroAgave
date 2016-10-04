(function(){
	var app = angular.module('perroAgave', [
		'ngRoute',
		'perroAgave.controllers',
		'perroAgave.directives'
	]);
	app.config(['$routeProvider', '$locationProvider' , function($routeProvider, $locationProvider){
		$routeProvider
			.when('/', {
				templateUrl: './views/home.html',
        controller: 'menuNavController'
			})
			.otherwise({
				redirectTo: '/'
			});
			// $locationProvider.html5Mode(true);
	}]);
})();
