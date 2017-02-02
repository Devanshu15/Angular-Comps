var appRouter = angular.module('appRouter', []);

appRouter.config(['$routeProvider', '$locationProvider', function ($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
	$routeProvider.
	when('/home',{
		templateUrl: 'index.html' ,
		
	}).
	when('/add',{
		templateUrl: 'addUser.html' ,
		
	}).
	otherwise({
	    redirectTo: '/home'
	  });
}]);