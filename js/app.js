angular.module("bandApp", ["ngRoute"])

.config(function($routeProvider) {
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
		.otherwise({ redirectTo: "/"});
});