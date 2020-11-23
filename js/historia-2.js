const cabeza = document.getElementById('cabeza');
const mochila = document.getElementById('mochila');
const mapa = document.getElementById('mapa');

var sonido_cabeza = $("#sonido_cabeza")[0];
$("#cabeza")
  .click(function() {
  	$('#modal1').modal('show');
    sonido_cabeza.play();
  });

var sonido_mochila = $("#sonido_mochila")[0];
$("#mochila")
.click(function(){
	$('#modal3').modal('show');
	sonido_mochila.play();
});

var sonido_mapa = $("#sonido_mapa")[0];
$("#mapa")
.click(function(){
	$('#modal2').modal('show');
	sonido_mapa.play();
});