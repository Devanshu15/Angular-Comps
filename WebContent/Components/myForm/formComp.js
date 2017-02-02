var formComponents = angular.module('formComponents', []);

formComponents.component('myForm', {
	templateUrl: 'Components/myForm/myForm.html' ,
	controller : 'formController'
});

formComponents.controller('formController', ['$scope', 'userData','$rootScope', function($scope,userData,$rootScope) {
	$scope.user = {}; 
	$scope.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
	$scope.saveUser = function(user){
			
		if ($scope.form1.$valid) {
			userData.addUser(user);
			
			$rootScope.$broadcast('userAdded');
			console.log('event broadcasted');
			
		}
		else{
			$scope.form1.name.$touched = true ;
			$scope.form1.email.$touched = true ;
			$scope.form1.gender.$touched = true ;
			$scope.form1.tnc.$touched = true ;
			$scope.form1.city.$touched = true ;
		}
		
		
	};
		
}]);