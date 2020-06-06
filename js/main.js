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
    var turegalo = document.getElementById('turegalo');
    
    if (document.getElementById('calcular')) {


    
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

    var select = document.getElementById('regalo');
    select.addEventListener('change', function(){
    var selectedOption = this.options[select.selectedIndex];
    turegalo.style.display = "block";
    turegalo.innerHTML = ('Regalo' + ': ' + selectedOption.text);
  });
} 

}); // DOM content Loaded
})();


$(function() {
    
    // Programa de conferencias
     $('.programa-evento .info-curso:first').show();
     $('.menu-programa a:first').addClass('activo');
    
     $('.menu-programa a').on('click', function() {
         $('.menu-programa a').removeClass('activo');
         $(this).addClass('activo');
         $('.ocultar').hide();
         var enlace = $(this).attr('href');
         $(enlace).fadeIn(1000);
         return false;
     });

    // Menu fijo

    var altura = $('.barra').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.barra').addClass('fixed');
		} else {
			$('.barra').removeClass('fixed');
		}
	});

    // Menu REsponsivo
    $('.menu-movil').on('click', function(){
        $('.navegacion-principal').slideToggle();
    });


    // var windowHeight = $(window).height();
    // var barraAltura = $('.barra').innerHeight();
     
    // $(window).scroll(function() {
    //      var scroll = $(window).scrollTop();
    //      if(scroll > windowHeight) {
    //         $('.barra').addClass('fixed');
    //         $('body').css({'margin-top': barraAltura+'px'});
    //      }else {
    //         $('.barra').removeClass('fixed');
    //         $('body').css({'margin-top': '0px'});
    //      }
    //  });



    //Animaciones
    $('.resumen-evento li:nth-child(1) p').animateNumber({number: 6}, 1500);
    $('.resumen-evento li:nth-child(2) p').animateNumber({number: 15}, 1600);
    $('.resumen-evento li:nth-child(3) p').animateNumber({number: 3}, 1500);
    $('.resumen-evento li:nth-child(4) p').animateNumber({number: 9}, 1800);

    //Contador de dias
    $('.cuenta-regresiva').countdown('2020/12/11 09:00:00', function(event){
        $('#dias').html(event.strftime('%D'));
        $('#horas').html(event.strftime('%H'));
        $('#minutos').html(event.strftime('%M'));
        $('#segundos').html(event.strftime('%S'));

    });

});