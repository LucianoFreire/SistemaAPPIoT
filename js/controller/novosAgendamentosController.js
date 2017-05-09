/**
 * Created by LucianoFreire on 03/05/2017.
 */

angular.module("sistemaappiot").controller("novosAgendamentosController", function ($scope, $location) {

    $scope.novoAg = function (caminho) {
        console.log(caminho);
        $location.url(caminho);
    };

});