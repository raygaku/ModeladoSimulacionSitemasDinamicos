angular.module('app',[]).controller('main',['$scope', function($scope){
      $scope.dataS = {numeros:'', alfa:'', n:''};
      function getRandom(min,max){
        return parseFloat((Math.random() * (max - min) + min).toFixed(5));
      }
      $scope.ejecutar = function()
      {
      
      var n = $scope.dataS.n;
      var lista  = [];

      for(var i = 0; i < $scope.dataS.numeros; i++)
      {
        lista.push(getRandom(0,1));
      }

      $scope.listaNumeros = lista;

      var listaParejas = [];
      var cons = [];

      for(var i = 0; i < lista.length - 1; i++)
      {

          cons = [];
          cons.push(lista[i]);
          cons.push(lista[i+1]);
          listaParejas.push(cons);

      }

      console.log("Parejas");
      console.log(listaParejas);

      $scope.listaDeParejas = listaParejas;

      var intervaloi = 0.0;
      var intervaloj = 0.0;
      var laux = [];
      var plano = [];
      for(var i = 0; i < n; i++)
      {
        intervaloi = parseFloat( (i+1) / n );
        
        for(var j = 0; j < n; j++)
        {
          laux = []
          intervaloj = parseFloat( (j+1) / n );
          console.log("Cordenadas " + intervaloi + " " + intervaloj);
          listaParejas.forEach(function(a){


            if((a[0] > parseFloat(i/n) && a[1] > parseFloat(j/n)) && (a[0] < intervaloi && a[1] < intervaloj) )
            {
              laux.push(a)
              console.log(a);

            }

          });
          plano.push(laux)

        }


      }

      //Trabajando en los intervalos
      $scope.tablaInterv = [];
      $scope.interv = {x:'', y:''};
      var valoresi = []
      for(var  i = 0; i < n; i++)
      {
        for(var j= 0; j < n; j++)
        {
          $scope.intervToString = (i + 1)/2 + " , " + (j+1)/2;
          $scope.interv.x = i;
          $scope.interv.y = j;
          $scope.tablaInterv.push($scope.intervToString)
        }
      }

console.log("tablaInterv", $scope.tablaInterv)

console.log("plano");
console.log(plano);

var feo = []

plano.forEach(function(a)
{
  feo.push(a.length);
});

var fei = 0.0;
fei = parseFloat((lista.length - 1) / Math.pow(n,2))
console.log("FEi ", fei);
console.log("FEo " ,    feo);
$scope.listaFeo = feo;
var x20 = 0.0;
var sum = 0.0;

for(var i = 0; i < feo.length ; i++)
{
  sum += parseFloat( Math.pow( feo[i] - fei ,2) );
}

var pre = 0.0;
pre = ( Math.pow(n , 2) / (lista.length - 1) ).toFixed(5)
console.log("El prefijo es " ,pre);
console.log("La suma es ", sum);
x20 = pre * sum;
console.log("x20 " , x20);

      }
}]);
