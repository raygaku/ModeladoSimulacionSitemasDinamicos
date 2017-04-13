/**
* app Module
*
* Description
*/
angular.module('app', [])
.controller('controller', ['$scope', function($scope){

	//Funcion que genera numeros aleatorios
	function getRandom(min,max){
    return parseFloat((Math.random() * (max - min) + min).toFixed(5));
  }

  //Aquí se guardan los números aleatorios uniformes generados
  numerosRectangulares = [];
  for(var j = 1; j <= 6; j++)
    {
      var rectangular = getRandom(1,0);
      numerosRectangulares.push(rectangular);
    }
    console.log("Numeros Aleatorios Uniformes Generados:");
    console.log(numerosRectangulares);
    // Función que saca el factorial de un número
	var factorial = function(n)
	{
		if (n == 0){
			return 1;
		}

		return n * factorial(n-1);
	}

	/*var numeros1 = [0.57260, 0.99382, 0.47744, 0.48893, 0.16993, 0.15021, 0.33295, 0.37509, 0.82162, 0.67946]
	var numeros2 = [0.63267, 0.47641, 0.41576, 0.48257, 0.51080, 0.28316, 0.14736, 0.07586, 0.66559, 0.45476, 0.22596, 0.93413, 0.20405, 0.84617,
	0.14014];
	var numeros3 = [0.82157, 0.75363, 0.09070, 0.04146, 0.30552, 0.35247, 0.11724, 0.13141, 0.63742, 0.11598, 0.00023, 0.00867, 0.74284, 0.34243,
	0.93029, 0.94653, 0.42402, 0.07405, 0.53845, 0.94747]
	var numeros4 = [0.71857, 0.42784, 0.04921, 0.45197, 0.15191, 0.01291, 0.38384, 0.66164, 0.54155, 0.72848, 0.19325,
	0.14413, 0.39663, 0.02181, 0.88448, 0.10622, 0.86225, 0.49767, 0.50816, 0.43852, 0.25163, 0.65251, 0.36815, 0.64397, 0.04515]
	var numeros5 = [0.18619, 0.74627, 0.32392, 0.78464, 0.62095, 0.12302, 0.76378, 0.05041, 0.46978, 0.47665, 0.35075, 0.56623, 0.36409, 0.57620,
	0.07399, 0.68980, 0.14454, 0.07481, 0.27499, 0.45902, 0.68971, 0.18477, 0.14707, 0.83745, 0.16930, 0.20368, 0.41196, 0.66919, 0.35352, 0.79982];
	var numeros6 = [0.19121, 0.78508, 0.20380, 0.10268, 0.37220, 0.15957, 0.26340,  0.73701, 0.25332, 0.18782,
	0.41349, 0.74761, 0.49431, 0.83436, 0.11834, 0.81549, 0.70951, 0.77544, 0.68161, 0.03584,
	0.48391, 0.31704, 0.04037, 0.97616, 0.59693, 0.01889, 0.07629, 0.43625, 0.11692, 0.25624,
	0.60873, 0.06345, 0.92246, 0.00008, 0.55306]
	var numeros7 = [0.16894, 0.59580, 0.46215, 0.06831, 0.35905, 0.06494, 0.61773, 0.12202, 0.20717, 0.47619,
	0.67312, 0.01119, 0.99005, 0.81759, 0.85558, 0.25983, 0.96318, 0.56736, 0.31900 ,0.90561,
	0.64345,0.31855, 0.34513, 0.99893, 0.55866, 0.63267, 0.47641, 0.41575, 0.48257, 0.51080, 0.28316, 0.14736,
	0.07586, 0.66559, 0.45476, 0.22596, 0.93413, 0.20405, 0.84617, 0.14014]
	var numeros8 = [0.25593,0.44276,0.22820,0.17200,0.88627,0.55087,0.16822,0.45547,0.90286,0.21031,0.13674,0.73707,0.19763,0.22501,0.36787,0.80783,0.41605,0.49807,0.35482,0.64382,
	0.33949,0.34442,0.83232,0.52606,0.37408,0.05339, 0.04504,0.83828,0.98748,0.91386,0.11403,0.65622,0.93997,0.22567,0.33361,0.07126,0.37480,0.31678,0.54131,0.68416,
	0.15470,0.20094,0.73788,0.60530,0.44372];
	var numeros9 = [0.03991,0.38555,0.17546,0.32643,0.69572,0.24122,0.61196,0.30532,0.03788,0.48228,0.88618,0.71299,0.27954,0.80862,0.33564,0.90899,0.78038,0.55986,0.87539,0.16818,
	0.34677,0.45305,0.59747,0.16520,0.68652,0.79375,0.33521,0.59589,0.20554,0.59404,0.42614,0.34994,0.99385,0.66497,0.48509,0.15470,0.20094,0.73788,0.60530,0.44372,
	0.29297,0.41374,0.41600,0.68646,0.23929,0.48355,0.98977,0.06533,0.45128,0.15486];
	var numeros10 = [0.93716,0.32886,0.92052,0.95819,0.39510,0.27699,0.92962,0.10274,0.75867,0.85783,0.41290,0.05870,0.82444,0.20247,0.48460,0.60833,0.43529,0.88722,0.94813,0.74457,
	0.74910,0.61318,0.76503,0.11654,0.92852,0.01159,0.55823,0.66821,0.96277,0.43947,0.01918,0.70071,0.11133,0.78138,0.27482,0.88651,0.74843,0.28597,0.74022,0.65741,0.16894, 0.59580, 0.46215, 0.06831, 0.35905, 0.06494, 
	0.61773, 0.12202, 0.20717, 0.47619, 0.67312, 0.01119, 0.99005, 0.81759, 0.85558];
	var ejemplo = [0.89504, 0.98957, 0.99871, 0.99952, 0.99997];
	*/
	//var l = ejemplo;


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
    console.log("Rangos:")
    console.log($scope.rangos);

    console.log($scope.rangos.length)

    // Clasifica ĺos números aleatorios uniformes previamente generados en los rangos de poisson
    minutos = [0, 10, 20, 30, 40, 50];
    clientes = []
    for (var b = 0 ; b < 6 ; b ++) {


    	for (var l = 0 ; l < $scope.rangos.length ; l++) {
    		
    		
    		if (numerosRectangulares[b] > $scope.rangos[l]  && numerosRectangulares[b] < $scope.rangos[l+1]  ) {
    			console.log("Iteración: " + l)
    			console.log("Numero de clientes que llegan a los: " + minutos[b] + " minutos")
    			console.log("Valor del numero uniforme : " + numerosRectangulares[b])
    			console.log("Rango menor: " + $scope.rangos[l])
    			console.log("Rango mayor: " + $scope.rangos[l+1])
    			console.log("Valor de la variable aleatoria en poisson: " + l)
    			clientes[b] = l;
    			console.log("Clientes que llegaron: " + clientes[b])
    			console.log("")
    			break;
    	}

    		console.log("")

 
    	}
    	console.log("Lista de los numeros de clientes que llegaron a lo largo de: " + minutos[b] + " minutos")
    	console.log(clientes)
    }

    // Distribución uniforme
    var k = 0;
    var lotes = 0;
    var a = 10 
    var b = 30

    while(k <= minutos.length) {
    	//x = a + (b - a)R
    	break;
    }




}]);


