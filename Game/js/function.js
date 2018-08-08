alert("JS");
// Funções do Jogo

$(document).ready(function() {
	

	$("#energia").hide();
	$("#explosao").hide();
	$("#laser").hide();
	$("#escudos").hide();
});

var limpaTiro = true;
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
	colisao();
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

 		if (desce >= 735){
 			$("#player").css("top",desce-0);
 		}
	}
	if (jogo.press[TECLA.D]){

		var acc = parseInt($("#player").css("left"));
 		$("#player").css("left",acc+2);

 			if (acc >= 1320){
 			$("#player").css("left",acc-0);
 		}
 	}
 	if (jogo.press[TECLA.A]){

		var bck = parseInt($("#player").css("left"));
 		$("#player").css("left",bck-2);

 			if (bck <= 0){
 			$("#player").css("left",bck+0);
 		}
 	}
 	if (jogo.press[TECLA.barra]){

 		tiro();
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
		posicaoY1 = parseInt(Math.random()*680);
		$("#inimigo").css("left",1320);
		$("#inimigo").css("top",posicaoY1);
	}

}

function inimigo2() {
	posicaoX = parseInt($("#inimigo2").css("left"));
	$("#inimigo2").css("left",posicaoX-8);

	if (posicaoX <= 0) {
		posicaoY2 = parseInt(Math.random()*680);
		$("#inimigo2").css("left",1320);
		$("#inimigo2").css("top",posicaoY2);
	}

}

function tiro() {

	if (limpaTiro==true) {
		limpaTiro = false;
	
	topo = parseInt($("#player").css("top"));
	posicaoX = parseInt($("#player").css("left"));
	tiroX = posicaoX+50;
	topShot = top+30;

	$("#laser").show();
	$("#laser").css("top",topShot);
	$("#laser").css("left",tiroX);

	var delay = window.setInterval(disparar,10);


function disparar() {
	posicaoX = parseInt($("#laser").css("left"));
	$("#laser").css("left",posicaoX+25);

	if (posicaoX >= 725){
 			window.clearInterval(delay);
 			delay=null;
 			$("#laser").hide();
 			var limpaTiro=true;
 		}
	}
}
}

function colisao() {

	var playerX = parseInt($("#player").css("left"))+parseInt($("#player").css("width"));
	var playerY = parseInt($("#player").css("top"))+parseInt($("#player").css("height"));

	var inimigoX = parseInt($("#inimigo").css("left"))+parseInt($("#inimigo").css("width"));
	var inimigoY = parseInt($("#inimigo").css("top"))+parseInt($("#inimigo").css("height"));

	var inimigoX = parseInt($("#inimigo2").css("left"))+parseInt($("#inimigo2").css("width"));
	var inimigoY = parseInt($("#inimigo2").css("top"))+parseInt($("#inimigo2").css("height"));

	if (inimigoX <= jogadorX) {


		$("#inimigo").css("left",617);
	}
}