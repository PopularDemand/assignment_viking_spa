spa.controller('ProductsCtrl', ['$scope', 'productsService', 'categoriesService', function($scope, productsService, categoriesService) {

  $scope.products = productsService.getAll();
  $scope.categories = categoriesService.getAll();

  $scope.find = function(id) {
    for (var i = 0; i < $scope.categories.length; i++) {
      if ($scope.categories[i].id == id) {
        return $scope.categories[i];
      }
    }
  };

}]);
