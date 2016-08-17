
bandApp.controller("HomeController", function($scope) {
});

bandApp.controller("MusicController", ["$scope", "monkees", function($scope, monkees) {
	monkees.success(function(data) {
		$scope.myMonkee = data;
	});

}]);

bandApp.controller("GigsController", function($scope) {

});

bandApp.controller("ContactController", function($scope) {
	$scope.title= "Connect With Us";
});

bandApp.controller("BookController", function($scope, $location) {
	$scope.title= "Book Now";
	$scope.user= {};
	$scope.submitted = false;

	$scope.formsubmit= function() {
		$scope.submitted = false;

		if ($scope.BookForm.$valid) {
			$scope.submitted= true;
			$location.path("/bookconfirm");

		}
	};
});

bandApp.controller("BookConfirmController", function($scope) {
	$scope.title= "Congratulations!";
});

bandApp.controller("iTunesController", function($scope, $http) {
	//define search function called by form
	$scope.searchiTunes = function(artist) {
		//use the jsonp callback function from the $http service this
		$http.jsonp("http://itunes.apple.com/search?limit=10", {
			params: {
				"callback" : "JSON_CALLBACK",
				"term" : artist
			}
			//returns a promise. when resturned, .then preform action..
		}).then(onSearchComplete, onError)
	}
	//get the data out of the response when search succeeds.

	var onSearchComplete = function(response) {
		//the response has a few data elements
		//so we will grab all of that
		$scope.data = response.data

		//we will also store just the songs into 
		//a seperate variable for the view to iterate
		$scope.songs = response.data.results
	}

	//if there is an error, store that for viewing.
	var onError = function(reason) {
		$scope.error = reason
	}
});