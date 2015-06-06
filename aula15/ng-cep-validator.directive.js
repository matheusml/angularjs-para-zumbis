angular.module('app').directive('ngCepValidator', function($http, $rootScope) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function($scope, $element, $attrs, ngModel) {
            $scope.$watch($attrs.ngModel, function(value) {
                if (value) {
                    if (value.match(/^[0-9]{5}-[0-9]{3}$/)) {
                        $http.get('http://api.postmon.com.br/v1/cep/' + value).then(function(response) {
                            $rootScope.$broadcast('cep', response.data);
                        });
                        ngModel.$setValidity($attrs.ngModel, true);
                    }
                    else {
                        ngModel.$setValidity($attrs.ngModel, false);
                    }
                }
                else {
                    ngModel.$setValidity($attrs.ngModel, false);
                }
            });
        }
    }
});
