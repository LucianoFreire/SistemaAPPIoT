angular.module("sistemaappiot").controller("agendaController", function ($scope, sistemaApi,$location) {
	$scope.lista = [];
	$scope.novoAg = function(){
		$location.url('/novosAgendamentos');
	};
	var listaAgenda = function(){
		sistemaApi.listAgenda().then(function(dados){
			$scope.lista = dados.data;
		},function(err){
			alert("Erro")
		});
	};
	$scope.delet = function(id){
	var opcao = 	confirm("Deseja Excluir?");
		if(opcao){
			sistemaApi.dell(id).then(function(dados){
				listaAgenda();
			},function(err){
				alert("Erro ao excluir: "+err);
			});
		}
	};
	$scope.put = function(agenda){
		sistemaApi.editar(agenda).then(function(dados){
			alert("Alterado com sucesso");
			listaAgenda();
		},function(err){
			alert("Erro na edicao");
		})

	};
	listaAgenda();
});