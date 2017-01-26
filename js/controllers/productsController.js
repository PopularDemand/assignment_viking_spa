spa.controller('ProductsCtrl', ['$scope', '$stateParams', 'productsService', 'categoriesService', function($scope, $stateParams, productsService, categoriesService) {

  $scope.products = productsService.getAll();
  $scope.categories = categoriesService.getAll();

  $scope.find = function(id) {
    for (var i = 0; i < $scope.categories.length; i++) {
      if ($scope.categories[i].id == id) {
        return $scope.categories[i];
      }
    }
  };

  if ($stateParams.productId) {
    console.log($stateParams)
    $scope.product = productsService.find($stateParams.productId);
    console.log($scope.product)
  }
  
}]);
