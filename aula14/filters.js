angular.module('filters', []).filter('upper', function() {
    return function(input) {
        return input.toUpperCase();
    };
});
