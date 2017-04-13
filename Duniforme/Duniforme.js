angular.module('app',[]).controller('main',['$scope', function($scope){
  $scope.dataS = {n:'', a:'', b:''};
  function getRandom(min,max){
    return parseFloat((Math.random() * (max - min) + min).toFixed(5));
  }
  $scope.ejecutar = function()
  {
    console.log($scope.dataS)
	  var ng = [];
    for(var i = 0; i < $scope.dataS.n; i++)
    {
      ng.push(getRandom(0,1));
    }
    var ts = [];
  	var l = ng;
	  var a = parseFloat($scope.dataS.a);
	  var b = parseFloat($scope.dataS.b);
    
    $scope.listaNg = ng;

	  for(var i = 0; i < l.length ; i++)
	  {
		  operacion = parseFloat( a + (b - a) * l[i]);
		  ts.push(parseFloat(operacion.toFixed(5)));
	  }

    $scope.listaTs = ts;
	  console.log("Ts");
	  for(var i = 0; i < ts.length; i++)
	  {
		  console.log("ts" + (i+1) + " " + ts[i]);
	  }

	  var ttoc = 0.0;


	  ts.forEach(function(v){
		  ttoc += v;
	  });

	  console.log("ttoc ", ttoc.toFixed(5));
    $scope.valorTtoc = ttoc.toFixed(5);
	  var tpac = 0.0;

	  tpac = parseFloat(ttoc / ts.length);
    $scope.valorTpac = tpac.toFixed(5);
	  console.log("tpac ", tpac.toFixed(5));
  }
}]);
