spa.factory('productsService', ['$http', function($http) {
  var _products = [];
  var getAll = function() {
    return $http({
      type: "GET",
      url: "/js/data/products.json",
    }).then(function(response) {
      return _products = response.data;
    });
  };

  return {
    getAll: getAll
  };
}]);
