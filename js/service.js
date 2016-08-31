bandApp.factory("monkees", ["$http", function($http) {
	return $http.get("monkees.json")
		.success(function(data) {
			return data;
		})
		.error(function(err) {
			return err;
		});
}]);

bandApp.factory("monkeeitunes", ["$http", function($http) {
	return $http.jsonp("https://itunes.apple.com/lookup?id=4512388&entity=song&limit=8", {
		params : {
			"callback" : "JSON_CALLBACK"
		}
	})
		.success(function(data) {
			return data;
		})
		.error(function(err) {
			return err;
		});
}]);

bandApp.factory("events", ["$http", function($http) {
	return $http.get("events.json")
		.success(function(data) {
			return data;
		})
		.error(function(err) {
			return err;
		});
}]);