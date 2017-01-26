spa.controller('ProductsCtrl', ['$scope', 'productsService', 'categoriesService', function($scope, productsService, categoriesService) {

  $scope.products = productsService.getAll();
  $scope.categories = categoriesService.getAll();

}]);
