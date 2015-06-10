angular.module("myapp", [])
    .controller("HelloController", function($scope) {
        $scope.helloTo = {};
        $scope.helloTo.title = "World, AngularJS";

        $scope.clickMe = function(){
        	 alert('this is click')
        }
    } );
