
var app = angular.module('todoapp', ['ionic']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('list', {
    url: '/list',
    templateUrl: 'templates/lista.html'
  });

  $stateProvider.state('new', {
    url: '/new',
    templateUrl: 'templates/novo.html'
  });


  $urlRouterProvider.otherwise('/list');
});



app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

var tarefas = [
  {"texto": "Realizar as atividades do curso",
  "data": new Date(),
  "feita": false
  },
  {"texto": "Passear com o cachorro",
  "data": new Date(),
  "feita": true
  }

];

app.controller('ListaCtrl', function($scope) {

  //IMPLEMENTACAO DO CONTROLER, METODOS USADOS NA VIEW:
  $scope.tarefas = tarefas;

  $scope.concluir = function(indice) {
    $scope.tarefas[indice] = true;
  }

  $scope.apagar = function(indice) {
    $scope.tarefas.splice(indice);
  }
  
});

app.controller('NovoCtrl', function($scope, $state) {

  $scope.salvar = function(){

    var tarefa = {
      "texto": $scope.texto, //<input ng-model="texto"...
      "data": new Date(),
      "feita": false
    };

    tarefas.push(tarefa);

    $state.go('list');

  }

});

