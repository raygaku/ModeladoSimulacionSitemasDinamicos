angular.module('app',[]).controller('main',['$scope', function($scope){

	var ejemplo = [0.71857, 0.92784, 0.04921, 0.45197, 0.15191];
	var ts = [];
	var l = ejemplo;
	var a = 2;
	var b = 4;


	for(var i = 0; i < l.length ; i++)
	{
		operacion = parseFloat( a + (b - a) * l[i]);
		ts.push(operacion);
	}
	console.log("Ts");
	for(var i = 0; i < ts.length; i++)
	{
		console.log("ts" + (i+1) + " " + ts[i].toFixed(5));
	}

	var ttoc = 0.0;


	ts.forEach(function(v){
		ttoc += v;
	});

	console.log("ttoc ", ttoc.toFixed(5));

	var tpac = 0.0;

	tpac = parseFloat(ttoc / ts.length);

	console.log("tpac ", tpac.toFixed(5));

}]);
