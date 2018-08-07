alert("JS");
// Funções do Jogo

$(document).ready(function() {
	

	$("#energia").hide();
	$("#explosao").hide();
	$("#laser").hide();
	$("#escudos").hide();
});

var TECLA = {
	W:87,
	A:65,
	S:83,
	D:68,
	barra:32
}

var jogo = {W:87};
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

// $(function() {
	
// 	$(document).keydown(function(e){
// 		switch(e.which){
			
// 			case TECLA.W:

// 				var topo = parseInt($("#player").css("top"));
// 				$("#player").css("top",topo-2);break;

// 			case TECLA.S:

// 				var desce = parseInt($("#player").css("top"));
// 				$("#player").css("top",desce+10);break;

// 			case TECLA.D:

// 				var acelera = parseInt($("#player").css("left"));
// 				$("#player").css("left",acelera+10);break;

// 			case TECLA.A:

// 				var recua = parseInt($("#player").css("left"));
// 				$("#player").css("left",recua-4);break;
			
// 			case TECLA.barra:

// 				var spawn = parseInt($("#player").css("left")), parseInt($("#player"));
// 				$("#player").css("left",spawn=395);
// 				$("#player").css("top",spawn=395);break;

// 		}
// 	})
// })
