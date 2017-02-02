var searchComponents = angular.module('searchComponents', []); 

searchComponents.component('mySearch', {
	templateUrl: 'Components/mySearch/mySearch.html' ,
	controller : 'searchController'	
});


searchComponents.controller('searchController', ['$scope', 'filterData' ,'$rootScope', function($scope, filterData,$rootScope) {
	
	
	$scope.setFilter = function () {
		filterData.setFilter($scope.filterData);
		$rootScope.$broadcast('filterList');
	};
	
}]);  