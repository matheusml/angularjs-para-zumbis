angular.module('app').config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'zumbis.html',
            controller: 'zumbisCtrl'
        });
});
