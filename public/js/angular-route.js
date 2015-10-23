// added chart.js dependency
angular.module("demoApp",["ngRoute", "chart.js", "ngMaterial"])

angular.module("demoApp").config(["$routeProvider",function($routeProvider){

	$routeProvider.when("/",{
		templateUrl : "/html/template.html",
		controller  : "demoController"
	})

}])

angular.module("demoApp").controller("demoController",["$scope","$http",function($scope,$http){

			// Ed's Angular stuff
			$scope.greeting = 'Surprise Surprise'
			
			 

			$scope.labels = ["Blue", "Grey", "Red"];
  			$scope.data = [100,100,100]
  			


  			//end of Ed's Angular Stuff

}])


