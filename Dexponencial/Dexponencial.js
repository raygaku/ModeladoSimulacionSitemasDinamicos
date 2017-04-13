angular.module('app',[]).controller('main',['$scope',function($scope){
  function getRandom(min,max){
    return parseFloat((Math.random() * (max - min) + min).toFixed(5));
  }
  $scope.dataS = {numeros:'', lambda:''};
  $scope.ejecutar = function(){
    console.log($scope.dataS)
    var ng = [];
    $scope.numerosGenerados = ng;
    for(var i = 0; i < $scope.dataS.numeros; i++)
    {
      ng.push(getRandom(0,1));
    }

    var l = ng;
    var vlambda = $scope.dataS.lambda;
    var ts = [];
    var operacion = 0.0;
	

    for(var i = 0; i < l.length ; i++)
    {
	    operacion = Math.log(l[i]) * parseFloat(-1 / vlambda);
	    ts.push(parseFloat(operacion.toFixed(5)))
    }
    console.log("Ts");
    for(var i = 0; i < ts.length; i++)
    {
	    console.log("ts" + (i+1) + " " + ts[i].toFixed(6));
    }
    $scope.listaTS = ts;
    // console.log("ts ", ts);

    var ttoc = 0.0;


    ts.forEach(function(v){
	    ttoc += v;
    });

    console.log("ttoc ", ttoc.toFixed(5));
    $scope.tiempototal = ttoc.toFixed(5);
    var tpac = 0.0;


    tpac = parseFloat(ttoc / ts.length);

    console.log("tpac ", tpac.toFixed(5));
    $scope.tiempopromedio = tpac.toFixed(5);
  }

}]);
