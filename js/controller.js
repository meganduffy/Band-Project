angular.module("BandControllers", [])

.controller("HomeController", function($scope) {

})

.controller("MusicController", function($scope) {

})

.controller("GigsController", function($scope) {

})

.controller("ContactController", function($scope) {

})
.controller("BookController", function($scope) {
	$scope.title= "Book Now";
})
.controller("BookConfirmController", function($scope) {
	$scope.title= "Booking Confirmation";
});