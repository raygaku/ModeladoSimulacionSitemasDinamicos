
var gcapp = angular.module('gcapp', []);

gcapp.controller('main', ['$scope', function($scope){
  
  $scope.valores= {a: '', x0 : '', m: ''};

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
    if($scope.valores.m == '')
    { 
      alert("Favor de llenar m");
    }
    
    if($scope.valores.m <= $scope.valores.x0 
        || $scope.valores.m <= $scope.valores.a)
    {
      alert("M debe ser mayor  'a' y 'x0'");
    }

    var x0 = parseFloat($scope.valores.x0);
    var a = parseFloat($scope.valores.a);
    var m = parseFloat($scope.valores.m);
    var xn = 0;
    $scope.tablaLlena = [];
    $scope.tablaDatos= {n: '', x0 : '', operacion:'', xn: '', numero: '', m: m};
    for(i = 1 ; i <= $scope.valores.m; i++)
    {
      $scope.tablaDatos= {n: '', x0 : '', operacion:'', xn: '', numero: '', m:m};
      $scope.tablaDatos.n = i;
      $scope.tablaDatos.x0 = x0;
      xn = (a * x0) % m;
      $scope.tablaDatos.xn = xn;
      $scope.tablaDatos.numero = parseFloat(xn/m);
      $scope.tablaDatos.operacion = parseInt((a * x0) / m );  
      x0 = xn;
      $scope.tablaLlena.push($scope.tablaDatos);  
      if(x0 == $scope.valores.x0){
         $scope.noconfiable = 1;
        break;
      }
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

