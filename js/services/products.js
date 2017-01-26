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
    for (var i = 0; i < 6; i++) {
      _createShip();
    }
    for (var j = 0; j < 3; j++) {
      _createAxe();
    }
    for (var k = 0; k < 5; k++) {
      _createHelmet();
    }
  };

  var _createShip = function() {
    var product = {
      id: _id,
      name: _.capitalize(faker.hacker.ingverb()) + ' ' + _.capitalize(faker.hacker.noun()),
      image: faker.image.transport(),
      price: faker.finance.amount(),
      description: faker.hacker.phrase(),
      category: 1,
    };
    _id++;
    _products.push(product);
  };

  var _createAxe = function() {
    var product = {
      id: _id,
      name: _.capitalize(faker.commerce.productName()),
      image: faker.image.abstract(),
      price: faker.finance.amount(),
      description: faker.company.catchPhrase(),
      category: 2,
    };
    _id++;
    _products.push(product);
  };

  var _createHelmet = function() {
    var product = {
      id: _id,
      name: _.capitalize(faker.company.catchPhrase()),
      image: faker.image.image(),
      price: faker.finance.amount(),
      description: faker.company.catchPhrase(),
      category: 3,
    };
    _id++;
    _products.push(product);
  };

  return {
    getAll: getAll,
  };
}]);
