angular.module("demoApp",["ngRoute"])

angular.module("demoApp").config(["$routeProvider",function($routeProvider){

	$routeProvider.when("/",{
		templateUrl : "/html/template.html",
		controller  : "demoController"
	})

}])

angular.module("demoApp").controller("demoController",["$scope","$http",function($scope,$http){

}])