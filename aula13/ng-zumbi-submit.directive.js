angular.module('app').directive('ngZumbiSubmit', function() {
    return {
        restrict: 'E',
        require: '^form',
        scope: {
            submit: '&',
        },
        template: '<button type="submit" class="btn btn-primary">Salvar</button>',
        link: function($scope, $element, $attrs, formCtrl) {
            $element.on('click', function() {
                if (formCtrl.$valid) {
                    $scope.submit();
                }
                else {
                    alert('formulário inválido');
                }
            });
        }
    }
});
