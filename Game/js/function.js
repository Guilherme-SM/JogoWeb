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
	// WASD
	W:87,
	A:65,
	S:83,
	D:68,

	// Setas do Teclado
	UP:38,
	LEFT:39,
	DOWN:40,
	RIGHT:37,

	// Disparos
	barra:32,
	E:69
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
	vida();
	//pontuacao();
}
function movimento() {

	if (jogo.press[TECLA.W] || jogo.press[TECLA.UP]){

		var topo = parseInt($("#player").css("top"));
 		$("#player").css("top",topo-3);

 		if (topo <= 0){
 			$("#player").css("top",topo+0);
 		}
 	}
 	if (jogo.press[TECLA.S] || jogo.press[TECLA.DOWN]){

		var desce = parseInt($("#player").css("top"));
 		$("#player").css("top",desce+3);

 		if (desce >= 755){
 			$("#player").css("top",desce-0);
 		}
	}
	if (jogo.press[TECLA.D] || jogo.press[TECLA.LEFT]){

		var acc = parseInt($("#player").css("left"));
 		$("#player").css("left",acc+3);

 			if (acc >= 1320){
 			$("#player").css("left",acc-0);
 		}
 	}
 	if (jogo.press[TECLA.A] || jogo.press[TECLA.RIGHT]){

		var bck = parseInt($("#player").css("left"));
 		$("#player").css("left",bck-3);

 			if (bck <= -10){
 			$("#player").css("left",bck+0);
 		}
 	}
 	if (jogo.press[TECLA.barra] || jogo.press[TECLA.E]){

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
		posicaoY1 = parseInt(Math.random()*745);
		$("#inimigo").css("left",1330);
		$("#inimigo").css("top",posicaoY1);
	}

}

function inimigo2() {
	posicaoX = parseInt($("#inimigo2").css("left"));
	$("#inimigo2").css("left",posicaoX-8);

	if (posicaoX <= 0) {
		posicaoY2 = parseInt(Math.random()*745);
		$("#inimigo2").css("left",1330);
		$("#inimigo2").css("top",posicaoY2);
	}

}

function tiro() {

	if (limpaTiro==true) {
		limpaTiro = false;
	
	topo = parseInt($("#player").css("top"));
	posicaoX = parseInt($("#player").css("left"));
	tiroX = posicaoX+80;
	topShot = topo+20;

	$("#laser").show();
	$("#laser").css("top",topShot);
	$("#laser").css("left",tiroX);

	var delay = window.setInterval(disparar,10);
}

function disparar() {
	posicaoX = parseInt($("#laser").css("left"));
	$("#laser").css("left",posicaoX+25);

	if (posicaoX > 1375){
 			window.clearInterval(delay);
 			delay=null;
 			$("#laser").hide();
 			limpaTiro=true;
 		}
	}
}

function colisao() {

	var playerX = parseInt($("#player").css("left"))+parseInt($("#player").css("width"));
	var playerY = parseInt($("#player").css("top"))+parseInt($("#player").css("height"));
	var playerTop = parseInt($("#player").css("top"));

	var tiroX = parseInt($("#laser").css("left"))+parseInt($("#laser").css("width"));
	var tiroBaixo = parseInt($("#laser").css("top"))+parseInt($("#laser").css("height"));
	var tiroTop = parseInt($("#laser").css("top"));

	var inimigoX = parseInt($("#inimigo").css("left"))+parseInt($("#inimigo").css("width"));
	var inimigoY = parseInt($("#inimigo").css("top"))+parseInt($("#inimigo").css("height"));
	var inimigoTop = parseInt($("#inimigo").css("top"));

	var inimigo2X = parseInt($("#inimigo2").css("left"))+parseInt($("#inimigo2").css("width"));
	var inimigo2Y = parseInt($("#inimigo2").css("top"))+parseInt($("#inimigo2").css("height"));
	var inimigo2Top = parseInt($("#inimigo2").css("top"));

	if (inimigoX <= playerX) {
		if (inimigoY<=playerY&&inimigoY>=playerTop) {
			$("#inimigo").css("left",1330);
		posicaoY = parseInt(Math.random()*745);
		$("#inimigo").css("top",posicaoY);
		}
	}

	if (inimigo2X <= playerX) {
		if (inimigo2Y<=playerY&&inimigo2Y>=playerTop) {
			$("#inimigo2").css("left",1330);
		posicaoY = parseInt(Math.random()*745);
		$("#inimigo2").css("top",posicaoY);
		}
	}

	if (tiroX >= inimigoX) {
		if (tiroBaixo<=inimigoY&&tiroBaixo>=inimigoTop) {
			$("#inimigo").css("left",1330);
			posicaoY = parseInt(Math.random()*745);
			$("#inimigo").css("top",posicaoY);
		}
	}

	if (tiroX >= inimigo2X) {
		if (tiroBaixo<=inimigo2Y&&tiroBaixo>=inimigo2Top) {
			$("#inimigo2").css("left",1330);
			posicaoY = parseInt(Math.random()*745);
			$("#inimigo2").css("top",posicaoY);
		}
	}
}
// Sprite - Explosão quando uma nave é destruída.
function explosao(inimigoX,inimigoTop){

	var div=$("#explosao");
	div.css("top",inimigoTop);
	div.css("left",inimigoX);
	div.show();
	div.animate({width:80,height:80,opacity:0},"slow");

	var delayE=window.setInterval(explosionReset,1000);

	function explosionReset(){
		div.css("width",45);
		div.css("height",45);
		div.css("opacity",100);
		div.hide();
		window.clearInterval(delayE);
		delayE = null;
	}
}
function vida() {
	playerPosY = parseInt($("#player").css("top"));
	playerPosX = parseInt($("#player").css("left"));
	hpBar = playerPosY-25;
	hpQuantity = playerPosX+5;

	$("#energia").show();
	$("#energia").css("top",hpBar);
	$("#energia").css("left",hpQuantity);

	var vida=$("#energia");
}

function pontuacao() {
	$("#placar").html("<h1>Score: "+ score +"</h1>");

}