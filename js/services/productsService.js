spa.factory('productsService', ['$http', '$q', '_', function($http, $q, _) {
  var _products = [];
  var _id = 1;
  var getAll = function() {
    if (!_products.length) { _populateProducts(); }
    return _products;
    // return $http({
    //   type: "GET",
    //   url: "/js/data/products.json",
    // }).then(function(response) {
    //   return _products = response.data;
    // });
  };

  var _populateProducts = function() {
    for (var i = 0; i < 7; i++) {
      _createProduct();
    }
  };

  var _createProduct = function() {
    var product = {
      id: _id,
      name: _.capitalize(faker.hacker.ingverb()) + ' ' + _.capitalize(faker.hacker.noun()),
      image: faker.image.transport(),
      price: faker.finance.amount(),
      description: faker.hacker.phrase()
    };
    _id++;
    _products.push(product);
  };

  return {
    getAll: getAll,
  };
}]);
