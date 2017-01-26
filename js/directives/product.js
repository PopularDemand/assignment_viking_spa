spa.directive('product', function() {
  return {
    templateUrl: '/js/directives/product.html',
    restrict: 'E',
    scope: {
      product: '=',
      find: '&',
      addItem: '&',
    },
    link: function(scope) {
      scope.quantity = 1;
    }
  };
});