spa.controller('ProductsCtrl', ['$scope', 'productsService', function($scope, productsService) {
  $scope.products = [];
  productsService.getAll().then(function(products) {
    $scope.products = products;
  });

  productsService._fetchOne().then(console.log)
}]);
