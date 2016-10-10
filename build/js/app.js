(function(){
	var app = angular.module('perroAgave', [
		'ngRoute',
		'perroAgave.controllers',
		'perroAgave.directives'
	]);
	app.config(['$routeProvider', '$locationProvider' , function($routeProvider, $locationProvider){
		$routeProvider
			.when('/', {
				templateUrl: './views/home.html'
			})
			.when('/login', {
				templateUrl: './views/login.html',
        controller: 'formloginregisterController'
			})
			.otherwise({
				redirectTo: '/'
			});
			// $locationProvider.html5Mode(true);
	}]);
	app.run(['$rootScope', function($rootScope){
		$rootScope.open = false;
	}]);
})();
