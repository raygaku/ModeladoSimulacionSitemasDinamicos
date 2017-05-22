angular.module('app',[]).controller('main',['$scope', function($scope){

/*
      Object.defineProperty(Array.prototype, 'chunk_inefficient', {
          value: function(chunkSize) {
              var array=this;
              return [].concat.apply([],
                  array.map(function(elem,i) {
                      return i%chunkSize ? [] : [array.slice(i,i+chunkSize)];
                  })
              );
          }
      });

      Object.defineProperty(Array.prototype, 'chunk', {
    value: function(chunkSize) {
        var R = [];
        for (var i=0; i<this.length; i+=chunkSize)
            R.push(this.slice(i,i+chunkSize));
        return R;
    }
});


      Array.range = function(n) {
  // Array.range(5) --> [0,1,2,3,4]
  return Array.apply(null,Array(n)).map((x,i) => i)
};

Object.defineProperty(Array.prototype, 'chunkK', {
  value: function(n) {

    // ACTUAL CODE FOR CHUNKING ARRAY:
    return Array.range(Math.ceil(this.length/n)).map((x,i) => this.slice(i*n,i*n+n));

  }
});

*/


      $scope.habilitarResultado = false;
      $scope.habilitarCaptura = false;
      $scope.uenter = {x20:''};
      $scope.dataS = {numeros:'', alfa:'', n:''};
      
      function getRandom(min,max){
        return parseFloat((Math.random() * (max - min) + min).toFixed(5));
      }
      $scope.ejecutar = function()
      {
      var ch = $scope.dataS.n
      $scope.habilitarCaptura = true;
      var n = $scope.dataS.n;
      var lista  = [];

    

      for(var i = 0; i < $scope.dataS.numeros; i++)
      {
        lista.push(getRandom(0,1));
      }

      console.log("n: "+n)
      console.log("ch: "+ch)

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

            //console.log("ARREGLO a : "+a)

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

// ====================CAMPO DE PRUEBAS ======================================
/*
function chunk (arr, len) {

  var chunks = [],
      i = 0,
      n = arr.length;

  while (i < n) {
    chunks.push(arr.slice(i, i += len));
  }

  return chunks;
}

console.log("chunks: "+chunk(feo, 2))
*/
// --------------------------------------------------------------------------
/*
var feoAL = []
var feoA 

feoA = feo.slice(0,n)

feoAL.push(feoA)

feoA = feo.slice(0, n)

feoAL.push(feoA)


console.log("feoA: ", feoAL)
*/
// --------------------------------------------------------------------------
/*
Object.defineProperty(Array.prototype, 'chunk', {
    value: function(chunkSize) {
        var R = [];
        for (var i=0; i<this.length; i+=chunkSize)
            R.push(this.slice(i,i+chunkSize));
        return R;
    }
});

feoA = feo.chunk(n)
console.log("feoA: ",feoA)
*/
// ---------------------------------------------------------------------------


/*
feoA = feo.chunk_inefficient(ch)
console.log("feoA.chunk_inefficient: ",feoA)


feoA = feo.chunk(ch)
console.log("feoA.chunk: ",feoA)


feoA = feo.chunkk(ch)
console.log("feoA.chunkk: ",feoA)
*/

// -----------------------------------------------------------------------
/*
Array.prototype.chunk = function ( n ) {
    if ( !this.length ) {
        return [];
    }
    return [ this.slice( 0, n ) ].concat( this.slice(n).chunk(n) );
};

console.log("ch: "+ch)
console.log("feo slice: ",feo.chunk(ch))
console.log("ch: "+ch)

*/
// ------------------------------------------------------------------------
/*
X = 2; // items per chunk    

a = ['a','b','c','d'];

a.reduce((ar, it, i) => { 
  const ix = Math.floor(i/X); 

  if(!ar[ix]) {
    ar[ix] = [];
  }

  ar[ix].push(it);

  return ar;
}, [])

// result: [["a","b"], ["c","d"]]
console.log("a: ",a)

*/
// ---------------------------------------------------------------------------
/*console.log("n: "+n)
console.log("ch: "+ch)

function chunk(arr, n) {
  console.log("n: "+n)
console.log("ch: "+ch)
    return arr.slice(0,(arr.length+n-1)/n|0).
           map(function(c,i) { return arr.slice(n*i,n*i+n); });
console.log("n: "+n)
console.log("ch: "+ch)
}

var feoA = chunk(feo, ch);
console.log("feoA: ",feoA)

console.log("n: "+n)
console.log("ch: "+ch)
*/

// ---------------------------------------------------------------------------
/*
function chunker(p, c, i) {
    (p[i/this|0] = p[i/this|0] || []).push(c);
    return p;
}

feoA = feo.reduce(chunker.bind(3),[]);
console.log("feoA: "+feoA)
*/
// ---------------------------------------------------------------------------

// FUNCIONAL PARA N = 2 **********************************************************************************
/*
function chunk(arr, n) {
    return arr.reduce(function(p, cur, i) {
        (p[i/n|0] = p[i/n|0] || []).push(cur);
        return p;
    },[]);
}
console.log("feo: "+feo)
var feoA = chunk(feo, ch);
console.log("feoA: ", feoA)

var filaDeAbajo = []
var filaDeArriba = []
var planoCartesiano = []

for (var i = 0; i < ch; i ++) { // recorre la lista que contiene listas
  for (var j = 0; j < ch; j ++) { // recorre los elementos de las sublistas

    if (j == 0) filaDeAbajo[i] = feoA[i][j] 

    if (j == 1) filaDeArriba[i] = feoA[i][j]

  }
}

planoCartesiano.push(filaDeArriba)
planoCartesiano.push(filaDeAbajo)

console.log("planoCartesiano: ",planoCartesiano)
*/
// ---------------------------------------------------------------------------

function chunk(arr, n) {
    return arr.reduce(function(p, cur, i) {
        (p[i/n|0] = p[i/n|0] || []).push(cur);
        return p;
    },[]);
}
//console.log("feo: "+feo)
//console.log("feoA: ", feoA)



var feoA = chunk(feo, ch);
var planoCartesiano = []
var controlFilas = ch - 1

for (var k = 0; k < ch; k ++) {
  var fila = []
  for (var i = 0; i < ch; i ++) {
    for (var j = 0; j < ch; j ++){
      if (j == controlFilas) fila[i] = feoA[i][j]
    }
  }
  console.log("fila: "+fila)
  planoCartesiano.push(fila)
  controlFilas --
}

console.log("planoCartesiano: ",planoCartesiano)





var intervaloA = chunk($scope.tablaInterv, ch)
var planoCartesianoInterv = []
controlFilas = ch - 1

for (var k = 0; k < ch; k ++) {
  var fila = []
  for (var i = 0; i < ch; i ++) {
    for (var j = 0; j < ch; j ++){
      if (j == controlFilas) fila[i] = intervaloA[i][j]
    }
  }
  console.log("fila: "+fila)
  planoCartesianoInterv.push(fila)
  controlFilas --
}

console.log("planoCartesianoInterv: ", planoCartesianoInterv)

$scope.tablaInterv = planoCartesianoInterv


// ---------------------------------------------------------------------------
/*
var feoA = []

while (feo.length > 0)
    feoA.push(feo.slice(0, n));

console.log("feoA mejorado: "+feoA);
*/
// ---------------------------------------------------------------------------

/*var arrays = [], size = n;

while (feo.length > 0)
    arrays.push(feo.splice(0, size));

console.log("arrays: ",arrays);
*/

// ====================CAMPO DE PRUEBAS FIN ======================================

var fei = 0.0;
fei = parseFloat((lista.length - 1) / Math.pow(n,2))
console.log("FEi ", fei);
console.log("FEo " +    feo);
//$scope.listaFeo = feo;
$scope.listaFeo = planoCartesiano
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
$scope.x20Final = x20;
      }

$scope.obtenerResultado = function()
{
  console.log($scope.uenter);
  $scope.habilitarResultado = true;
  if($scope.x20Final < $scope.uenter.x20)
  {
    $scope.resultadoFinal = "Por lo tanto, los números son aceptados";
  }
  else{
    $scope.resultadoFinal = "Por lo tanto, los números no son aceptados";
  }
}
}]);
