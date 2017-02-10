// create our angular module and inject firebase
angular.module('bracketsApp', ['firebase'])

// create our main controller and get access to firebase
.controller('mainController', function($scope, $firebase) {
	
	//Connect to firebase
	var ref = new Firebase("https://testproject-48f57.firebaseio.com/days");
	var fb = $firebase(ref);

	//sync as object
	var syncObject = fb.$asObject();
	//Three way data binding
	syncObject.$bindTo($scope, 'days');

	$scope.reset = function(){
		fb.$set({
			monday: {
				name: 'Monday',
				slots: {
					0900: {
						time: '9:00',
						booked: false
					},
					1100: {
						time: '11:00',
						booked: false
					}

				}
			},
			tuesday: {
				name: 'Tuesday',
				slots: {
					0900: {
						time: '09:00',
						booked: false
					},
					1100: {
						time: '09:00',
						booked: false
					}
				}
			}
		});
	};

	// our application code will go here
});