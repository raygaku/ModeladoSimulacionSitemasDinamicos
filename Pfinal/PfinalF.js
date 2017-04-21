/**
* app Module
*
* Description
*/
angular.module('app', [])
.controller('controller', ['$scope', function($scope){

	// Funcion que genera numeros aleatorios
    function getRandom(min,max){
    return parseFloat((Math.random() * (max - min) + min).toFixed(5));
  }

  // Aquí se guardan los números aleatorios uniformes generados
  numerosRectangulares = [];
  for(var j = 1; j <= 6; j++)
    {
      var rectangular = getRandom(1,0);
      numerosRectangulares.push(rectangular);
    }
    console.log("Números Aleatorios Uniformes Generados para el transcurso de la hora (cada uno representa cuántos clientes llegarán de los 0 a 50 min respectivamente):");
    console.log(numerosRectangulares);
    // Función que saca el factorial de un número
	var factorial = function(n)
	{
		if (n == 0){
			return 1;
		}

		return n * factorial(n-1);
	}


    var vlambda = 10	;
    var sumF = 0.0;
    $scope.tabla = [];
    $scope.rangos = []; // Rangos de poisson

    var fxi = 0;
    var i = 0;

    // Genera e imprime los rangos de Poisson para una media lambda
    while(1)
    {
    	$scope.fila = {x: '', ufxi : '' , mfxi: ''};

        fxi = ( Math.pow(2.718281829, -1*vlambda) * Math.pow(vlambda, i) ) / factorial(i) ;
        sumF += fxi;
        $scope.rangos.push(sumF);
        $scope.fila.x = i;
        $scope.fila.ufxi = fxi;
        $scope.fila.mfxi = sumF;
       /*
        console.log("x = ", i);
        console.log("fxi = ", fxi);
        console.log("Fxi = ", sumF );
        */
        //console.log($scope.fila)
        $scope.tabla.push($scope.fila)
        i++;
        if (sumF > 0.99995){
        	break;
        } 
    }
    console.log("Rangos (determinan cuantos clientes llegan usando los numeros uniformes): " + ($scope.rangos.length-1) + " (número máximo de clientes que pueden llegar cada 10 min)")
    console.log($scope.rangos);


    // Clasifica ĺos números aleatorios uniformes previamente generados en los rangos de poisson
    minutos = [0, 10, 20, 30, 40, 50];
    clientes = []
    for (var b = 0 ; b < 6 ; b ++) {


    	for (var l = 0 ; l < $scope.rangos.length ; l++) {
    		
    		
    		if (numerosRectangulares[b] > $scope.rangos[l]  && numerosRectangulares[b] < $scope.rangos[l+1]  ) {
    			//console.log("Iteración: " + l)
    			console.log("Numero de clientes que llegan a los " + minutos[b] + " minutos")
    			console.log("Valor del numero uniforme : " + numerosRectangulares[b])
    			//console.log("Rango menor: " + $scope.rangos[l])
    			//console.log("Rango mayor: " + $scope.rangos[l+1])
    			console.log("Valor de la variable aleatoria en poisson: " + l)
    			clientes[b] = l;
    			console.log("Clientes que llegaron: " + clientes[b])
    			console.log("")
    			break;
    	}

    		console.log("")

 
    	}
    	console.log("Lista de los numeros de clientes que llegaron a lo largo de " + minutos[b] + " minutos: ")
    	console.log(clientes)
        console.log("")

    }

    // Distribución uniforme
    console.log("=======================================================")
    var k = 0; // variable control que representa los minutos y a la cantidad de clientes que llegaron
    var a = 10 
    var b = 30
    var n


    function numeroDeClientesPorLlegada(p) {
        numerosRectangulares = [];
        for(var j = 1; j <= p; j++)
          {
            var rectangular = getRandom(1,0);
            numerosRectangulares.push(rectangular);
          }
          console.log("");
          console.log("Numeros Aleatorios Uniformes Generados para el tiempo de los Clientes:");
          console.log(numerosRectangulares);
          console.log("");

        return numerosRectangulares;
        }

    var lotes = []
    //console.log("Lotes: " + lotes.length)

  /*  function simuladorTiempoEsperaCliente() {

        clientesU = numeroDeClientesPorLlegada(clientes[k])
        for (var i = 0 ; i < 6 ; i++) {

                x = Math.round(a + (b - a) * clientesU[i]) // tiempo
                console.log("Tiempo del Cliente: " + (i+1) + " = " + x + " min")

                
                lotes[i] = x // guarda el tiempo


            }

            return lotes


    }*/
    var fuera = 0;
   var vacio
   function contarVacios () {
        for ( var g = 0 ; g < lotes.length ; g ++ ) {
            if (lotes[g] == null){
                vacio ++
            }
        }

        return vacio
   }
    
    while(k < minutos.length) {
        var entran = 0
   var disponible = 6 
    
        //if (k == 0) {

            
            if ( k != 0 ) {
                console.log("Minutos transcurridos = 10")
                console.log("")
                for ( var q = 0 ; q < lotes.length ; q ++) {
                    //console.log("Tiempo del Cliente " + (q+1) +" = " + lotes[q])
                    if ( lotes[q] <= 10 ) {
                        console.log("Sale el Cliente " + (q+1) + " con tiempo: " + lotes[q])
                        console.log("Lotes Antes del slice: " + lotes)
                        lotes[q] = null
                        console.log("lotes[q] = " + lotes[q])

                        /*if ( lotes[q-1] <= 10) {
                        console.log("Sale el Cliente " + (q+1) + " con tiempo: " + lotes[q])
                        console.log("Lotes Antes del slice: " + lotes)
                            lotes.splice((q), 1)
                            

                        }*/
                        console.log("Lotes Despues del slice: " + lotes)

                    }
                    
                
                    console.log("")

                }

                for ( var q = 0 ; q < lotes.length ; q ++){

                if(lotes[q] != null ){
                    lotes[q] = lotes[q] - 10
                    console.log("Tiempo del Cliente " + (q+1) + " actual = " + lotes[q])
                     console.log("")
                    } 

                    }

                     console.log("")

            }
            console.log("---------------------------------------------------------------")
            console.log("Tiempo : " + minutos[k])
        
            console.log("Clientes en los Lotes actualmente: " + "Por arreglar")
            console.log("Tiempo restante de los Clientes: " + lotes)
           // if (lotes.length != 6 && lotes.length < 6){  // Si no está lleno

            console.log("N°. clientes que llegan a los " + minutos[k] + " minutos: "  + clientes[k] )
            clientesU = numeroDeClientesPorLlegada(clientes[k])
            for (var i = 0 ; i < clientesU.length ; i++) {

                    x = Math.round(a + (b - a) * clientesU[i]) // tiempo
                    console.log("Tiempo del Cliente: " + (i+1) + " = " + x + " min")

                    if (i < 6 && /*lotes.length != 6 && lotes.length < 6 &&*/ lotes[i] == null){
                    lotes[i] = x // guardX  guardXa el tiempo
                    entran ++;
                    /*if (entran < 6){
                        disponible = entran
                    } else{
                    disponible --;
                    }*/
                    }


                }
                console.log("")
                
                    console.log("Entran: " + entran)
                console.log("Espacios ocupados: "  + Math.abs(lotes.length ))
                    console.log("Tiempo restante de los clientes en los Lotes: " + lotes)
                    console.log("Quedan fuera: " + Math.abs(entran - clientesU.length))
                    fuera += (Math.abs(entran - clientesU.length))




            /*for (var i = 0 ; i < 1 ; i ++) {

                for (var j = 0 ; j < clientesU.length ; j ++) {



                }*/
            //}
                console.log("")
                console.log("---------------------------------------------------------------")


    
        //    }
        /*else {
                console.log("---------------------------------------------------------------")
                console.log("N°. clientes a los " + minutos[k] + " minutos: "  + clientes[k])
                clientesU = numeroDeClientesPorLlegada(clientes[k])
            for (var i = 0 ; i < clientesU.length ; i++) {
    
                    x =  Math.round(a + (b - a) * clientesU[i])
                    console.log("Tiempo del Cliente: " + (i+1) + " = " + x + " min")

                }
                console.log("")




        }*/
        k++


    	
    }

    console.log(fuera)


}]);


