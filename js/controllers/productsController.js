spa.controller('ProductsCtrl', ['$scope', 'productsService', function($scope, productsService) {
  $scope.products = productsService.getAll();
}]);
