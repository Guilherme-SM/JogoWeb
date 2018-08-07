alert("JS");
// Funções do Jogo

$(document).ready(function() {
	

	$("#energia").hide();
	$("#explosao").hide();
	$("#laser").hide();
	$("#escudos").hide();
});
var velocidade = 5;
var positionY = parseInt(Math.random()*410);

var TECLA = {
	W:87,
	A:65,
	S:83,
	D:68,
	barra:32
}

var jogo = {};
jogo.press = [];

$(function() {

	jogo.timer = setInterval(loop,10);

	$(document).keydown(function(e){
	jogo.press[e.which] = true;
	});

	$(document).keyup(function(e){
	jogo.press[e.which] = false;
	});

});

function loop() {
	movimento();
	moveFundo();
	inimigo();
	inimigo2();
}
function movimento() {

	if (jogo.press[TECLA.W]){

		var topo = parseInt($("#player").css("top"));
 		$("#player").css("top",topo-2);

 		if (topo <= 0){
 			$("#player").css("top",topo+0);
 		}
 	}
 	if (jogo.press[TECLA.S]){

		var desce = parseInt($("#player").css("top"));
 		$("#player").css("top",desce+2);
	}
	if (jogo.press[TECLA.D]){

		var acc = parseInt($("#player").css("left"));
 		$("#player").css("left",acc+2);
 	}
 	if (jogo.press[TECLA.A]){

		var bck = parseInt($("#player").css("left"));
 		$("#player").css("left",bck-2);
 	}
}

function moveFundo() {
	posicao = parseInt($(".game").css("background-position"));
	$(".game").css("background-position",posicao-1);
}

function inimigo() {
	posicaoX = parseInt($("#inimigo").css("left"));
	$("#inimigo").css("left",posicaoX-5);

	if (posicaoX <= 0) {
		posicaoY1 = parseInt(Math.random()*410);
		$("#inimigo").css("left",1050);
		$("#inimigo").css("top",posicaoY1);
	}

}

function inimigo2() {
	posicaoX = parseInt($("#inimigo2").css("left"));
	$("#inimigo2").css("left",posicaoX-8);

	if (posicaoX <= 0) {
		posicaoY2 = parseInt(Math.random()*410);
		$("#inimigo2").css("left",1050);
		$("#inimigo2").css("top",posicaoY2);
	}

}