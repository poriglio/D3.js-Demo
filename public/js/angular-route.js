// added chart.js dependency
angular.module("demoApp",["ngRoute", "chart.js", "ngMaterial", 'dndLists'])

angular.module("demoApp").config(["$routeProvider",function($routeProvider){

	$routeProvider.when("/",{
		templateUrl : "/html/template.html",
		controller  : "demoController"
	})

}])

angular.module("demoApp").controller("demoController",["$scope","$http",function($scope,$http){

			// Ed's Angular stuff
			$scope.greeting = 'Surprise Surprise'
			
			 
			// data for chartJs and the Slider
			$scope.labels = ["Blue", "Grey", "Red"];
  			$scope.data = [100,100,100]

  			// data for the dnd
  			 $scope.models = {
			        selected: null,
			        templates: [
			            {type: "Pie", id: 1},
			            {type: "Doughnut", id: 2}
			        ],
			        dropzones: {
			            "Pie Chart": [],
			            "Doughnut Chart": []
			        }
			    };
  			


  			//end of Ed's Angular Stuff

}])




