spa.factory('categoriesService', function() {
  var _categories = [];
  var _id = 1;
  var getAll = function() {
    if (!_categories.length) { }
    return _categories;
  };

  var _extend = function(category) {
    category.products = function() {
      // return 
    }
  };

  return {
    getAll: getAll,
  }
});
