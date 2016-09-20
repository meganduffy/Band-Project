
bandApp.controller("HomeController", function($scope) {
});

bandApp.controller("MusicController", ["$scope", "monkees", "monkeeitunes", function($scope, monkees, monkeeitunes) {
	monkees.success(function(data) {
		$scope.myMonkee = data;
	});

	monkeeitunes.success(function(data) {
		$scope.monkeeInfo = data.results;
		$scope.numMonkeeResults = data.resultCount;
	});

}]);

bandApp.controller("ImageController", ["$scope", "monkees", "$routeParams", function($scope, monkees, $routeParams) {
	monkees.success(function(data) {
		$scope.myMonkeeImg = data[$routeParams.imageId];
	});

	$scope.currentImageIndex = parseInt($routeParams.imageId);
}]);

bandApp.controller("GigsController", ["$scope", "events", function($scope, events) {
	events.success(function(data) {
		$scope.myEvents = data;
	})
}]);

bandApp.controller("EventController", ["$scope", "events", "$routeParams", "$sce", function($scope, events, $routeParams, $sce) {
	events.success(function(data) {
		$scope.myEvent = data[$routeParams.eventId];
		$scope.myEventMap = $sce.trustAsResourceUrl($scope.myEvent.map);
	});

	$scope.currentEventIndex = parseInt($routeParams.eventId);
}]);

bandApp.controller("ContactController", function($scope, $location) {
	$scope.title= "Connect With Us";
	$scope.submitted = false;

	$scope.formsubmit = function() {
		$scope.submitted = false;

		if ($scope.subscribeform.$valid) {
			$scope.sumbitted=true;
			$location.path("/subscribeconfirm");
		}
	};
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

		};
	};
});

bandApp.controller("MailModalController", function($scope, $location) {
	$scope.user= {};
	$scope.submitted=false;
	
	$scope.formsubmit= function() {
		$scope.submitted= false;

		if($scope.mailform.$valid) {
			$("#mailmodal").modal("toggle");
			$scope.submitted= true;
			$location.path("/mailconfirm");
		};
	};
});

bandApp.controller("SubModalController", function($scope, $location) {
	$scope.user={};
	$scope.submitted=false;



	$scope.formsubmit = function() {
		$scope.submitted=false;

		if($scope.subscribeform.$valid) {
			$("#subscribemodal").modal("toggle");
			$scope.submitted=true;
			$location.path("/subscribeconfirm")
		};
	};
});

bandApp.controller("ConfirmController", function($scope, $routeParams) {
	$scope.title= "Congratulations!";
	$scope.wherefrom = $routeParams.page;
});

bandApp.controller("iTunesController", function($scope, $http) {
	//define search function called by form
	$scope.searchiTunes = function(artist) {
		//use the jsonp callback function from the $http service this
		$http.jsonp("http://itunes.apple.com/search?limit=5", {
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

