spa.filter('categoryFilter', function() {
  return function(products, category) {
    if (!category) { return products; }
    var filteredProducts = [];

    angular.forEach(products, function(product) {
      if (category.productIds.includes(product.id)) {
        filteredProducts.push(product);
      }
    });

    return filteredProducts;
  }
});
