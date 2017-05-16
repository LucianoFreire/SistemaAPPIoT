angular.module("sistemaappiot").controller("novosAgendamentosController", function ($scope, sistemaApi, $location) {
    $scope.estado = {};
    $scope.data = {};
    $scope.novoAg = function () {
        $location.url('/agendamentos');
    };
    $scope.data = new Date();

    $scope.salvar = function (estado) {
        $scope.estado.data = moment($scope.data).format("DD/MM/YYYY");
        $scope.estado.hora = moment($scope.data).format("HH:MM:ss");
        $scope.estado = estado;
        sistemaApi.salvarAgenda($scope.estado).then(function (dados) {
            // alert("Salvo");
            $scope.novoAg();
        }, function (err) {
            alert("Erro");
        });
    };
   
});