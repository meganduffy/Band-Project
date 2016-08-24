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
	return $http.jsonp("monkeeitunes.json", {
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

// bandApp.factory("monkeeitunes", ["$http", function($http) {
// 	return $http.jsonp("https://itunes.apple.com/lookup?id=4512388&entity=song&limit=15", {
// 		params: {
// 			"callback" : "JSON_CALLBACK"
// 		}
// 	})
// 	.success(function(response) {
// 		$scope.
// 	})
// }])