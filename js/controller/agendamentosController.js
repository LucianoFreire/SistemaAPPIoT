angular.module("sistemaappiot").controller("agendaController", function ($scope, sistemaApi,$location) {
	$scope.lista = [];
	$scope.novoAg = function(){
		$location.url('/novosAgendamentos');
	}
	var listaAgenda = function(){
		sistemaApi.listAgenda().then(function(dados){
			$scope.lista = dados.data;
		},function(err){
			alert("Erro")
		});
	};
	$scope.delet = function(id){
	var r = 	confirm("Sim");
		if(r){
			sistemaApi.dell(id).then(function(dados){
				listaAgenda();
			},function(err){
				alert("Erro ao excluir: "+err);
			});
		}
	}
	listaAgenda();
});