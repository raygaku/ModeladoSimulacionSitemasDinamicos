angular.module('app',[]).controller('main',['$scope',function($scope){
  console.log("entre ")
  function getRandom(min,max){
    return parseFloat((Math.random() * (max - min) + min).toFixed(5));
  }

  $scope.cantidadInicial = 50;
  $scope.meta = 80;
  $scope.apuesta = 10;
}]);
