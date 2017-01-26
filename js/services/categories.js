spa.factory('categoriesService', ['productsService', function(productsService) {
  var _categories = [];
  var _id = 1;

  var getAll = function() {
    if (!_categories.length) { 
      _populateCategories() }
    return _categories;
  };

  var _populateCategories = function() {
    var categories = [
      {
        "name": "Axes",
        "id": 1,
        "productIds": [7,8,9]
      }, {
        "name": "Ships",
        "id": 2,
        "productIds": [1,2,3,4,5,6]
      }, {
        "name": "Helmets",
        "id": 3,
        "productIds": [10,11,12,13,14]
      }
    ]
    categories.forEach(function(category) {
      _extend(category);
    });
    _categories =  categories;
  }

  var _extend = function(category) {
    category.products = function() {
      var products = [];
      this.productIds.forEach(function(productId) {
        var product = productService.find(productId);
        products.push(product);
      })
      return products
    };
  };

  return {
    getAll: getAll,
  }
}]);
