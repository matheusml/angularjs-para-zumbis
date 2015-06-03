angular.module('app').controller('zumbisCtrl', function($scope) {
    $scope.ocorrencias = [];

    $scope.adiciona = function(ocorrencia) {
        $scope.ocorrencias.push(angular.copy(ocorrencia));
    };
});
