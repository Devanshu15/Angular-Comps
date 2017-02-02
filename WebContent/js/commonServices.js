var appServices = angular.module('appServices', []);

appServices.factory('userData', [function(){
	var allUsers = [];
	
	function addUser(user){
		function newUser(user){
	
				this.name = user.name ;
				this.gender =  user.gender ;
				this. city = user.city ;
				this.emailId = user.emailId ;
				this.dob = user.dob ;
			}
		var	userObj = new newUser(user);
		allUsers.push(userObj) ;
		console.log(allUsers);
	} 
	
	function getUsers(){
		console.log('i am called ');
		return allUsers ;
	}
	
	return{
		addUser : addUser,
		getUsers : getUsers
	};

	}]);



angularPractice.factory('filterData', [function(){
	
	var filterdata ;
	function setFilterData(filter){
		function filterObj (filter){
			this.search ={};
			this.sort = {};
			this.search.name = filter.searchname;
			this.search.gender = filter.searchgender;
			this.sort.sortOrder = filter.sortsortOrder;
			this.sort.direction = filter.sortdirection ;
		}
		filterdata = new filterObj(filter);
	}
	
	function getFilterData(){
		return filterdata ;
	}
	
	return {
		setFilter : setFilterData,
		getFilter : getFilterData
	};
}]);