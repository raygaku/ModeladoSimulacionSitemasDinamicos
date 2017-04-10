var app = angular.module('app',[])
app.controller('main', ['$scope', function($scope){
  
  function getRandom(min,max){
    return Math.random() * (max - min) + min;
  }
  
  $scope.tabla = [];
  $scope.renglon = {i:'', numero:''}
  $scope.dataEnter = {numerosaGenerar : ''}
  $scope.generar = function(){
    $scope.tabla = [];
    console.log($scope.dataEnter);

    for(var j = 1; j <= $scope.dataEnter.numerosaGenerar; j++)
    {
      $scope.renglon = {i:'', numero:''}
      var rectangular = getRandom(1,0);
      $scope.renglon.i = j;
      $scope.renglon.numero = rectangular;

      $scope.tabla.push($scope.renglon)
    }
    console.log($scope.tabla)
  }
}]);

