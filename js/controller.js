//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//INDEX:
//1. HOME CONTROLLER
//2. MUSIC CONTROLLER
//3. IMAGE CONTROLLER
//4. GIGS CONTROLLER
//5. EVENT CONTROLLER
//6. CONTACT CONTROLLER
//7. BOOK CONTROLLER
//8. CONFIRMATION PAGES CONTROLLER
//9. MAILLIST MODAL CONTROLLER
//10. SUBSCRIPTION MODAL CONTROLLER
//11. ITUNES SEARCH CONTROLLER


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//1. HOME CONTROLLER

bandApp.controller("HomeController", function($scope) {
	$scope.headerTitle = "The Monkees";
	$scope.headerSubtitle = "jive with me";
	$scope.mainTitle = "Need some reminding?";
	$scope.mainSubtitle = "click play";
	$scope.jumboTitle = "Stay Connected";
	$scope.jumboSubtitle = "Be In The Loop";
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//2. MUSIC CONTROLLER

bandApp.controller("MusicController", ["$scope", "monkees", "monkeeitunes", function($scope, monkees, monkeeitunes) {
	$scope.headerTitle = "hear us out";
    $scope.headerSubtitle = "our story, our sound"
	$scope.musicTitle =  "Buy Music";
	$scope.musicSubtitle = "Have a scroll through our sound and buy online!";
	$scope.videoTitle = "Videos";
	$scope.videoSubtitle = "Look back through the years, watch us shake and move!";
	$scope.photoTitle = "Photos";
	$scope.photoSubtitle = "Check out some of our favourite moments! ";
	$scope.photoSubtitleInfo = "Click on the image for more information.";
	$scope.seemoreTitle = "Like What You See?";
	$scope.seemoreSubtitle = "Find More On...";

	//import and store data from Monkees service for use within the $scope
	monkees.success(function(data) {
		$scope.myMonkee = data;
	});
	monkeeitunes.success(function(data) {
		$scope.monkeeInfo = data.results;
		$scope.numMonkeeResults = data.resultCount;
	});

    //show about section when ABOUT US button clicked

    $('#about-btn').click(function() {
        $('#musictop').toggleClass('noabout');
        $('h1:first').toggleClass('abouttitle');
        $('.paragraph').toggle();
        $('.sound').toggle();
    });


}]);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3. IMAGE CONTROLLER

bandApp.controller("ImageController", ["$scope", "monkees", "$routeParams", function($scope, monkees, $routeParams) {
	
	//give each image an accessible ID and load data specific to that ID
	monkees.success(function(data) {
		$scope.myMonkeeImg = data[$routeParams.imageId];
	});
	$scope.currentImageIndex = parseInt($routeParams.imageId);
}]);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//4. GIGS CONTROLLER

bandApp.controller("GigsController", ["$scope", "events", function($scope, events) {
	$scope.headerTitle ="CALENDAR";
	$scope.headerSubtitle = "NEVER MISS A GOOD TIME WITH OUR EVENT CALENDAR";
	$scope.headerSubtitleInfo = "UP TO DATE AND READY TO ROCK!";
	$scope.endTitle = "WANT THE MONKEES TO PLAY LIVE AT YOUR EVENT?";

	//import and store data from Events service for use within the $scope
	events.success(function(data) {
		$scope.myEvents = data;
	});
}]);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//5. EVENT CONTROLLER

bandApp.controller("EventController", ["$scope", "events", "$routeParams", "$sce", function($scope, events, $routeParams, $sce) {
	
	//give each event an accessible ID and load data specific to that ID
	events.success(function(data) {
		$scope.myEvent = data[$routeParams.eventId];
		//confirm the URL myEvent.map is a trusted resource
		$scope.myEventMap = $sce.trustAsResourceUrl($scope.myEvent.map);
	});
	$scope.currentEventIndex = parseInt($routeParams.eventId);
}]);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//6. CONTACT CONTROLLER

bandApp.controller("ContactController", function($scope, $location) {
	$scope.title= "Connect With Us";
	$scope.subtitle= "Join us on social media"
	$scope.submitted = false;

	//ensure form has been validated on submission and redirect user to confirmation page
	$scope.formsubmit = function() {
		$scope.submitted = false;

		if ($scope.subscribeform.$valid) {
			$scope.sumbitted=true;
			$location.path("/subscribeconfirm");
		}
	};
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//7. BOOK CONTROLLER

bandApp.controller("BookController", function($scope, $location) {
	$scope.title= "Book Now";
	$scope.user= {};
	$scope.submitted = false;

	//ensure form has been validated on submission and redirect user to confirmation page
	$scope.formsubmit= function() {
		$scope.submitted = false;

		if ($scope.BookForm.$valid) {
			$scope.submitted= true;
			$location.path("/bookconfirm");

		}
	};
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//8. CONFIRMATION PAGES CONTROLLER

bandApp.controller("ConfirmController", function($scope, $routeParams) {
	$scope.title= "Congratulations!";
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//9. MAILLIST MODAL CONTROLLER

bandApp.controller("MailModalController", function($scope, $location) {
	$scope.user= {};
	$scope.submitted=false;

	//ensure form has been validated on submission and redirect user to confirmation page
	$scope.formsubmit= function() {
		$scope.submitted= false;

		if($scope.mailform.$valid) {
			//remove modal from window when form has been submitted
			$("#mailmodal").modal("toggle");
			$scope.submitted= true;
			$location.path("/mailconfirm");
		}
	};
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//10. SUBSCRIPTION MODAL CONTROLLER

bandApp.controller("SubModalController", function($scope, $location) {
	$scope.user={};
	$scope.submitted=false;


	//ensure form has been validated on submission and redirect user to confirmation page
	$scope.formsubmit = function() {
		$scope.submitted=false;

		if($scope.subscribeform.$valid) {
			//remove modal from window when form has been submitted
			$("#subscribemodal").modal("toggle");
			$scope.submitted=true;
			$location.path("/subscribeconfirm")
		}
	};
});



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//11. ITUNES SEARCH CONTROLLER

bandApp.controller("iTunesController", function($scope, $http) {

	//import data from iTunes Search API
	$scope.searchiTunes = function(artist) {
		$http.jsonp("http://itunes.apple.com/search?limit=5", {
			params: {
				"callback" : "JSON_CALLBACK",
				"term" : artist
			}
		}).then(onSearchComplete, onError)
	};

	//strore data for use within the $scope
	var onSearchComplete = function(response) {

		$scope.data = response.data;
		$scope.songs = response.data.results;
	};

	//if there is an error store it for viewing
	var onError = function(reason) {
		$scope.error = reason;
	};
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////