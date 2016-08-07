bandApp.directive("navigationbar", function() {
	return {
		templateUrl: "templates/nav.html",
		restrict: "E"
	};
});

bandApp.directive("blackfooter", function() {
	return {
		templateUrl: "templates/footer.html",
		restrict: "E"
	};
});