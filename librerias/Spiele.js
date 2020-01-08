$(document).ready(function (){
var jugador=true;
var acumulador="";
var acumuladorid="";
var contador=0;
$("#espaciojuegos").hide();
$("#regreso").hide();
$("#horca").hide();
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
		//elternsudoku();
	});
});
//galgenmännchen
$("#ahorcado").click(function(){
	var linea1=document.getElementById("linea1");
	var horca=linea1.getContext("2d");
	horca.strokeStyle="red";
	horca.moveTo(250,50);//largo en x y largo en y
	horca.lineTo(20,50); //como padding con respecto al div osea cuanta distancia
	horca.moveTo(20,350);
	horca.lineTo(20,50);
	horca.moveTo(200,100);
	horca.lineTo(200,50);                         
	horca.stroke();
	$("#horca").show();
	$("#espaciojuegos").append("<div id='galgenmann'><canvas id='cabeza' width='200' height='100'></canvas><canvas id='cuerpo' height:'100'></canvas><canvas id='brazos' height:'100'></canvas><canvas id='piernas' height:'100'></canvas></div>");
	var cabeza=document.getElementById("cabeza");
	var canv=cabeza.getContext("2d");
	canv.fillStyle= "green";
	canv.arc(150,50,40,0,5*Math.PI);
	canv.fill();
	var cuerpo=document.getElementById("cuerpo");
	var cuerpobj=cuerpo.getContext("2d");
	cuerpobj.strokeStyle="green";
	cuerpobj.moveTo(150,10);
	cuerpobj.lineTo(150,100);
	cuerpobj.stroke();
 	var brazos=document.getElementById("brazos");
 	var brazosobj=brazos.getContext("2d");
 	brazosobj.strokeStyle="green";
 	brazosobj.moveTo(100,5);
 	brazosobj.lineTo(200,5);
 	brazosobj.stroke();
 	var piernas=document.getElementById("piernas");
 	var piernasobj=piernas.getContext("2d");
 	piernasobj.strokeStyle="green";
 	piernasobj.moveTo(150,0);
 	piernasobj.lineTo(90,40);
 	piernasobj.moveTo(150,0);
 	piernasobj.lineTo(200,40);
 	piernasobj.stroke();
	$("#galgenmann").show();
	gangelmann();
});
function gangelmann(){
 var palabras=["Mama","Papa","Oma","Opa","Da","Ball","Buch","Teddy","Puppe","Hund","Baby","Hallo","Tschüss","Heiß","Auf","Zu","Alle","Mehr","Nein","Ja","Hochheben","Danke","Bitte","Schuhe","Nase",
 "ab","Abend","aber","acht","Affe","alle","allein","als","also","alt","am","an","andere","anfangen","Angst","antworten","Apfel","Arbeit","arbeiten","Arzt","auch","auf","Auge","aus",
 "fahren","Fahrrad","fährt","fallen","Familie","fangen","fast","fehlen","Fenster","Ferien","fertig","fest","Feuer","fiel","finden","Finger","Fisch","Flasche","fliegen","Frage","fragen","Frau","frei","fressen","Freude","freuen",
  "Freund","fröhlich","früh","früher","führen","fünf","für","Fuß","Fußball","Sache","sagen","schaffen","schauen","scheinen","schenken","schicken","Schiff","schlafen","schlagen","schlecht","schlimm","Schluss","Schnee","schnell",  
  "schon","schön","schreiben","schreien","Schuh","Schule","Schüler","schwarz","schwer","Schwester","schwimmen","sechs","See","sehen","sehr","sein","seit","Seite","selbst","setzen","sich","sicher","sie","sieben","sieht","sind","singen","sitzen","so","sofort","Sohn", "sollen",
  "Sommer","Sonne","Sonntag","sonst","Spaß","spät","später","Spiel","spielen","sprechen","springen","Stadt","stark","stehen","steigen","Stein","Stelle","stellen","Straße","Stück","Stunde","suchen"
 ];
 var random=Math.floor(Math.random()* palabras.length);
 console.log(palabras[random],palabras[random].length);
 //for creando campos de texto
 // teclado con letras abecedario
}

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
   	var respuesta=true;
   	if(array.length>=40){
   		while(solucion[array[i]]==array[j]){
   			i=i+2;
   			j=j+2;
   			if(j==array.length-1){
   				break;
   			}
   		}
   		$("#espaciojuegos").append("<div class='spinner-border' role='status' id='verificarcampo'><span class='sr-only'>Überprüfung</span></div>");
   		if(j==39 && i==38){
   			alert("Gewinner");
   			array=[];
   			$("#espaciojuegos").hide(1000);
			$("#regreso").show(1000);
   		}else{
   			alert("Noch mal versuchen");
   			recarga();
   		}
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