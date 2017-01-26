spa.directive('product', function() {
  return {
    templateUrl: '/js/directives/product.html',
    restrict: 'E',
    scope: {
      product: '=',
      quantity: '@',
      find: '&',
      addItem: '&',
    },
    link: function() {
      scope.quantity = 1;
    }
  };
});