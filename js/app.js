var spa = angular.module('spa', ['ui.router']);

spa.factory('_', ['$window', function($window) {
  return $window._;
}]);

spa.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/products');

  $stateProvider
    .state('products', {
      url: '/products',
      abstract: true,
      template: '<h1>Products</h1><ui-view></ui-view>'
    })
    .state('products.index', {
      url: '',
      templateUrl: 'js/templates/productsIndex.html',
      controller: 'ProductsCtrl',
    })
    .state('products.show', {
      url: '/:productId',
      templateUrl: 'js/templates/productShow.html',
      controller: 'ProductsCtrl'
    });
});
