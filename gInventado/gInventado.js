
var gcin = angular.module('gcin', []);

gcin.controller('main', ['$scope', function($scope){
  
  $scope.valores= {a: '', x0 : '', c: '', m: ''};

  $scope.enviarvalores = function(){
    console.log($scope.valores)
    if($scope.valores.a == '')
    {
       alert("Favor de llenar a");
    }
    if($scope.valores.x0 == '')
    {
      alert("Favor de llenar x0");
    }
    if($scope.valores.c == '')
    { 
      alert("Favor de llenar c");
    }
    if($scope.valores.m == '')
    { 
      alert("Favor de llenar m");
    }
    
    if($scope.valores.m <= $scope.valores.x0 || $scope.valores.m <= $scope.valores.c 
        || $scope.valores.m <= $scope.valores.a)
    {
      alert("M debe ser mayor  'a' , 'x0' y 'c' ");
    }

    var x0 = parseFloat($scope.valores.x0);
    var a = parseFloat($scope.valores.a);
    var c = parseFloat($scope.valores.c);
    var m = parseFloat($scope.valores.m);
    var xn = 0;
    $scope.tablaLlena = [];
    $scope.tablaDatos= {n: '', x0 : '', operacion:'', xn: '', numero: '', m: m};
    for(i = 1 ; i <= $scope.valores.m; i++)
    {
      $scope.tablaDatos= {n: '', x0 : '', operacion:'', xn: '', numero: '', m:m};
      $scope.tablaDatos.n = i;
      $scope.tablaDatos.x0 = x0;
      xn = ((a * x0) / c) % m;
      xn = xn.toFixed(5);
      $scope.tablaDatos.xn = xn;
      $scope.tablaDatos.numero = parseFloat(xn/m).toFixed(5);
      $scope.tablaDatos.operacion = parseInt(((a * x0) / c) / m );  
      x0 = xn;
      $scope.tablaLlena.push($scope.tablaDatos);  
    }

    

  }

}])

