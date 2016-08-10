bandApp.directive("navigationbar", function() {
	return {
		templateUrl: "templates/directives/nav.html",
		restrict: "E"
	};
});

bandApp.directive("blackfooter", function() {
	return {
		templateUrl: "templates/directives/footer.html",
		restrict: "E"
	};
});

bandApp.directive("iTunesSearch", function() {
	return {
		templateUrl: "templates/directives/iTunesSearch.html",
		restrict: "E",
		scope: "true"
	};
});