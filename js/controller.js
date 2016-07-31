
bandApp.controller("HomeController", function($scope) {
});

bandApp.controller("MusicController", function($scope) {

});

bandApp.controller("GigsController", function($scope) {

});

bandApp.controller("ContactController", function($scope) {

});

bandApp.controller("BookController", function($scope) {
	$scope.title= "Book Now";
	$scope.user= {};
	$scope.wasSubmitted = false;

	$scope.submit= function() {
		$scope.wasSubmitted = true;
	};
});

bandApp.controller("BookConfirmController", function($scope) {
	$scope.title= "Booking Confirmation";
});
