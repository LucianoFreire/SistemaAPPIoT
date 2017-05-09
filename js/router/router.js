/**
 * Created by LucianoFreire on 03/05/2017.
 */


angular.module("sistemaappiot").config(["$routeProvider", function ($routeProvider) {

    $routeProvider.when("/", {
        templateUrl: "view/home.html"
    });

    $routeProvider.when("/agendamentos", {
        templateUrl: "view/agendamentos.html"
       // controller: "novosAgendamentos"
    });

    $routeProvider.when("/novosAgendamentos", {
        templateUrl: "view/novosAgendamentos.html",
        controller: "novosAgendamentosController"
    });


}]);

