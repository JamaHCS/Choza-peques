const escudo = document.getElementById('escudo');
const mesa = document.getElementById('mesa');
const trono = document.getElementById('trono');

var sonido_escudo = $("#sonido_escudo")[0];
$("#escudo")
  .click(function() {
  	$('#modal1').modal('show');
    sonido_escudo.play();
  });

var sonido_trono = $("#sonido_trono")[0];
$("#trono")
.click(function(){
	$('#modal3').modal('show');
	sonido_trono.play();
});

var sonido_mesa = $("#sonido_mesa")[0];
$("#mesa")
.click(function(){
	$('#modal2').modal('show');
	sonido_mesa.play();
});