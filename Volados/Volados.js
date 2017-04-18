angular.module('app',[]).controller('main',['$scope',function($scope){
  $scope.configuracionVariables = {cantidadInicial:'', meta:'', apuesta:'', tipo:'', n:''};
  function getRandom(min,max){
    return parseFloat((Math.random() * (max - min) + min).toFixed(5));
  }

  $scope.cantidadInicial = 50.00;
  $scope.meta = 80.00;
  $scope.apuesta = 10.00;
  $scope.tipoCorrida = 1; // 1 por Número de Corrida, 2 por Números Aleatorios
  $scope.numeroCorridas = 5;
  $scope.numerosAleatorios = 20;
  $scope.tabla = [];
  $scope.renglon = {nc:'',cav:'',apuesta:'',naleatorio:'',segano:'',cdv:'',llegameta:''};

  $scope.modificarVariables = function(){
    console.log($scope.configuracionVariables);
    if(parseFloat($scope.configuracionVariables.meta) <= parseFloat($scope.configuracionVariables.cantidadInicial))
    {
      console.log($scope.configuracionVariables.meta)
      sweetAlert("Oops...", "La meta no puede ser menor o igual a la cantidad inicial!", "error");
    }
    else if ($scope.configuracionVariables.meta == 0 || $scope.configuracionVariables.cantidadInicial == 0 || $scope.configuracionVariables.apuesta == 0 || $scope.configuracionVariables.n == 0)
    {
      sweetAlert("Oops...", "Ninguna variable puede ser igual a 0!", "error");
    }
    else if ($scope.configuracionVariables.tipo == "")
    {
      sweetAlert("Oops...", "Tiene que seleccionar un tipo de corrida", "error");
    }
    // Verificar si es necesario comprobar que la meta sea menor a la cantidad inicial
    else
    {
      swal("Buen trabajo!", "Se han actualizado las variables!", "success")
      $scope.cantidadInicial =parseFloat($scope.configuracionVariables.cantidadInicial);
      $scope.meta = parseFloat($scope.configuracionVariables.meta);
      $scope.apuesta = parseFloat($scope.configuracionVariables.apuesta);
      $scope.tipoCorrida = parseInt($scope.configuracionVariables.tipo);
      if($scope.tipoCorrida  == 1)
      {
          $scope.numeroCorridas = $scope.configuracionVariables.n;
      }
      else
      {
          $scope.numerosAleatorios = $scope.configuracionVariables.n;
      }
      $scope.configuracionVariables = {cantidadInicial:'', meta:'', apuesta:'', tipo:'', n:''};
    }  
  }

  $scope.iniciarSimulacion = function()
  {
    if($scope.tipoCorrida == 1)
    {
        $scope.renglon = {nc:'',cav:'',apuesta:'',naleatorio:'',segano:'',cdv:'',llegameta:''};
        var contadorCorrida = 1;
        var cav = parseFloat($scope.cantidadInicial);
        var apuesta = parseFloat($scope.apuesta);
        var aleatorio = 0;
        var gano = true;
        
        while (contadorCorrida <= $scope.numeroCorridas)
        {
          $scope.renglon = {nc:'',cav:'',apuesta:'',naleatorio:'',segano:'',cdv:'',llegameta:''};
          $scope.renglon.nc = contadorCorrida;
          $scope.renglon.cav = cav;
          $scope.renglon.apuesta = apuesta;
          var aleatorio = getRandom(0,1);
          $scope.renglon.naleatorio = aleatorio;
          if (aleatorio <= 0.5)
          {
              gano = true;
          }
          else
          {
              gano = false;
          }
          
          $scope.renglon.segano = gano:
          if (gano)
          {
          }
          else
          {
          }
          
        }
        
    }
    else
    {
    }
  }

}]);
