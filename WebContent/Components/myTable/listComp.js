var listComponents = angular.module ('listComponents',[]);


listComponents.component('myTable', {
	templateUrl: 'Components/myTable/myTable.html' ,
	controller : 'listController'	
});

listComponents.controller('listController', ['$scope', 'userData' , 'filterData' , function($scope, userData, filterData) {
	
	$scope.allUsers1 = userData.getUsers(); 
	
	$scope.$on('userAdded', function (event, args) {
		
		window.location.href = "#/home"; 
		
	});
	
	$scope.$on('filterList', function (event, args) {
		
		$scope.filtersData = filterData.getFilter();
		
	});
}]);