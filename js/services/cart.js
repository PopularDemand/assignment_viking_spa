spa.factory('cartService', [function() {
  _products = [];

  var addItem = function(item, quantity) {
    for (var i = 0; i < _products.length; i++) {
      if (_products[i].item === item) {
        _products[i].quantity = quantity;
        return;
      }
    }
    _products.push({
      item: item,
      quantity: quantity
    });
    console.log('within add item', _products)
  };

  var removeItem = function(item) {
    for (var i = 0; i < _products.length; i++) {
      if (_products[i] === item) {
        return _products.splice(i, 1);
      }
    }
  };

  var listAll = function() {
    return _products;
  }

  return {
    listAll: listAll,
    removeItem: removeItem,
    addItem: addItem,
  };
}]);
