var spa = angular.module('spa', ['ui.router']);

spa.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/products');

  $stateProvider
    .state('products', {
      url: '/products',
      templateUrl: 'js/templates/productsIndex.html',
      controller: 'ProductsCtrl'
    })
})