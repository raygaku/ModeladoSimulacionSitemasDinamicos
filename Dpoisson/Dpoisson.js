/**
* app Module
*
* Description
*/
angular.module('app', [])
.controller('controller', ['$scope', function($scope){
  $scope.dataS = {lambda:''};
  function getRandom(min,max){
    return parseFloat((Math.random() * (max - min) + min).toFixed(5));
  }
  
	var factorial = function(n)
	{
		if (n == 0){
			return 1;
		}

		return n * factorial(n-1);
	}

  $scope.ejecutar = function()
  {
   console.log($scope.dataS) 
	  var ng = [];
   for(var i = 0; i < $scope.dataS.lambda; i++){
     ng.push(getRandom(0,1));
   }
	  var l = ng;
    var vlambda = parseFloat($scope.dataS.lambda);
    var sumF = 0.0;
    $scope.tabla = [];
    var sumatorias = [];
    var fxi = 0;
    var i = 0;


    while(1)
    {
    	$scope.fila = {x: '', ufxi : '' , mfxi: ''};

        fxi = ( Math.pow(2.718281829, -1*vlambda) * Math.pow(vlambda, i) ) / factorial(i) ;
       	sumatorias.push(sumF);
        sumF += fxi;
        $scope.fila.x = i;
        $scope.fila.ufxi = fxi.toExponential();
        $scope.fila.mfxi = sumF.toExponential();
        $scope.tabla.push($scope.fila)
        i++;
        if (sumF > 0.99995){
        	sumatorias.push(1.0)
        	break;
        } 
    }
    $scope.condiciones = [];

    $scope.demanda = 0;
    for (var i = 0; i < sumatorias.length  ; i++) {
        console.log("Si R >", sumatorias[i], "y <" , sumatorias[i+1], " entonces x = ", i)
    	l.forEach( function(v) {
    		if(v > sumatorias[i] && v < sumatorias[i+1]){
    			$scope.condicion = {condicion:''}
    			$scope.condicion.condicion = "Valor " + v + " entre " + sumatorias[i].toFixed(5) + " y "  + sumatorias[i+1].toFixed(5) + " se asigna " + i
    			$scope.condiciones.push($scope.condicion);
    			$scope.demanda += i;
    		}
    	});
    }

    console.log(l)
  }

}]);


