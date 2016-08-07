
bandApp.controller("HomeController", function($scope) {
});

bandApp.controller("MusicController", function($scope) {

});

bandApp.controller("GigsController", function($scope) {

});

bandApp.controller("ContactController", function($scope) {

});

bandApp.controller("BookController", function($scope, $location) {
	$scope.title= "Book Now";
	$scope.user= {};
	$scope.submitted = false;

	$scope.formsubmit= function(bookform) {
		$scope.submitted = false;

		if (bookform.$valid) {
			$scope.submitted= true;
			$location.path("#/music");

		}
	};
});

bandApp.controller("BookConfirmController", function($scope) {
	$scope.title= "Booking Confirmation";
});
