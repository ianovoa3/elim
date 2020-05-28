$(document).ready(function (){
	/* Cambio de numero de fotos cambia el if , contador en izquierda y value del boton*/
	var paint = document.getElementById("graphic");
	var canvasmauer=document.getElementById("Mauer");
	var context=canvasmauer.getContext("2d");
	var x=0;
	var y=0;
	var opcion=false;
function description(option){
	switch(option){
		case "Cafe":
		$("#Titel").append("Cafe");
		break;
		case "Mittagsessen":
		$("#Titel").append("Mittagsessen");
		break;
		case "Galerie":
		$("#Titel").append("Galerie");
		break;
	}
}
$("#testimonios").hide();
$(".textokinder").hide();
$("#return").hide();
$("#Rangers").hide();
$(".flyer").hide();
$("#Essendata").hide();
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
$("#locationranger").hide();
});
$("#rangersgruppen").click(function(){
$("#rangersgruppende").show();
$("#rangersdescription").hide();
$("#locationranger").hide();
});
$("#location").click(function(){
$("#rangersgruppende").hide();
$("#rangersdescription").hide();
$("#locationranger").show();
});
$(".close").click(function(){
	$("#Essendata").hide(1000);
	$("#Titel").empty();
});
$(".cafe").click(function(){
	$("#Essendata").show(1000);
	description($("#"+this.id)[0].id);
});
$(".colors").click(function(){
	color=this.id;
});
$( "#paintyouridea" ).mousemove(function ( event ) {
	paint.style.left= event.clientX ;
	paint.style.top= event.clientY;
	$("#graphic").css("background-color",color);
});
canvasmauer.addEventListener('mousedown', e => {
  opcion=true;
  x = e.offsetX;
  y = e.offsetY;
});
canvasmauer.addEventListener('mousemove', e => {
  if(opcion){
  paintaction(x,y,e.offsetX,e.offsetY);
  }
  x=e.offsetX;
  y=e.offsetY;
});
canvasmauer.addEventListener('mouseup', e => {
  x = 0;
  y = 0;
  opcion=false;
});

function paintaction(x1,y1,x2,y2){
  context.beginPath();
  context.strokeStyle = color;
  context.lineWidth = 1;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}
var contador=0;
var color;
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