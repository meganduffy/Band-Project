bandApp.directive("monkeesNav", function() {
	return {
		templateUrl: "templates/directives/monkees-nav.html",
		restrict: "E"
	};
});

bandApp.directive("monkeesFooter", function() {
	return {
		templateUrl: "templates/directives/monkees-footer.html",
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