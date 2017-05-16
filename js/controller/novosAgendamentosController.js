angular.module("sistemaappiot").controller("novosAgendamentosController", function ($scope, sistemaApi, $location) {
    $scope.estado = {};
    $scope.data = {};
    $scope.alertas = [];
    $scope.novoAg = function () {
        $location.url('/agendamentos');
    };
    $scope.data = new Date();

    $scope.salvar = function (estado) {
        $scope.estado.data = moment($scope.data).format("DD/MM/YYYY");
        $scope.estado.hora = moment($scope.data).format("HH:MM:ss");
        $scope.estado = estado;
        if($scope.estado.EstadoTelevisor !=null && $scope.estado.EstadoVentilador !=null
            && $scope.estado.EstadoLuzQuarto != null && $scope.estado.EstadoLuzSala != null){
            sistemaApi.salvarAgenda($scope.estado).then(function (dados) {
                $scope.novoAg();
            }, function (err) {
                $scope.alertas.push("Erro ao Cadastrar");
            });
        }else{
                $scope.alertas.push("Preencha os campos");
        }
    };
   
});