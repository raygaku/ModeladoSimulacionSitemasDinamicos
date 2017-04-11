angular.module('app',[]).controller('main',['$scope',function($scope){

  $scope.dataS = {numeros:'', alfa:''};
  function getRandom(min,max){
    return parseFloat((Math.random() * (max - min) + min).toFixed(5));
  }
  $scope.ejecutar = function()
  {
    $scope.tabla1 = [];
    $scope.renglont1 = {i:'', xi:'', fxi:'', dn:''};
    console.log($scope.dataS)
    var numeros = [];
    for(var i = 0; i < $scope.dataS.numeros; i++)
    {
      var rectangular = getRandom(0,1);
      numeros.push(rectangular);
    }
    var xi = [];
    xi = numeros.sort();
    console.log("Xi: " + xi);
    var fxi = [];

    for(i = 1; i <= xi.length; i++)
    {
      fxi.push(parseFloat(i / xi.length).toFixed(5));
    }

    console.log("F(xi0): " + fxi);

    var dn = [];

    for(i = 0; i < xi.length; i++)
    {
      dn.push(Math.abs(parseFloat( fxi[i]  - xi[i]  )).toFixed(5))
    
    }

    for(var i = 0; i < xi.length; i++)
    {
      $scope.renglont1 = {i:'', xi:'', fxi:'', dn:''};
      $scope.renglont1.i = i + 1;
      $scope.renglont1.xi = parseFloat(xi[i].toFixed(5));
      $scope.renglont1.fxi = parseFloat(fxi[i]);
      $scope.renglont1.dn = parseFloat( dn[i]);
      $scope.tabla1.push($scope.renglont1)
    }

    console.log("Dn: " + dn);
    console.log("El máximo es: " + Math.max(...dn));
  }

}]);

