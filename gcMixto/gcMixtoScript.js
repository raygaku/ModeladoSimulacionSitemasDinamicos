var gcapp = angular.module('gcapp', []);

gcapp.controller('main', ['$scope', function($scope){
  
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
      xn = (a * x0 + c) % m;
      $scope.tablaDatos.xn = xn;
      $scope.tablaDatos.numero = parseFloat(xn/m);
      $scope.tablaDatos.operacion = parseInt((a * x0 + c) / m );  
      x0 = xn;
      $scope.tablaLlena.push($scope.tablaDatos);  
    }

    if($scope.tablaLlena[m-1].xn != $scope.valores.x0)
    {
      $scope.noconfiable = 1;
      $scope.confiable = 0;
      console.log("Por lo tango, Generador congruencial mixto no confiable");
    }
    else
    {
      $scope.confiable = 1;
      $scope.noconfiable = 0;
      console.log("Por lo tanto, Generador congruencial mixto confiable");
    }
    

  }

}])

