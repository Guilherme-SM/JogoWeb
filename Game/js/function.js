alert("JS");
// Funções do Jogo
$(document).ready(function() {
	

	$("#energia").hide();
	$("#explosao").hide();
	$("#laser").hide();
});

var TECLA = {
	W:87,
	A:65,
	S:83,
	D:68
}

$(function() {
	
	$(document).keydown(function(e)){
		switch(e.which){
			case TECLA.W:

				var topo = parseInt($("#player").css("top"));
				$("#player").css("top",topo-10);break;

			case TECLA.S:

				var desce = parseInt($("#player").css("top"));
				$("#player").css("top",desce+10);break;

			case TECLA.D:

				var acelera = parseInt($("#player").css("left"));
				$("#player").css("top",acelera+10);break;

			case TECLA.A:

				var recua = parseInt($("#player").css("left"));
				$("#player").css("top",recua-10);break;
		}
	})
})