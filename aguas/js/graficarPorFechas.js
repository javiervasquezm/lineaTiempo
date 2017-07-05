var datosGrafico = "";
var indFechaAct = 0;
var elGrafico;
var datosBurbuja = [];
var fechas = [];
var fechasN = [];
var indices = [];
var indices2 = [];
var nombres = [];
var graficoGenerado = false;
var graficoNombre = false;

function datosBurbujaF() {
	if (!graficoNombre) {
		for (var i = 0 ; i < fechasN.length ; i++) {
			datosBurbuja[i] = {datasets: [{
				label: nombres[0],
				data: [{
					x: fechasN[i],
					y: indices[0][i],
					r: indices2[0][i]
				}],
			 backgroundColor: "rgba(255, 0, 0, 0.4)"
			},{
				label: nombres[1],
				data: [{
					x: fechasN[i],
					y: indices[1][i],
					r: indices2[1][i]
				}],
			 backgroundColor: "rgba(237, 180, 183,0.4)"
			},{
				label: nombres[2],
				data: [{
					x: fechasN[i],
					y: indices[2][i],
					r: indices2[2][i]
				}],
			 backgroundColor: "rgba(0, 255, 0, 0.4)"
			},{
				label: nombres[3],
				data: [{
					x: fechasN[i],
					y: indices[3][i],
					r: indices2[3][i]
				}],
			 backgroundColor: "rgba(0,0,255,0.4)"
			},{
				label: nombres[4],
				data: [{
					x: fechasN[i],
					y: indices[4][i],
					r: indices2[4][i]
				}],
			 backgroundColor: "rgba(0,0,255,0.4)"
			},{
				label: nombres[5],
				data: [{
					x: fechasN[i],
					y: indices[5][i],
					r: indices2[5][i]
				}],
			 backgroundColor: "rgba(188, 0, 190,0.4)"
			},{
				label: nombres[6],
				data: [{
					x: fechasN[i],
					y: indices[6][i],
					r: indices2[6][i]
				}],
			 backgroundColor: "rgba(1, 188, 190,0.4)"
			},{
				label: nombres[7],
				data: [{
					x: fechasN[i],
					y: indices[7][i],
					r: indices2[7][i]
				}],
			 backgroundColor: "rgba(219, 216, 0,0.4)"
			},{
				label: nombres[8],
				data: [{
					x: fechasN[i],
					y: indices[8][i],
					r: indices2[8][i]
				}],
			 backgroundColor: "rgba(254, 132, 10,0.4)"
			},{
				label: nombres[9],
				data: [{
					x: fechasN[i],
					y: indices[9][i],
					r: indices2[9][i]
				}],
			 backgroundColor: "rgba(153,255,51,0.4)"
			}]
			};
		}
	} else {
		return {datasets: [{
				label: nombres[0],
				data: [{
					x: fechasN[0],
					y: indices[0][0],
					r: indices2[0][0]
				}, {
					x: fechasN[1],
					y: indices[0][1],
					r: indices2[0][1]
				}, {
					x: fechasN[2],
					y: indices[0][2],
					r: indices2[0][2]
				}, {
					x: fechasN[3],
					y: indices[0][3],
					r: indices2[0][3]
				}, {
					x: fechasN[4],
					y: indices[0][4],
					r: indices2[0][4]
				}],
			 backgroundColor: "rgba(255, 0, 0, 0.4)"
			}]
			};
	}
	return datosBurbuja[indFechaAct];
}

function datosAreaF() {
	if (!graficoNombre) {
		return {
			labels: fechas,
			datasets: [
			{
				label: nombres[0],
				// fillColor: "rgba(220,220,220,0.2)",
				// strokeColor: "rgba(220,220,220,1)",
				// pointColor: "rgba(220,220,220,1)",
				// pointStrokeColor: "#fff",
				// pointHighlightFill: "#fff",
				// pointHighlightStroke: "rgba(220,220,220,1)",
				backgroundColor: "rgba(255, 0, 0, 0.4)",
				data: indices[0]
			}, {
				label: nombres[1],
				// fillColor: "rgba(151,187,205,0.2)",
				// strokeColor: "rgba(151,187,205,1)",
				// pointColor: "rgba(151,187,205,1)",
				// pointStrokeColor: "#fff",
				// pointHighlightFill: "#fff",
				// pointHighlightStroke: "rgba(151,187,205,1)",
				backgroundColor: "rgba(237, 180, 183,0.4)",
				data: indices[1]
			}, {
				label: nombres[2],
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				backgroundColor: "rgba(0, 255, 0, 0.4)",
				data: indices[2]
			}, {
				label: nombres[3],
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				backgroundColor: "rgba(0,0,255,0.4)",
				data: indices[3]
			}, {
				label: nombres[4],
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				backgroundColor: "rgba(154, 153, 194,0.4)",
				data: indices[4]
			}, {
				label: nombres[5],
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				backgroundColor: "rgba(188, 0, 190,0.4)",
				data: indices[5]
			}, {
				label: nombres[6],
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				backgroundColor: "rgba(1, 188, 190,0.4)",
				data: indices[6]
			}, {
				label: nombres[7],
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				backgroundColor: "rgba(219, 216, 0,0.4)",
				data: indices[7]
			}, {
				label: nombres[8],
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				backgroundColor: "rgba(254, 132, 10,0.4)",
				data: indices[8]
			}, {
				label: nombres[9],
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				backgroundColor: "rgba(153,255,51,0.4)",
				data: indices[9]
			}
			]
		};
	} else {
		return {
			labels: fechas,
			datasets: [
			{
				label: nombres[0],
				// fillColor: "rgba(220,220,220,0.2)",
				// strokeColor: "rgba(220,220,220,1)",
				// pointColor: "rgba(220,220,220,1)",
				// pointStrokeColor: "#fff",
				// pointHighlightFill: "#fff",
				// pointHighlightStroke: "rgba(220,220,220,1)",
				backgroundColor: "rgba(255, 0, 0, 0.4)",
				data: indices[0]
			}
			]
		};
	}
}

function datosXYF() {
	if (!graficoNombre) {
		return {
				labels: fechas,
				datasets: [
				{
					label: nombres[0],
					// fillColor: "rgba(220,220,220,0.2)",
					// strokeColor: "rgba(220,220,220,1)",
					// pointColor: "rgba(220,220,220,1)",
					// pointStrokeColor: "#fff",
					// pointHighlightFill: "#fff",
					// pointHighlightStroke: "rgba(220,220,220,1)",
					borderColor: "rgba(255, 0, 0, 0.4)",
					fill: false,
					data: indices[0]
				}, {
					label: nombres[1],
					// fillColor: "rgba(151,187,205,0.2)",
					// strokeColor: "rgba(151,187,205,1)",
					// pointColor: "rgba(151,187,205,1)",
					// pointStrokeColor: "#fff",
					// pointHighlightFill: "#fff",
					// pointHighlightStroke: "rgba(151,187,205,1)",
					borderColor: "rgba(237, 180, 183,0.4)",
					fill: false,
					data: indices[1]
				}, {
					label: nombres[2],
					// fillColor: "rgba(255,153,0,0.4)",
					// strokeColor: "rgba(255,153,0,0.4)",
					// pointColor: "rgba(255,153,0,0.4)",
					// pointStrokeColor: "#103",
					// pointHighlightFill: "#a12",
					// pointHighlightStroke: "rgba(255,153,0,0.4)",
					borderColor: "rgba(0, 255, 0, 0.4)",
					fill: false,
					data: indices[2]
				}, {
					label: nombres[3],
					// fillColor: "rgba(255,153,0,0.4)",
					// strokeColor: "rgba(255,153,0,0.4)",
					// pointColor: "rgba(255,153,0,0.4)",
					// pointStrokeColor: "#103",
					// pointHighlightFill: "#a12",
					// pointHighlightStroke: "rgba(255,153,0,0.4)",
					borderColor: "rgba(0,0,255,0.4)",
					fill: false,
					data: indices[3]
				}, {
					label: nombres[4],
					// fillColor: "rgba(255,153,0,0.4)",
					// strokeColor: "rgba(255,153,0,0.4)",
					// pointColor: "rgba(255,153,0,0.4)",
					// pointStrokeColor: "#103",
					// pointHighlightFill: "#a12",
					// pointHighlightStroke: "rgba(255,153,0,0.4)",
					borderColor: "rgba(154, 153, 194,0.4)",
					fill: false,
					data: indices[4]
				}, {
					label: nombres[5],
					// fillColor: "rgba(255,153,0,0.4)",
					// strokeColor: "rgba(255,153,0,0.4)",
					// pointColor: "rgba(255,153,0,0.4)",
					// pointStrokeColor: "#103",
					// pointHighlightFill: "#a12",
					// pointHighlightStroke: "rgba(255,153,0,0.4)",
					borderColor: "rgba(188, 0, 190,0.4)",
					fill: false,
					data: indices[5]
				}, {
					label: nombres[6],
					// fillColor: "rgba(255,153,0,0.4)",
					// strokeColor: "rgba(255,153,0,0.4)",
					// pointColor: "rgba(255,153,0,0.4)",
					// pointStrokeColor: "#103",
					// pointHighlightFill: "#a12",
					// pointHighlightStroke: "rgba(255,153,0,0.4)",
					borderColor: "rgba(1, 188, 190,0.4)",
					fill: false,
					data: indices[6]
				}, {
					label: nombres[7],
					// fillColor: "rgba(255,153,0,0.4)",
					// strokeColor: "rgba(255,153,0,0.4)",
					// pointColor: "rgba(255,153,0,0.4)",
					// pointStrokeColor: "#103",
					// pointHighlightFill: "#a12",
					// pointHighlightStroke: "rgba(255,153,0,0.4)",
					borderColor: "rgba(219, 216, 0,0.4)",
					fill: false,
					data: indices[7]
				}, {
					label: nombres[8],
					// fillColor: "rgba(255,153,0,0.4)",
					// strokeColor: "rgba(255,153,0,0.4)",
					// pointColor: "rgba(255,153,0,0.4)",
					// pointStrokeColor: "#103",
					// pointHighlightFill: "#a12",
					// pointHighlightStroke: "rgba(255,153,0,0.4)",
					borderColor: "rgba(254, 132, 10,0.4)",
					fill: false,
					data: indices[8]
				}, {
					label: nombres[9],
					// fillColor: "rgba(255,153,0,0.4)",
					// strokeColor: "rgba(255,153,0,0.4)",
					// pointColor: "rgba(255,153,0,0.4)",
					// pointStrokeColor: "#103",
					// pointHighlightFill: "#a12",
					// pointHighlightStroke: "rgba(255,153,0,0.4)",
					borderColor: "rgba(153,255,51,0.4)",
					fill: false,
					data: indices[9]
				}
				]
			};
	} else {
		return {
			labels: fechas,
			datasets: [
			{
				label: nombres[0],
				// fillColor: "rgba(220,220,220,0.2)",
				// strokeColor: "rgba(220,220,220,1)",
				// pointColor: "rgba(220,220,220,1)",
				// pointStrokeColor: "#fff",
				// pointHighlightFill: "#fff",
				// pointHighlightStroke: "rgba(220,220,220,1)",
				borderColor: "rgba(255, 0, 0, 0.4)",
				fill: false,
				data: indices[0]
			}
			]
		};
	}
}

function cambiarScrollFecha(objeto) {
	var idObjeto = objeto.id;
	/**Cambiar estilo de los cuadros con las fechas**/
	var encontrado = false;
	var i = 0;
	while (!encontrado) {
		if (idObjeto == "fecha" + i) {
			encontrado = true;
		} else {
			i++;
		}
	}
	if (indFechaAct != i) {
		//Si no está marcado ya al que se le dio clic
		document.getElementById("fecha"+indFechaAct).className = 'liFechas';
		document.getElementById(idObjeto).className = 'liFechasSelected';
		indFechaAct = i;

		/**Cambiar el dataset del gráfico**/
		elGrafico.config.data = datosBurbuja[indFechaAct];
		elGrafico.update();
	}
}

function llenarScrollFechas() {
	var elHtml = "<ul class=\"ulFechas\">\n";
	for (var i = 0 ; i < fechasN.length ; i++) {
		var laFecha = new Date(Number(fechasN[i]));
		laFecha.setHours(laFecha.getHours()+24);
		elHtml += "<li class=\"liFechas\" id=\"fecha" + i + "\" onclick=\"cambiarScrollFecha(this)\">" + laFecha.toDateString() + "</li>\n";
	}
	elHtml += "</ul>";
	document.getElementById('scrollFechas').style.display = 'block';
	document.getElementById('scrollFechas').innerHTML = elHtml;
	document.getElementById('fecha'+indFechaAct).className = 'liFechasSelected';
}

function graficar() {
	document.getElementById('scrollFechas').style.display = 'none';
	datosBurbuja = [];
	fechas = [];
	fechasN = [];
	indices = [];
	indices2 = [];
	nombres = [];
	var lugar = document.getElementById("punto").value;
    //Obtener variables de la página
	$('#myChart').remove();
	$('#canvasGrafico').append('<canvas id="myChart" width="100%" height="15"></canvas>');
    var fechaIni = new Date(document.getElementById('fechaI').value).getTime();
    var fechaFin = new Date(document.getElementById('fechaF').value).getTime();
    var parametro = document.getElementById("parametro").value;
	var parametro2 = document.getElementById("parametro2").value;
	var tipoGrafico = '';
	if (document.getElementById("btnArea").checked || document.getElementById("btnXY").checked) {
		tipoGrafico = 'line';
	} else {
		tipoGrafico = 'bubble';
	}

    var ctx = document.getElementById('myChart').getContext('2d');
    ctx.canvas.width = 1200;
    ctx.canvas.height = 400;
    var arrayOfObjects = [];
	if (graficoNombre) {
		$.ajax({
        url: "Mongui/buscarPorNombre.php?nombre=" + lugar,
        async: false,
        dataType: 'json',
        success: function(data) {
            arrayOfObjects = data;
        }
		});
	} else {
		$.ajax({
			url: "Mongui/buscarPorFechas.php?fechaIni=" + fechaIni + "&fechaFin=" + fechaFin,
			async: false,
			dataType: 'json',
			success: function(data) {
				arrayOfObjects = data;
			}
		});
	}

    function obtenerParametro(nombre) {
        var aux = [];
        var aux2 = [];
        for (var i = 0; i < arrayOfObjects.length; i++) {
            var object = arrayOfObjects[i];
            if (object.nombre == nombre) {
                aux.push(object[parametro]);
                aux2.push(object[parametro2]);
            }
        }
        indices.push(aux);
		indices2.push(aux2);
    }
    //guardar en nombres todos los no repetidos y las fechas
    for (var i = 0; i < arrayOfObjects.length; i++) {
        var object = arrayOfObjects[i];
        if (!nombres.includes(object.nombre)) {
            nombres.push(object.nombre);
        }
		if (!fechasN.includes(Number(object.fecha.$date.$numberLong))) {
			fechasN.push(Number(object.fecha.$date.$numberLong));
		}
		var fechaObj = new Date(Number(object.fecha.$date.$numberLong));
		fechaObj.setHours(fechaObj.getHours()+24);
		var fechai = fechaObj.toDateString();
		if (!fechas.includes(fechai)) {
			fechas.push(fechai);
		}
    }
    for (var i = 0; i < nombres.length; i++) {
        obtenerParametro(nombres[i]);
    }
    var data = {};
	if (document.getElementById("btnBurbuja").checked) {
		data = datosBurbujaF();
	} else if (document.getElementById("btnXY").checked) {
		data = datosXYF();
	} else {
		data = datosAreaF();
	}
	
	if (tipoGrafico == 'bubble' && graficoNombre) {
		var opciones = {scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
				},
				scaleLabel: {
					display: true,
					labelString: parametro
				}
			}],
			xAxes: [{
				ticks: {
					userCallback: function(valor) {
						var fechaObj = new Date(Number(valor));
						fechaObj.setHours(fechaObj.getHours()+24);
						return fechaObj.toDateString();
					}
				}
			}]
		}};
	} else if (tipoGrafico != 'bubble' || graficoNombre) {
		var opciones = {scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
				},
				scaleLabel: {
					display: true,
					labelString: parametro
				}
			}]
		}};
		document.getElementById('scrollFechas').style.display = 'none';
	} else {
		var opciones = {
			scales: {
				yAxes: [{
				ticks: {
					beginAtZero: true
				},
				scaleLabel: {
					display: true,
					labelString: parametro
				}
				}],
				xAxes: [{
					display: false
				}]
			}
		};
		llenarScrollFechas(fechas);
	}
    datosGrafico = JSON.stringify(data);
	datosGrafico = datosGrafico.slice(0,datosGrafico.length-1);
    elGrafico = new Chart(ctx, {
        type: tipoGrafico,
        data: data,
		options: opciones
    });
	document.getElementById('textboxNombreGrafico').style.display = 'block';
	document.getElementById('botonesGuardar').style.display = 'block';
	graficoGenerado = true;
	if (graficoNombre) {
		document.getElementById('btnGraficoFecha').disabled = false;
		document.getElementById('btnGraficoNombre').disabled = true;
	} else {
		document.getElementById('btnGraficoFecha').disabled = true;
		document.getElementById('btnGraficoNombre').disabled = false;
	}
}

function cambiarTipoGrafico(tipoGrafico) {
	if (tipoGrafico == 'area' || tipoGrafico == 'xy') {
		document.getElementById('comboParametros2').style.display = 'none';
	} else {
		document.getElementById('comboParametros2').style.display = 'block';
	}
	if (graficoGenerado) {
		graficar();
	}
}