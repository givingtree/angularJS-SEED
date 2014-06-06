(function() {
    
    var app = angular.module('seedApp', ['ngRoute', 'ngAnimate']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'FirstController',
                templateUrl: 'app/views/first.html'
            })
            .when('/orders/:param', {
                controller: 'SecondController',
                templateUrl: 'app/views/second.html'
            })
            .otherwise( { redirectTo: '/' } );
    });
    
}());