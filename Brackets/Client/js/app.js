// A module is a collection of services, directives, 
// controllers, filters, and configuration information. 
// angular.module is used to configure the $injector.

// create our angular module
var bracketModule = angular.module('bracketsModule', [''])
// code to register a new service
bracketModule.value('appName', 'bracketsApp')
// create our main controller
.controller('mainController', function($scope) {
	// our application code will go here
	// Function that runs when reset button is clicked.
	$scope.reset = function(){
	
	};

});