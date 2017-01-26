var spa = angular.module('spa', ['ui.router']);

spa.factory('_', ['$window', function($window) {
  return $window._;
}]);

spa.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/products');

  $stateProvider
    .state('products', {
      url: '/products',
      templateUrl: 'js/templates/productsIndex.html',
      controller: 'ProductsCtrl'
    });
});
