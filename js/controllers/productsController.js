spa.controller('ProductsCtrl', ['$scope', '$stateParams', 'productsService', 'categoriesService', 'cartService', function($scope, $stateParams, productsService, categoriesService, cartService) {

  $scope.products = productsService.getAll();
  $scope.categories = categoriesService.getAll();
  $scope.cart = cartService.listAll();

  $scope.find = function(id) {
    for (var i = 0; i < $scope.categories.length; i++) {
      if ($scope.categories[i].id == id) {
        return $scope.categories[i];
      }
    }
  };

  $scope.quantity = 1;

  $scope.addItem = function(item, quantity) {
    console.log(quantity)
    cartService.addItem(item, quantity);
    quantity = 1;
  };

  $scope.removeItem = function(item) {
    cartService.removeItem(item);
  };

  if ($stateParams.productId) {
    console.log($stateParams)
    $scope.product = productsService.find($stateParams.productId);
    console.log($scope.product)
  }
  
}]);
