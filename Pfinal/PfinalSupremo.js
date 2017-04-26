angular.module('app', [])
.controller('controller', ['$scope', function($scope){
    $scope.dataS = {vlambda:'', a:'', b:'', corridas: ''}
    $scope.ejecutar = function() {
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
    var vlambda = parseFloat($scope.dataS.vlambda)	;
    console.log(vlambda)
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
        /*$scope.fila.x = i;
        $scope.fila.ufxi = fxi;
        $scope.fila.mfxi = sumF;
        $scope.tabla.push($scope.fila)*/
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
    var a = parseFloat($scope.dataS.a)
    var b = parseFloat($scope.dataS.b)
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

    var lotes = new Array(6)
    var fuera = 0;
    var entranA = 0;
    var vacio
    var ocupadosA = 0
    var x = []
    var clientesE = new Array(6)
    var clientesT = 0
    var disponiblesA = 0
    $scope.panel = []
    $scope.panelInfo = []
   function contarVacios () {
        for ( var g = 0 ; g < lotes.length ; g ++ ) {
            if (lotes[g] == null){
                vacio ++
            }
        }

        return vacio
   }
   var corridas = parseFloat($scope.dataS.corridas)
   for(ccorridas=0;ccorridas<corridas;ccorridas++){
    console.log("")
    console.log("Corrida: " + (ccorridas+1))
    console.log("")

    k=0
    while(k < minutos.length) {
        $scope.fila = {tiempo:'', clientesActualesEnLotes:'', espaciosDisponibles:'', tiempoRestanteClientesEnLotes:'', clientesLleganKminutos:'' }
        console.log("Inicio del while de la simulación")
        console.log("===============000000000000========================")
        console.log("")
        var entran = 0
        var disponible = 6 
        // Despues del minuto 0
        if ( k != 0 ) {
            console.log("Minutos transcurridos = 10")
            console.log("")
            console.log("Clientes que salen: ")
            console.log("")
            for ( var q = 0 ; q < lotes.length ; q ++) {
                if ( lotes[q] <= 10 ) {
                    console.log("Cliente " + clientesE[q]+"["+(q+1)+"]" + " del lote "+(q+1)+ " con tiempo: " + lotes[q])
                    lotes[q] = null
                }
            }
            console.log("")
            console.log("Tiempos restantes: ")
            console.log("")
            for ( var q = 0 ; q < lotes.length ; q ++){
                if(lotes[q] != null ){
                    lotes[q] = lotes[q] - 10
                    console.log("Cliente " + clientesE[q]+"["+(q+1)+"]" + " en el lote "+(q+1)+ " le restan = " + lotes[q] +" min")
                } 
             }
        }
        function cuentaLotesConClientes() {
            var contador = 0;
            for (var cont = 0 ; cont < lotes.length ; cont ++) { //Cuenta los lotes ocupados
                if (lotes[cont] != null) { // Si está ocupado cuenta 1
                    contador++
                    ocupadosA++
                }
            }
            return contador
        }
        console.log("---------------------------------------------------------------")
        console.log("Tiempo : " + minutos[k])
        $scope.fila.tiempo = minutos[k]
        console.log("Clientes en los Lotes actualmente: " + cuentaLotesConClientes())
        $scope.fila.clientesActualesEnLotes = cuentaLotesConClientes()
        console.log("Espacios disponibles: "+cuentaLotesSinClientes())
        $scope.fila.espaciosDisponibles = cuentaLotesSinClientes()
        console.log("Tiempo restante de los Clientes: " + lotes)
        $scope.fila.tiempoRestanteClientesEnLotes = lotes
        console.log("N°. clientes que llegan a los " + minutos[k] + " minutos: "  + clientes[k] )
        $scope.fila.clientesLleganKminutos = clientes[k]
        clientesU = numeroDeClientesPorLlegada(clientes[k])
        // Se llena el arreglo x[], guardando el tiempo que tarda cada cliente
        for (var i = 0 ; i < clientesU.length ; i++) {
            x[i] = Math.round(a + (b - a) * clientesU[i]) // tiempo
            console.log("Tiempo del Cliente " + clientesU[i]+"["+(i+1)+"]" +" = " + x[i] + " min")
            clientesT ++
            //clientesU[i] == null;
            }
        function verificaLotesLleno() {
            console.log("")
            console.log("Saludos desde verificaLotesLleno========????????????")
            var contador = 0;
            for (var cont = 0 ; cont < lotes.length ; cont ++) { //Cuenta los lotes ocupados
                if (lotes[cont] != null) { // Si está ocupado cuenta 1
                    contador++
                }
            }
            console.log("contador = "+contador)
            if (contador == 6){ // Si los lotes están llenos regresa true o se metieron todos siendo todos menor a 6
                console.log("Saludos desde el if con true")
                console.log("")
                return true
            } else {
                console.log("Saludos desde el if con false")
                console.log("")
                return false
            }
        }
        var i = 0
        var randd
        var lleno = false
        var nadaQueMeter = false
        console.log("")
        function verificaNadaQueMeter() {
            console.log("")
            console.log("Saludos desde verificaNadaQueMeter==================¡¡¡¡¡¡¡¡¡¡¡¡¡")
            var cuentaN = 1
            for (var lol = 0 ; lol < x.length ; lol ++ ) {
                if ( x[lol] == null ) {
                    cuentaN++
                }
            }
            console.log("cuentaN = "+cuentaN)
            console.log("x.length = "+x.length)
            if (x.length == cuentaN) { // Si es true, quiere decir que todos están vacios, osea nada que meter
                console.log("Saludos desde el if con true") 
                console.log("")           
                return true
            } else {
                console.log("Saludos desde el if con false") 
                console.log("")               
                return false
            }
        }
        // While que mete los clientes a los lotes
        var controlp = 0
        while (1) { // Mientras NO estén llenos los lotes o no haya nada que meter empieza a meter los clientes en los lotes
            //lleno = verificaLotesLleno() 
            //nadaQueMeter = verificaNadaQueMeter() 
            if (lleno == true) {
                break
            }

            if (nadaQueMeter == true) {
                break
            }
            //console.log("lleno = "+lleno)  
            //console.log("nadaQueMeter = "+nadaQueMeter)              
            if ( lotes[i] == null){ // Si el lote i está vacio entonces empieza a meter un cliente x[randd]
                randd = Math.floor((Math.random() * clientesU.length) + 0) // variable que indicará aleatoreamente que cliente meter al lote de los que llegaron a los minutos[k]                    
                if ( x[randd] == null ){ // Si se había escogido el índice de un cliente que ya había entrado, se salta el ciclo actual para empezar de nuevo y generar otro número aleatorio
                    continue
                }
                lotes[i] = x[randd] // i es la posición del lote, randd es el cliente en x
                entran ++; // cuenta que entro un cliente
                clientesE[i] = clientesU[randd]
                console.log("Entra el cliente "+clientesU[randd]+"["+(randd+1)+"]"+" en el lote "+(i+1)+" con tiempo de "+lotes[i]+" min")
                x[randd] = null // se vacía de la lista el cliente escogido para que no se repita
                }
                i++ // Siguiente lote
                lleno = verificaLotesLleno()
                nadaQueMeter = verificaNadaQueMeter()
                controlp++
                /*if(controlp == 7){
                    break
                }*/
                console.log("")    
                       
        }
        function cuentaLotesSinClientes (){
            var contador = 0;
            for (var cont = 0 ; cont < lotes.length ; cont ++) { //Cuenta los lotes ocupados
                if (lotes[cont] == null) { // Si está vacio cuenta 1
                    contador++
                    disponiblesA++
                }
            }
            return contador
        }
        //console.log("")
        console.log("x = " + x)
        console.log("lotes = " + lotes)
        console.log("")
        console.log("Entran: " + entran)
        entranA += entran
        console.log("Entran acumulado: " + entranA)
        console.log("Espacios ocupados: "  + cuentaLotesConClientes())
        console.log("Tiempo restante de los clientes en los Lotes: " + lotes)
        console.log("Quedan fuera: " + Math.abs(entran - clientesU.length))
        fuera += (Math.abs(entran - clientesU.length))
        console.log("Quedan fuera acumulado: "+ fuera)
        console.log("")
        console.log("---------------------------------------------------------------")
        k++
        $scope.panel.push($scope.fila)
        
    }
    }
    $scope.filaInfo = {clientesTotalesL:'', clientesTotalesE:'', clientesTotalesNE:'', espaciosDisponiblesT:'', espaciosOcupadosT:'', pClientesP:'', pEspaciosD:'', pEncontrarLugarD:'' }
    console.log("Clientes totales que llegaron: "+clientesT)
    $scope.filaInfo.clientesTotalesL = clientesT
    console.log("Clientes totales que entraron: "+entranA)
    $scope.filaInfo.clientesTotalesE = entranA
    console.log("Clientes totales que no entraron: "+fuera)
    $scope.filaInfo.clientesTotalesNE = fuera
    console.log("Espacios disponibles totales: "+disponiblesA)
    $scope.filaInfo.espaciosDisponiblesT = disponiblesA
    console.log("Espacios ocupados totales: "+ocupadosA)
    $scope.filaInfo.espaciosOcupadosT = ocupadosA
    console.log("Porcentaje de clientes perdidos: " +(fuera/clientesT))
    $scope.filaInfo.pClientesP = (fuera/clientesT)
    console.log("Porcentaje promedio de espacios disponibles: "+(disponiblesA/ocupadosA))
    $scope.filaInfo.pEspaciosD = (disponiblesA/ocupadosA)
    console.log("Probabilidad de encontrar un lugar disponible en el estacionamiento "+(1/6))
    $scope.filaInfo.pEncontrarLugarD = (1/6)
    $scope.panel.push($scope.filaInfo)
    }
}]);


