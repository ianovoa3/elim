$(document).ready(function (){
var jugador=true;
var acumulador="";
var acumuladorid="";
var contador=0;
$("#espaciojuegos").hide();
$("#regreso").hide();
$(".botoneleccion").click(function(){
	$(".botoneleccion").hide(1000);
	$("#espaciojuegos").show(1000);
	});
//triqui//
$("#triqui").click(function(){
$("#espaciojuegos").append("<div id='triquijuego'><button id='L' class='btnjuego' value='neutral'></button><button id='C' class='btnjuego' value='neutral'></button><button id='R' class='btnjuego' value='neutral'></button><button id='LL' class='btnjuego' value='neutral'></button><button id='CC' class='btnjuego' value='neutral'></button><button id='RR' class='btnjuego' value='neutral'></button><button id='LLL' class='btnjuego' value='neutral'></button><button id='CCC' class='btnjuego' value='neutral'></button><button id='RRR' class='btnjuego' value='neutral'></button></div>");
$(".btnjuego").click(function(){
triquifunction(this.id);
	});
});
//memory//
$("#memory").click(function(){
for(var i=0;i<12;i++){
$("#espaciojuegos").append("<button id='"+i+"' class='btnmemory'></button>");
}
$(".btnmemory").click(function(){
var imagenes=["Jesus","Moises","Daniel","Pedro","Pablo","Jonas","Jesus","Moises","Daniel","Pedro","Pablo","Jonas"];	
$("#"+this.id).css("background-image","url(imagenes/"+this.id+".jpg)");
$("#"+this.id).attr("value",imagenes[this.id]);
//console.log(""+this.value+"   Acu:"+acumulador);
if(acumulador!="" && acumulador==this.value && acumuladorid!=this.id){
	/*fadeIn: es como show pero con otra animacion fadeOut:hide */
	$("#"+acumuladorid).fadeOut();
	$("#"+this.id).fadeOut();
	contador=contador+1;
}else if(acumulador!="" && acumulador!=this.value){
	/*mientras*/
	$("#"+acumuladorid).css("background-image","none");			

}
acumulador=this.value;
acumuladorid=this.id;
if(contador==6){
$("#espaciojuegos").hide(1000);
$("#regreso").show(1000);
}
});
});
//sudoku
$("#sudoku").click(function(){
	$("#espaciojuegos").append("<div id='selectsudoku'><button type='button' class='btn btn-primary btn-lg btn-block' id='kindersudoku'>Kinder</button><button  type='button' class='btn btn-secondary btn-lg btn-block' id='elternsudoku'>Erwachsene</button></div>");
	$("#kindersudoku").click(function (){
		$("#selectsudoku").fadeOut();
		kindersudoku();
	});
	$("#elternsudoku").click(function (){
		$("#selectsudoku").fadeOut();
		
	});
});
function kindersudoku(){
	var cuadrado="imagenes/cuadrado.jpg";
	var pentagono="imagenes/pentagono.jpg";
	var estrella="imagenes/estrella.jpg";
	var circulo="imagenes/circuloimg.jpg";
	var triangulo="imagenes/triangulo.jpg";
	var contadorleft=400;
	var contadortop=0;
	var controlador=5;
	var contadorveces=0;
	var decision=true;
	var arreglo=[
	"",0,0,0,0,
	0,"",0,0,0,
	0,0,"",0,0,
	0,0,0,"",0,
	0,0,0,0,""
	];
	var con=0;
	const solucion=["cuadrado","estrella","circuloimg","triangulo","pentagono",
	"estrella","pentagono","triangulo","cuadrado","circuloimg",
	"triangulo","circuloimg","estrella","pentagono","cuadrado",
	"pentagono","triangulo","cuadrado","circuloimg","estrella",
	"circuloimg","cuadrado","pentagono","estrella","triangulo"
	];
	var array=[];
	 for(var i=0;i<arreglo.length;i++){
		$("#espaciojuegos").append("<div id='elementossudoku'><div id="+i+">"+arreglo[i]+"</div></div>");
		contadorleft=contadorleft+100;
		if(i==controlador){
		controlador=controlador+5;
		contadortop=contadortop+100;
		contadorleft=500;
		}
		if(arreglo[i]==0){
		$("#"+i).empty();	
		$("#"+i).css("background-image","url(imagenes/pregunta.png)");
		$("#"+i).addClass("droppable");
		$("#"+i).addClass("ui-widget-header");		
		}
		$("#"+i).css("margin-top",contadortop);
		$("#"+i).css("width","100px");
		$("#"+i).css("height","100px");
		$("#"+i).css("margin-left",contadorleft);
		$("#"+i).css("position","absolute");
		$("#"+0).css("background-image","url("+cuadrado+")");
		$("#"+0).attr("value","cuadrado");
		$("#"+6).css("background-image","url("+pentagono+")");
		$("#"+6).attr("value","pentagono");
		$("#"+12).css("background-image","url("+estrella+")");
		$("#"+12).attr("value","estrella");
		$("#"+18).css("background-image","url("+circulo+")");
		$("#"+18).attr("value","circulo");
		$("#"+24).css("background-image","url("+triangulo+")");
		$("#"+24).attr("value","triangulo");	
	 }
	 $("#espaciojuegos").append("<div id='figuras'><div id='cuadrado' class='draggable' class='ui-widget-content' ></div><div id='pentagono' class='draggable' class='ui-widget-content'></div><div id='estrella' class='draggable' class='ui-widget-content'></div><div id='circuloimg' class='draggable' class='ui-widget-content'></div><div id='triangulo' class='draggable' class='ui-widget-content'></div></div>");
	 $(".draggable").draggable();
	 $(".droppable").droppable({
	  drop: function( event, ui ) {
        $(this)
        if(this.id!=0 && this.id!=6 && this.id!=12 && this.id!=18 && this.id!=24){
       $("#"+this.id).css("background-image","url(imagenes/"+ui.draggable[0].id+".jpg)");
       $("#"+this.id).attr("value",ui.draggable[0].id);
       $("#"+ui.draggable[0].id).css("margin-left","30px");
       array.push(this.id,ui.draggable[0].id);
   	}
   	var i=0;
   	var j=1;
   	if(array.length>=40){
   		$("#espaciojuegos").append("<div class='spinner-border' role='status'><span class='sr-only'>Es lädt...</span></div>");
   		while(solucion[array[i]]==array[j]){
   			i=i+2;
   			j=j+2;
   			if(j=array.length-1){
   			alert("Gewinner");	
   			}
   		}
   		array=[];
   	}   		
 } 		
});	
}

	 /*event trae info del droppable y el ui del que yo queria arrastrar */
function elternsudoku(){
	
}










function triquifunction(parametroid){
if(document.getElementById(parametroid).value==="neutral"){
if(jugador){
	$("#"+parametroid).css("background-image","url(imagenes/equis.png)");
	$("#"+parametroid).attr("value",parametroid+"player1");
	jugador=false;
 } else{
	$("#"+parametroid).css("background-image","url(imagenes/circulo.jpg)");
	$("#"+parametroid).attr("value",parametroid+"player2");
	jugador=true;
  }
 }
 if(document.getElementById("L").value=="Lplayer1" && document.getElementById("LL").value=="LLplayer1" && document.getElementById("LLL").value=="LLLplayer1"){
 	alert("Gewinner Player1");
 	$("#espaciojuegos").hide(1000);
	$("#regreso").show(1000);
 }if(document.getElementById("C").value=="Cplayer1" && document.getElementById("CC").value=="CCplayer1" && document.getElementById("CCC").value=="CCCplayer1"){
 	alert("Gewinner Player1");
	$("#espaciojuegos").hide(1000);
	$("#regreso").show(1000); 	
  }if(document.getElementById("R").value=="Rplayer1" && document.getElementById("RR").value=="RRplayer1" && document.getElementById("RRR").value=="RRRplayer1"){
 	alert("Gewinner Player1");
 	$("#espaciojuegos").hide(1000);
	$("#regreso").show(1000);
   }if(document.getElementById("L").value=="Lplayer1" && document.getElementById("C").value=="Cplayer1" && document.getElementById("R").value=="Rplayer1"){
 	alert("Gewinner Player1");
 	$("#espaciojuegos").hide(1000);
	$("#regreso").show(1000);
 	}if(document.getElementById("LL").value=="LLplayer1" && document.getElementById("CC").value=="CCplayer1" && document.getElementById("RR").value=="RRplayer1"){
 	alert("Gewinner Player1");
 	$("#espaciojuegos").hide(1000);
	$("#regreso").show(1000);
 	}if(document.getElementById("LLL").value=="LLLplayer1" && document.getElementById("CCC").value=="CCCplayer1" && document.getElementById("RRR").value=="RRRplayer1"){
 	alert("Gewinner Player1");
 	$("#espaciojuegos").hide(1000);
	$("#regreso").show(1000);
 	}if(document.getElementById("L").value=="Lplayer1" && document.getElementById("CC").value=="CCplayer1" && document.getElementById("RRR").value=="RRRplayer1"){
 	alert("Gewinner Player1");
 	$("#espaciojuegos").hide(1000);
	$("#regreso").show(1000);
 	}if(document.getElementById("R").value=="Rplayer1" && document.getElementById("CC").value=="CCplayer1" && document.getElementById("LLL").value=="LLLplayer1"){
 	alert("Gewinner Player1");
 	$("#espaciojuegos").hide(1000);
	$("#regreso").show(1000);
 	}
/*----------------------------------------------------------------------------------------------------------------------------------------------*/
if(document.getElementById("L").value=="Lplayer2" && document.getElementById("LL").value=="LLplayer2" && document.getElementById("LLL").value=="LLLplayer2"){
 	alert("Gewinner Player2");
 	$("#espaciojuegos").hide(1000);
	$("#regreso").show(1000);
 }if(document.getElementById("C").value=="Cplayer2" && document.getElementById("CC").value=="CCplayer2" && document.getElementById("CCC").value=="CCCplayer2"){
 	alert("Gewinner Player2");
    $("#espaciojuegos").hide(1000);
	$("#regreso").show(1000);
  }if(document.getElementById("R").value=="Rplayer2" && document.getElementById("RR").value=="RRplayer2" && document.getElementById("RRR").value=="RRRplayer2"){
 	alert("Gewinner Player2");
 	$("#espaciojuegos").hide(1000);
	$("#regreso").show(1000);
   }if(document.getElementById("L").value=="Lplayer2" && document.getElementById("C").value=="Cplayer2" && document.getElementById("R").value=="Rplayer2"){
 	alert("Gewinner Player2");
 	$("#espaciojuegos").hide(1000);
	$("#regreso").show(1000);
 	}if(document.getElementById("LL").value=="LLplayer2" && document.getElementById("CC").value=="CCplayer2" && document.getElementById("RR").value=="RRplayer2"){
 	alert("Gewinner Player2");
 	$("#espaciojuegos").hide(1000);
	$("#regreso").show(1000);
 	}if(document.getElementById("LLL").value=="LLLplayer2" && document.getElementById("CCC").value=="CCCplayer2" && document.getElementById("RRR").value=="RRRplayer2"){
 	alert("Gewinner Player2");
 	$("#espaciojuegos").hide(1000);
	$("#regreso").show(1000);
 	}if(document.getElementById("L").value=="Lplayer2" && document.getElementById("CC").value=="CCplayer2" && document.getElementById("RRR").value=="RRRplayer2"){
 	alert("Gewinner Player2");
 	$("#espaciojuegos").hide(1000);
	$("#regreso").show(1000);
 	}if(document.getElementById("R").value=="Rplayer2" && document.getElementById("CC").value=="CCplayer2" && document.getElementById("LLL").value=="LLLplayer2"){
 	alert("Gewinner Player2");
 	$("#espaciojuegos").hide(1000);
	$("#regreso").show(1000);
	}
}
});