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
  };

  return {
    listAll: listAll,
    removeItem: removeItem,
    addItem: addItem,
  };
}]);
