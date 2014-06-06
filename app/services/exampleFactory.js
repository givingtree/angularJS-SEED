(function() {
    var exampleFactory = function($http) {
    
        var factory = {};
        
        factory.getCustomers = function() {
            return $http.get('/customers');
        };
        
        factory.getCustomer = function(customerId) {
            return $http.get('/customers/' + customerId);
        };
        
        factory.getOrders = function() {
            return $http.get('/orders');
        }
        
        factory.deleteCustomer = function(customerId) {
            return $http.delete('/customers/' + customerId);
        }
        
        return factory;
    };
    
    exampleFactory.$inject = ['$http'];
        
    angular.module('seedApp').factory('exampleFactory', exampleFactory);
                                           
}());