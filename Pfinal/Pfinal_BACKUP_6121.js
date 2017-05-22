angular.module('app', [])
.controller('controller', ['$scope', function($scope){
    $scope.dataS = {vlambda:10, a:10, b:30, corridas:1}
    $scope.ejecutar = function() {
	// Funcion que genera numeros aleatorios
    function getRandom(min,max){
    return parseFloat((Math.random() * (max - min) + min).toFixed(5));
  }

  // Aquí se guardan los números aleatorios uniformes generados
  numerosRectangulares = [];
  for(var j = 1; j <= (6*$scope.dataS.corridas); j++)
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
    //console.log(vlambda)
    var sumF = 0.0;
    $scope.tabla = [];
    $scope.rangos = [0]; // Rangos de poisson
    var fxi = 0;
    var i = 0;

    // Genera e imprime los rangos de Poisson para una media lambda
    while(1)
    {
    	$scope.objeto = {x: '', ufxi : '' , mfxi: ''};

        fxi = ( Math.pow(2.718281829, -1*vlambda) * Math.pow(vlambda, i) ) / factorial(i) ;
        sumF += fxi;
        $scope.rangos.push(sumF);
        i++;
        if (sumF > 0.99995){
        	break;
        } 
    }
    $scope.rangos.push(1)
    console.log("Rangos (determinan cuantos clientes llegan usando los numeros uniformes): " + ($scope.rangos.length-1) + " (número máximo de clientes que pueden llegar cada 10 min)")
    console.log($scope.rangos);
    var qwert = 0
    // Clasifica ĺos números aleatorios uniformes previamente generados en los rangos de poisson
    minutos = [0, 10, 20, 30, 40, 50];
    clientes = []
    for (var b = 0 ; b < (6*$scope.dataS.corridas) ; b ++) {
        if (qwert > 5) qwert = 0
    	for (var l = 0 ; l < $scope.rangos.length ; l++) {   		
    		if (numerosRectangulares[b] > $scope.rangos[l]  && numerosRectangulares[b] < $scope.rangos[l+1]  ) {
    			console.log("Iteración: " + l)
    			console.log("Numero de clientes que llegan a los " + minutos[qwert] + " minutos")
    			console.log("Valor del numero uniforme : " + numerosRectangulares[b])
    			console.log("Rango menor: " + $scope.rangos[l])
    			console.log("Rango mayor: " + $scope.rangos[l+1])
    			console.log("Valor de la variable aleatoria en poisson: " + l)
    			clientes[b] = l;
    			console.log("Clientes que llegaron: " + clientes[b])
    			console.log("")
                qwert++
    			break;
    	}
    		//console.log("")

    	}
    	//console.log("Lista de los numeros de clientes que llegaron a lo largo de " + minutos[b] + " minutos: ")
    	//console.log(clientes)
        //console.log("")
        
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
          //console.log("");
          //console.log("Numeros Aleatorios Uniformes Generados para el tiempo de los Clientes:");
          //console.log(numerosRectangulares);
          //console.log("");

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
    $scope.objetos = []
    $scope.objetosInfo = []
   function contarVacios () {
        for ( var g = 0 ; g < lotes.length ; g ++ ) {
            if (lotes[g] == null){
                vacio ++
            }
        }

        return vacio
   }
   var probabilidadEncontrarUnLugarDisponiblePromedio
   var probabilidadEncontrarUnLugarDisponible = 0
   var promedioControl = 0
   var ppromedioA = 0
   var kko=0;
   var corridas = parseFloat($scope.dataS.corridas)
   for(ccorridas=0;ccorridas<corridas;ccorridas++){
    console.log("")
    console.log("Corrida: " + (ccorridas+1))
    console.log("")
    var tiempoRestanteClientesEnLotes = []
    k=0
    //var cicloC = 0
    
    while(k < minutos.length) {
        
        $scope.objeto = {
            tiempo:'', 
            clientesActualesEnLotes:'', 
            espaciosDisponibles:'', 
            tiempoRestanteClientesEnLotes: [], 
            clientesLleganKminutos:'', 
            hora:'',
            clientesSalen: [],
            clientesLlegan: [],
            clientesEntran: [],
            pEspaciosDisponibles: ''
        }




        $scope.objeto.hora = ccorridas
        console.log("Inicio del while de la simulación")
        console.log("===============000000000000========================")
        console.log("")
        var entran = 0
        var disponible = 6 
        // Despues del minuto 0

        if ( kko != 0 ) {
            console.log("Minutos transcurridos = 10")
            console.log("")
            console.log("Clientes que salen: ")
            console.log("")
            for ( var q = 0 ; q < lotes.length ; q ++) {
                if ( lotes[q] <= 10 ) {
                    $scope.elemento = {cliente:'', lote:'', tiempo:''}
                    console.log("Cliente " + clientesE[q]+"["+(q+1)+"]" + " del lote "+(q+1)+ " con tiempo: " + lotes[q])
                    $scope.elemento.cliente = clientesE[q]
                    $scope.elemento.lote = (q+1)
                    $scope.elemento.tiempo = lotes[q]
                    $scope.objeto.clientesSalen.push($scope.elemento)
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
        /*if(cicloC == 0)*/
        //$scope.objeto.tiempoRestanteClientesEnLotes = lotes
        //cicloC = 1
        //$scope.objetos.push($scope.objeto)
        console.log("---------------------------------------------------------------")
        console.log("Tiempo : " + minutos[k])
        $scope.objeto.tiempo = minutos[k]
        var lotesSinClientes
        var lotesConClientes
        lotesSinClientes = cuentaLotesSinClientes()

        console.log("Clientes en los Lotes actualmente: " + cuentaLotesConClientes())
        $scope.objeto.clientesActualesEnLotes = cuentaLotesConClientes()
        console.log("Espacios disponibles: "+cuentaLotesSinClientes())
        $scope.objeto.espaciosDisponibles = cuentaLotesSinClientes()
        //console.log("Console log de Tiempo restante clientes en lotes Antes de asignar: "+$scope.objetos[k].tiempoRestanteClientesEnLotes)
        //console.log("Antes de asignar lotes: "+$scope.objeto.tiempoRestanteClientesEnLotes)
        //console.log("lotes = "+lotes)
        
        
        //console.log("Despues de asignar lotes: "+$scope.objeto.tiempoRestanteClientesEnLotes)
        //console.log("scope.objetos: "+$scope.objetos[k].tiempoRestanteClientesEnLotes)
        //console.log("Console log de Tiempo restante clientes en lotes Despues de asignar: "+$scope.objetos[k].tiempoRestanteClientesEnLotes)
        console.log("lotes = " + lotes)
        console.log("lotes.lenght = "+ lotes.length)
        console.log("Tiempo restante de los Clientes: " + lotes)
        console.log("hola desde antes del for")
        console.log("lotes.lenght = "+lotes.length)
        for(var i = 0; i < lotes.length ; i++ ) {
            if(lotes[i] != null){
                //console.log("hola desde adentro del for")
                $scope.elemento = {lote:'', min:''}
                $scope.elemento.lote = (i+1)
                //console.log("elemento.lote = "+$scope.elemento.lote)
                $scope.elemento.min = lotes[i]
                //console.log("elemento.min = "+$scope.elemento.min)
                $scope.objeto.tiempoRestanteClientesEnLotes.push($scope.elemento)
            }
        }
        console.log("hola desde despues del for")
        console.log("scopeobjetotiempores = "+$scope.objeto.tiempoRestanteClientesEnLotes)
        
        console.log("N°. clientes que llegan a los " + minutos[k] + " minutos: "  + clientes[k] )
        $scope.objeto.clientesLleganKminutos = clientes[k]
        clientesU = numeroDeClientesPorLlegada(clientes[k])
        // Se llena el arreglo x[], guardando el tiempo que tarda cada cliente
        x = []
        for (var i = 0 ; i < clientesU.length ; i++) {
            $scope.elemento = {cliente:'', num:'', tiempo:''}
            x[i] = Math.round(a + (b - a) * clientesU[i]) // tiempo
            $scope.elemento.cliente = clientesU[i]
            $scope.elemento.num = (i+1)
            $scope.elemento.tiempo = x[i]
            $scope.objeto.clientesLlegan.push($scope.elemento)
            console.log("Tiempo del Cliente " + clientesU[i]+"["+(i+1)+"]" +" = " + x[i] + " min")
            clientesT ++
            }
        //console.log("Hola despues del primer for "+$scope.objetos[k].tiempoRestanteClientesEnLotes)
        function verificaLotesLleno() {
            console.log("")
            //console.log("Saludos desde verificaLotesLleno========????????????????????")
            var contador = 0;
            for (var cont = 0 ; cont < lotes.length ; cont ++) {
             //Cuenta los lotes ocupados
                if (lotes[cont] != null) { // Si está ocupado cuenta 1
                    contador++
                }
                //console.log("lotes[cont] = "+lotes[cont])
            }
            //console.log("Hola despues del segundo for: "+$scope.objetos[k].tiempoRestanteClientesEnLotes)
            //console.log("contador = "+contador)
            if (contador == 6){ // Si los lotes están llenos regresa true o se metieron todos siendo todos menor a 6
                //console.log("Regreso true porque los LOTES estan LLENOS")
                //console.log("")
                return true
            } else {
                //console.log("Regreso false porque los LOTES NO estan llenos")
                //console.log("")
                return false
            }
        }
        var i = 0
        var randd
        var lleno = false
        var nadaQueMeter = false
        console.log("")
        function verificaNadaQueMeter() {
            var cuentaN = 0
            for (var lol = 0 ; lol < x.length ; lol ++ ) {
                if ( x[lol] == null ) { //Si esta vacio, es porque existen cosas por meter
                    cuentaN++
                }
            }
            if (x.length == cuentaN) { // Si es true, quiere decir que todos están vacios, osea nada que meter
                return true
            } else {
                console.log("")               
                return false
            }
        }
        //console.log("hola antes del while: "+$scope.objetos[k].tiempoRestanteClientesEnLotes)
        // While que mete los clientes a los lotes
        var controlp = 0
        while (1) { // Mientras NO estén llenos los lotes o no haya nada que meter empieza a meter los clientes en los lotes
            lleno = verificaLotesLleno()
            nadaQueMeter = verificaNadaQueMeter()
        
            if (lleno == true) {
                break
            }

            if (nadaQueMeter == true) {
                break
            } 
            if ( lotes[i] == null){ // Si el lote i está vacio entonces empieza a meter un cliente x[randd]
                randd = Math.floor((Math.random() * x.length) + 0) // variable que indicará aleatoreamente que cliente meter al lote de los que llegaron a los minutos[k]
                if ( x[randd] == null){ // Si se había escogido el índice de un cliente que ya había entrado, se salta el ciclo actual para empezar de nuevo y generar otro número aleatorio
                    continue
                }
            lotes[i] = x[randd] // i es la posición del lote, randd es el cliente en x
            entran ++; // cuenta que entro un cliente
            clientesE[i] = clientesU[randd]
            //console.log("clientesU: "+clientesU+" ["+clientesU.length+"]")
            //console.log("x: "+x+" ["+x.length+"]")
            $scope.elemento = {cliente:'', num:'', lote:'', tiempo:''}
            $scope.elemento.cliente = clientesU[randd]
            $scope.elemento.num = (randd+1)
            $scope.elemento.lote = (i+1)
            $scope.elemento.tiempo = lotes[i]
            $scope.objeto.clientesEntran.push($scope.elemento)
            console.log("Entra el cliente "+clientesU[randd]+"["+(randd+1)+"]"+" en el lote "+(i+1)+" con tiempo de "+lotes[i]+" min")
            x[randd] = null // se vacía de la lista el cliente escogido para que no se repita
            }
            i++ // Siguiente lote
            
            if (nadaQueMeter == true) {
                break
            }
            //console.log("")    
                       
        }
        //console.log("hola despues del while: "+$scope.objetos[k].tiempoRestanteClientesEnLotes)
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
        //console.log("Console log de Tiempo restante clientes en lotes Antes de hacer push: "+$scope.objeto.tiempoRestanteClientesEnLotes)
        //if (k > 0) console.log("console log de tiempo restante clientes en lotes del tiempo anterior: "+$scope.objetos[k-1].tiempoRestanteClientesEnLotes)
        ppromedio = Math.round((lotesSinClientes/6)*100)
        console.log("ppromedio = " + ppromedio)
        ppromedioA += ppromedio
        $scope.objeto.pEspaciosDisponibles = ppromedio
        $scope.objetos.push($scope.objeto) //En realidad, agrega un objeto al arreglo $scope.objetos
        //console.log("Console log de Tiempo restante clientes en lotes Despues de hacer push: "+$scope.objetos[k].tiempoRestanteClientesEnLotes)
        //if (k > 0) console.log("console log de tiempo restante clientes en lotes del tiempo anterior: "+$scope.objetos[k-1].tiempoRestanteClientesEnLotes)
        console.log("x = " + x)
        console.log("lotes = " + lotes)
        console.log("")
        console.log("Entran: " + entran)
        if (ccorridas == 0 && k == 0) {
            if (entran == 0) {
                probabilidadEncontrarUnLugarDisponible = 1
            } else {
            probabilidadEncontrarUnLugarDisponible += entran / entran
            }
        } else {
            probabilidadEncontrarUnLugarDisponible += entran / 6
        }
        
        entranA += entran
        console.log("Entran acumulado: " + entranA)
        lotesConClientes = cuentaLotesConClientes()
        //if (lotesConClientes == 0) lotesConClientes = 1
        console.log("Espacios ocupados: "  + cuentaLotesConClientes())
        console.log("Tiempo restante de los clientes en los Lotes: " + lotes)
        console.log("Quedan fuera: " + Math.abs(entran - clientesU.length))
        fuera += (Math.abs(entran - clientesU.length))
        console.log("Quedan fuera acumulado: "+ fuera)
        console.log("")
        console.log("---------------------------------------------------------------")
        k++
        kko = 1
        promedioControl ++
        //cicloC ++
        //break
        //cicloC = 1
        
        console.log("lotesSinClientes: " + lotesSinClientes)
        console.log("lotesConClientes: " + lotesConClientes)
        //console.log("ppromedio: " + $scope.objeto.pEspaciosDisponibles)

        
        
    }
    }
    var entranPromedio
    $scope.objetoInfo = {clientesTotalesL:'', clientesTotalesE:'', clientesTotalesNE:'', espaciosDisponiblesT:'', espaciosOcupadosT:'', pClientesP:'', pEspaciosD:'', pEncontrarLugarD:'', promedioEncontrarDisponible: '', pEncontrarLugarDreal:'' }
    console.log("clientes totales que entraron: "+entranA)
    entranPromedio = entranA / $scope.dataS.corridas
    console.log("entranPromedio: "+entranPromedio)
    //$scope.objetoInfo.pEncontrarLugarDreal = Math.round((1 - ($scope.dataS.vlambda / entranPromedio))*100)
    $scope.objetoInfo.pEncontrarLugarDreal = Math.round((1 - ($scope.dataS.vlambda / entranPromedio))*100) // La clave está por aqui!!
    console.log("probabilidad real de encontrar un lugar disponible en el estacionamiento: "+$scope.objetoInfo.pEncontrarLugarDreal)
    console.log("probabilidad encontrar lugar disponible2: "+probabilidadEncontrarUnLugarDisponible)
    console.log("corridas: "+corridas)
    probabilidadEncontrarUnLugarDisponiblePromedio = 1 -(probabilidadEncontrarUnLugarDisponible / (6*corridas))
    $scope.objetoInfo.promedioEncontrarDisponible = probabilidadEncontrarUnLugarDisponiblePromedio
    console.log("probabilidad de encontrar un lugar disponible: "+probabilidadEncontrarUnLugarDisponiblePromedio)
    console.log("Clientes totales que llegaron: "+clientesT)
    $scope.objetoInfo.clientesTotalesL = clientesT
    console.log("Clientes totales que entraron: "+entranA)
    $scope.objetoInfo.clientesTotalesE = entranA
    console.log("Clientes totales que no entraron: "+fuera)
    $scope.objetoInfo.clientesTotalesNE = fuera
    console.log("Espacios disponibles totales: "+disponiblesA)
    $scope.objetoInfo.espaciosDisponiblesT = disponiblesA
    console.log("Espacios ocupados totales: "+ocupadosA)
    $scope.objetoInfo.espaciosOcupadosT = ocupadosA
    console.log("Porcentaje de clientes perdidos: " +((fuera/clientesT)*100))
    $scope.objetoInfo.pClientesP = ((fuera/clientesT)*100)
    $scope.objetoInfo.pClientesP = (Math.round((fuera/clientesT)*100) )
    console.log("Porcentaje promedio de espacios disponibles: "+((disponiblesA/ocupadosA)*100))
    $scope.objetoInfo.pEspaciosD = ((disponiblesA/ocupadosA)*100)
    $scope.objetoInfo.pEspaciosD =  (Math.round((disponiblesA/ocupadosA)*100) )
    ppromedioR = Math.round(ppromedioA / promedioControl)
    console.log("ppromedioR: " + ppromedioR)
    console.log("ppromedioA: " + ppromedioA)
    console.log("promedioControl: "+ promedioControl)
    $scope.objetoInfo.pEspaciosD =  ppromedioR
    console.log("Probabilidad de encontrar un lugar disponible en el estacionamiento "+((1/6)*100))
    $scope.objetoInfo.pEncontrarLugarD = ((1/6)*100)
    $scope.objetoInfo.pEncontrarLugarD = (Math.round((1/6)*100) )
    $scope.objetos.push($scope.objetoInfo)
    console.log($scope.objetos)
<<<<<<< HEAD
    console.log($scope.objetos[k])
    
=======
    //console.log($scope.objetos[k])
>>>>>>> 08e0634bf921084f314e6c62dc6457aed1149fda

         $scope.verResultados = true;
        var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {

        labels: ["Porcentaje de clientes perdidos", "Porcentaje promedio de espacios disponibles", "Probabilidad de encontrar un lugar disponible"],

        datasets: [{
            label: '% de probabilidad',
            data: [ $scope.objetoInfo.pClientesP, $scope.objetoInfo.pEspaciosD, $scope.objetoInfo.pEncontrarLugarD],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)'
                
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 0.2)'
               
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
    }
}]);


