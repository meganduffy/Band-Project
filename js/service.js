bandApp.factory("monkees", ["$http", function($http) {
	return $http.get("package.json")
		.success(function(data) {
			return data;
		})
		.error(function(err) {
			return err;
		});
}]);