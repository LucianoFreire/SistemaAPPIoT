
angular.module("sistemaappiot").controller("novosAgendamentosController", function ($scope, $location) {

    $scope.novoAg = function () {
        $location.url('/novosAgendamentos');
    };

});