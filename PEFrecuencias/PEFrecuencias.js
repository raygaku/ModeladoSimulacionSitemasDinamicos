angular.module('app',[]).controller('main',['$scope', function($scope){
  $scope.habilitarResultado = false;
  $scope.habilitarCaptura = false;
  function getRandom(min,max){
    return parseFloat((Math.random() * (max - min) + min).toFixed(5));
  }
  $scope.dataS = {numeros:'', n:'', alfa:'' };
  $scope.generar = function()
  {
  $scope.habilitarCaptura = true;
  var lista = [];
  var n = $scope.dataS.n;
  console.log($scope.dataS)
  for(var i = 0; i < $scope.dataS.numeros; i++)
  {
    var rectangular = getRandom(0,1);
    lista.push(rectangular);
  }
  $scope.listaNumeros = lista;
  console.log(lista)
  var fei = [];
  var sfeo = [];
  var intervalo = 0.0;
  var aux = []
  for(var i = 0; i < n; i++)
  {
   aux = [];
   intervalo = parseFloat((i + 1)/ n);
   console.log(intervalo)
    for(var j = 0; j < lista.length; j++)
    {
      if(lista[j] < intervalo && lista[j] > parseFloat(i  / n))
      {
       aux.push(lista[j])
      }
    }
   sfeo.push(aux)
  }


  var feo = [];
  sfeo.forEach(function(a){
   feo.push(a.length)
  });



  var fei = parseFloat(lista.length / n);

  console.log("El Fei es " + fei);
  console.log("El FEo es " + feo)
  $scope.feivalor = fei;
  $scope.listaFeo = feo;
  var x20 = 0.0;

  var sum = 0.0;

  feo.forEach(function(v){
    sum +=  Math.pow(v - fei , 2);
  });

  console.log("La sum es  " + sum);
  x20 = parseFloat(1/fei) * sum;
  console.log("La X20 es " + x20);
  $scope.x20Final = parseFloat(x20.toFixed(5));
  }

 $scope.xalfa = {x:''};
 $scope.obtenerResultado = function()
 {
   console.log($scope.xalfa);
   $scope.habilitarResultado = true;
   if($scope.x20Final < $scope.xalfa.x)
   {
     $scope.resutadoFinal = "Por lo tanto, los números son aceptados";
   }
   else
   {
     $scope.resutadoFinal = "Por lo tanto, los números no son aceptados";
   }
   
 } 
}]);


