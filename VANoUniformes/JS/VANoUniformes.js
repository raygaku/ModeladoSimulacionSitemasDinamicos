var calcular = function(landa, clientes){
	var landa = parseFloat(document.getElementById("landa").value);
	var clientes = parseFloat(document.getElementById("clientes").value);

	var tiempo = [];
	for (var i = 0; i < clientes; i++) {
		//tiempo.push(prompt("Ingresa el tiempo dado");
		tiempo.splice(i, 0, prompt("Ingresa el tiempo dado"));
	}
	
	var ts = [];
	for (var i = 0; i < clientes; i++) {
		ts.splice(i, 0, -1/landa*(Math.log(tiempo[i])));
	}

	var Ttoc = 0;
	for (var i = 0; i < clientes; i++) {
		Ttoc = Ttoc + ts[i];
	}	

	var Tpac = Ttoc / clientes;

	

	for (var i = 0; i < clientes; i++) {
		document.write("Cliente ", i ," tardo ", ts[i], " minutos <br />");
	}

	document.write("Tiempo total de operacion: ", Ttoc, "<br />");
	document.write("Tiempo promedio de atencion del cajero: ", Tpac, "<br />");


}