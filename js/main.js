(function() {
    "use strict";
    
    var regalo = document.getElementById('regalo');
    document.addEventListener('DOMContentLoaded', function() {

    // Campos Datos usuario
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var email = document.getElementById('email');

    // Campos pases
    var pase_dia = document.getElementById('pase_dia');
    var pase_dosdias = document.getElementById('pase_dosdias');
    var pase_completo = document.getElementById('pase_completo');

    // Botones y Divs
    var calcular = document.getElementById('calcular');
    var errorDiv = document.getElementById('error');
    var btnRegistro = document.getElementById('btnregistro');
    var lista_productos = document.getElementById('lista-productos');
    var suma = document.getElementById('suma-total');
    
    // Extras
    var etiquetas = document.getElementById('etiquetas');
    var playera_evento = document.getElementById('playera_evento');


    calcular.addEventListener('click', calcularMontos);

    function calcularMontos(event) {
        event.preventDefault();
        if(regalo.value === "") {
            alert("elige un regalo")
            regalo.focus();
        }else {
            var boletosDia = parseInt(pase_dia.value, 10)|| 0,
                boletos2Dias = parseInt(pase_dosdias.value, 10)|| 0,
                boletosCompletos = parseInt(pase_completo.value, 10 )|| 0,
                cantPlayeras = parseInt(playera_evento.value, 10)|| 0,
                cantEtiquetas = parseInt(etiquetas.value, 10)|| 0;


        var totalPagar = (boletosDia * 700) + (boletos2Dias * 1200) + (boletosCompletos * 1800) + ((cantPlayeras * 200) * .93) + (cantEtiquetas * 80);

        var listadoProductos = [];
            
        if(boletosDia > 0) {
            listadoProductos.push(boletosDia + ' Pases por día')
        }
        if(boletos2Dias > 0) {
            listadoProductos.push(boletos2Dias + ' Pases por dos días')
        }
        if(boletosCompletos > 0) {
            listadoProductos.push(boletosCompletos + ' Pases completos')
        }
        if(cantPlayeras > 0) {
            listadoProductos.push(cantPlayeras + ' Playera (s)')
        }
        if(cantEtiquetas > 0) {
            listadoProductos.push(cantEtiquetas + ' Paquete (s) de Etiquetas')
        }
        if(totalPagar > 0) {
        lista_productos.style.display = "block";
        lista_productos.innerHTML = '';

        for(var i = 0; i < listadoProductos.length; i++) {
            lista_productos.innerHTML += listadoProductos[i] + '<br>';

        }
        suma.innerHTML = "$ " + totalPagar.toFixed(2);
        }else {
            lista_productos.style.display = "none";
            suma.innerHTML = "$ " + totalPagar.toFixed(2);
        } 
        
        }
    }



}); // DOM content Loaded
})();