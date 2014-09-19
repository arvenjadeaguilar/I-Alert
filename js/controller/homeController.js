app.controller('homeController', function ($scope,$http) {
    
	$http.get('data/sampleData.json').success(function(data){

      $scope.alerts = data;


  });

	$scope.submitAlert = function(data){
		alert("Are you sure there is a "+ data + "?");
	};

});