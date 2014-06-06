(function() {
    
    var SecondController = function ($scope, $routeParams, exampleFactory) {
        var param = $routeParams.param;
        $scope.param = 5;
        
        function init() {
          
        }        

        init();
    };
    
    SecondController.$inject = ['$scope', '$routeParams', 'exampleFactory'];

    angular.module('seedApp')
      .controller('SecondController', SecondController);
    
}());