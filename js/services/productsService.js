spa.factory('productsService', ['$http', function($http) {
  var _products = [];
  var _id = 1;
  // var getAll = function() {
  //   return $http({
  //     type: "GET",
  //     url: "/js/data/products.json",
  //   }).then(function(response) {
  //     return _products = response.data;
  //   });
  // };

  var _createProduct = function(params) {
    var product = angular.copy(params, {});

    
    product.id = _id;
    _id++;

    _products.push(product);
  };

  var _fetchOne = function() {
    var requests = [];
    var product = {};
    requests.push($http.get('http://faker.hook.io?property=image.transport')
      .then(function(response) {
        product.image = response.data;
      }))

    requests.push($http.get('http://faker.hook.io?property=hacker.ingverb&property=hacker.noun')
      .then(function(response) {
        product.name = response.data;
      }))

    requests.push($http.get('http://faker.hook.io?property=finance.amount')
      .then(function(response) {
        product.price = response.data;
      }))

    requests.push($http.get('http://faker.hook.io?property=hacker.phrase')
      .then(function(response) {
        product.description = response.data;
      }))

    return $q.all(requests).then(function(response){
      console.log(response)
      return response;
    })
  }

  return {
    getAll: getAll,
    _fetchOne: _fetchOne
  };
}]);
