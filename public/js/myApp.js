var app = angular.module('myApp', []);

app.controller('mainCtrl', ['$scope', '$http', function($scope, $http){
	$scope.email = "";
	$scope.name = "";
	$scope.phone = "";
	$scope.message = "";
	$scope.alert = "";

	var createContact = function(commentData){
		return $http.post('/saveInfo', commentData).success(function(data){
			$scope.alert = data;
		});
	}

	$scope.getInfo = function(){
		if(!$scope.email || !$scope.name || !$scope.phone || !$scope.message){ 
			$scope.alert = { message : 'Fill out all fields' };
			return; 
		};

		var data = {
				email: $scope.email,
				name: $scope.name, 
				phone: $scope.phone, 
				message: $scope.message
			}

		createContact(data);

		$scope.email = "";
		$scope.name = "";
		$scope.phone = "";
		$scope.message = "";
	}
}]);

app.controller('infoCtrl', ['$scope', '$http', function($scope, $http){
	$http.get('/admin').success(function(data){
			$scope.info = data;
		});
}]);