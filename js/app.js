var bandApp = angular.module("bandApp", ["ngRoute"])

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
		.when("/gigs", {
			templateUrl: "templates/gigs.html",
			controller: "GigsController"
		})
		.when("/contact", {
			templateUrl: "templates/contact.html",
			controller: "ContactController"
		})
		.when("/book", {
			templateUrl: "templates/book.html",
			controller: "BookController"
		})
		.when("bookconfirm.html", {
			templateUrl: "templates/bookconfirm.html",
			controller: "BookConfirmController"
		})
		.otherwise({ redirectTo: "/"});
});