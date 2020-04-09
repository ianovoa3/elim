$(document).ready(function (){
	/* Cambio de numero de fotos cambia el if , contador en izquierda y value del boton*/
$("#testimonios").hide();
$(".textokinder").hide();
$("#return").hide();
$("#Rangers").hide();
$(".flyer").hide();
$("#mas").click(function (){
		$("#testimonios").show();
});
$("#menos").click(function (){
		$("#testimonios").hide();
});
$(".kindergottesdienst").click(function(){
//var valuekinder=document.getElementsByClassName("kindergottesdienst")[0].value;
	$("#biblia").toggle(60);
	$(".textokinder").show();
});
$("#schäfchen").click(function(){
	$(".animacionpicture").attr("src","imagenes/sheep.png");
	$("#return").show(60);
});
$("#Löwen").click(function(){
	$(".animacionpicture").attr("src","imagenes/loewe.png");
	$("#return").show(60);
});
$("#Königskinder").click(function(){
	$(".animacionpicture").attr("src","imagenes/rey.png");
	$("#return").show(60);
});
 $("#return").click(function(){
 	$(".animacionpicture").attr("src","imagenes/jumping.png");
 	$(".textokinder").hide();
 	$("#biblia").show();
 });
 $(".tesoro").click(function(){
$("#Rangers").show(1000);
});
$("#rangershome").click(function(){
$("#rangersdescription").show();
$("#rangersgruppende").hide();
});
$("#rangersgruppen").click(function(){
$("#rangersgruppende").show();
$("#rangersdescription").hide();
});
var contador=0;
var valor=document.getElementsByClassName("izquierda")[0].value;
setInterval(cambiofotos,60000);
function cambiofotos(){
contador=contador+1;
	if(contador<6){
		$("#imgdinamica").css("background-image","url(imagenes/foto"+contador+".jpg)");
	}else{
		contador=0;
		$("#imgdinamica").css("background-image","url(imagenes/lutherhaus1.jpg)");
	}
	descripcion(contador);
}
	$(".derecha").click(function (){
		cambiofotos();
});
	$(".izquierda").click(function (){
		$("#imgdinamica").css("background-image","url(imagenes/foto"+(valor=valor-1)+".jpg)");
		descripcion(valor);
		if(valor==0){
		contador=6;
		cambiofotos();
		valor=document.getElementsByClassName("izquierda")[0].value;
		}
});
function descripcion(parametro){
		switch(parametro){
		case 0:
		$("#descripcion").empty();
		$("#descripcion").append("<p id='ladescripcion'>Lutherhaus Christliche Gemeinde ELIM</p>");
		break;
		case 1:
		$("#descripcion").empty();
		$("#descripcion").append("<p id='ladescripcion'>Indoorspielplatz</p>");
		break;
		case 2:
		$("#descripcion").empty();
		$("#descripcion").append("<p id='ladescripcion'>Gemeinschaft ELIM</p>");
		break;
		case 3:
		$("#descripcion").empty();
		$("#descripcion").append("<p id='ladescripcion'>Royal Ranyers Pfadfinder</p>");
		break;
		case 4:
		$("#descripcion").empty();
		$("#descripcion").append("<p id='ladescripcion'>Bufdi im Café</p>");
		break;
		case 5:
		$("#descripcion").empty();
		$("#descripcion").append("<p id='ladescripcion'> Die schönste Straße Zittaus  </p>");
		break;
		}
	}
});