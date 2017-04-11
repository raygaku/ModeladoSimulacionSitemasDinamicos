angular.module('app',[]).controller('main', ['$scope', function($scope){

  $scope.dataRecibida = {numeros:'', alfa:''}
  function getRandom(min,max){
    return parseFloat((Math.random() * (max - min) + min).toFixed(5));
  }

  $scope.ejecutar = function()
  {
    $scope.zalfa = parseFloat(    ) 
    $scope.tablaNG = []
    $scope.numerosG = {numero:''}
    console.log($scope.dataRecibida)
   
    var numeros = [] 
    for(var i = 0; i < $scope.dataRecibida.numeros; i++)
    {
      var rectangular = getRandom(0,1);
      $scope.numerosG = {numero:''}
      $scope.numerosG.numero = rectangular;
      $scope.tablaNG.push($scope.numerosG)
      numeros.push(rectangular);
    }
    console.log(numeros)
    var suma = 0;


    for (i = 0; i < numeros.length ; i++)
    {
      suma += numeros[i];
    }   

    var promedio = suma / numeros.length;
    console.log("Ex " + suma);

    console.log("x " + promedio)
    var zo = (promedio - 0.5)* Math.sqrt(numeros.length);
    console.log("Numerador z0 " + zo)
    zo = zo / Math.sqrt(parseFloat(1/12));
    zo = Math.abs(zo);
    console.log("Zo =  "  + zo);
  }
}]);
