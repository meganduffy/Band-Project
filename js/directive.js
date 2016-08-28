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

bandApp.directive("itunessearch", function() {
	return {
		templateUrl: "templates/directives/iTunesSearch.html",
		restrict: "E",
		scope: "true"
	};
});

bandApp.directive("subscribe", function() {
	return {
		templateUrl: "templates/directives/subscribe.html",
		restrict: "E"
	};
});

bandApp.directive("maillist", function() {
	return {
		templateUrl: "templates/directives/maillist.html",
		restrict: "E"
	};
});