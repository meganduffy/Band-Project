var bandApp = angular.module("bandApp", ["ngRoute"]);

bandApp.config(function($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "templates/home.html",
			controller: "HomeController"
		})
		.when("/music", {
			templateUrl: "templates/music.html",
			controller: "MusicController"
		})
		.when("/music/:imageId", {
			templateUrl: "templates/image.html",
			controller: "ImageController"
		})
		.when("/gigs", {
			templateUrl: "templates/gigs.html",
			controller: "GigsController"
		})
		.when("/gigs/:eventId", {
			templateUrl: "templates/event.html",
			controller: "EventController"
		})
		.when("/contact", {
			templateUrl: "templates/contact.html",
			controller: "ContactController"
		})
		.when("/book", {
			templateUrl: "templates/book.html",
			controller: "BookController"
		})
		.when("/bookconfirm", {
			templateUrl: "templates/confirmations/bookconfirm.html",
			controller: "ConfirmController"
		})
		.when("/subscribeconfirm", {
			templateUrl: "templates/confirmations/subscribeconfirm.html",
			controller: "ConfirmController"
		})
		.when("/mailconfirm", {
			templateUrl: "templates/confirmations/mailconfirm.html",
			controller: "ConfirmController"
		})
		.otherwise({ redirectTo: "/"});
});

// Ensures views are loaded at the top of screen
angular.module('bandApp').run(["$rootScope", "$anchorScroll" , function ($rootScope, $anchorScroll) {
    $rootScope.$on("$locationChangeSuccess", function() {
                $anchorScroll();
    });
}]);