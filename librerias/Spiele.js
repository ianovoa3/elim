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
	$("#espaciojuegos").append("<div id='selectsudoku'><button type='button' class='btn btn-primary btn-lg btn-block' id='kindersudoku'>Geht Los!</button></div>");
	$("#kindersudoku").click(function (){
		$("#selectsudoku").fadeOut();
		kindersudoku();
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
//bibelquiz
$("#bibelquiz").click(function(){
	bibelquiz();
});
function gangelmann(){
 var palabras=["Mama","Papa","Oma","Opa","Da","Ball","Buch","Teddy","Puppe","Hund","Baby","Hallo","Tschüss","Heiß","Auf","Zu","Alle","Mehr","Nein","Ja","Hochheben","Danke","Bitte","Schuhe","Nase",
 "ab","Abend","aber","acht","Affe","alle","allein","als","also","alt","am","an","andere","anfangen","Angst","antworten","Apfel","Arbeit","arbeiten","Arzt","auch","auf","Auge","aus",
 "fahren","Fahrrad","fährt","fallen","Familie","fangen","fast","fehlen","Fenster","Ferien","fertig","fest","Feuer","fiel","finden","Finger","Fisch","Flasche","fliegen","Frage","fragen","Frau","frei","fressen","Freude","freuen",
  "Freund","fröhlich","früh","früher","führen","fünf","für","Fuß","Fußball","Sache","sagen","schaffen","schauen","scheinen","schenken","schicken","Schiff","schlafen","schlagen","schlecht","schlimm","Schluss","Schnee","schnell",  
  "schon","schön","schreiben","schreien","Schuh","Schule","Schüler","schwarz","schwer","Schwester","schwimmen","sechs","See","sehen","sehr","sein","seit","Seite","selbst","setzen","sich","sicher","sie","sieben","sieht","sind","singen","sitzen","so","sofort","Sohn", "sollen",
  "Sommer","Sonne","Sonntag","sonst","Spaß","spät","später","Spiel","spielen","sprechen","springen","Stadt","stark","stehen","steigen","Stein","Stelle","stellen","Straße","Stück","Stunde","suchen"
 ];
 var abecedario=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Ä","Ö","Ü","ß"];
 var random=Math.floor(Math.random()*(palabras.length-1));
 var margintopcon=20;
 var veces=0;
 $("#linea1").css("position","absolute");
 
 //math.random()== muestra numero de 0 a 1 la funcion matematica por defecto mostrara numeros desde 0 a 1;

 for(var i=0;i<palabras[random].length;i++){
 	$("#espaciojuegos").append("<div id='palabra'><input type='text' readonly id='"+i+"'></div>");
 	$("#"+i).css("margin-top",margintopcon);
 	$("#"+i).css("width",40);
 	$("#"+i).css("height",25);
 	margintopcon=margintopcon+30;
 }
 $("#espaciojuegos").append("<div id='abecedario'></div>");
  for(var j=0;j<abecedario.length;j++){
  	$("#abecedario").append("<button value='"+abecedario[j]+"' class='letra'>"+abecedario[j]+"</button>");
  	$("#"+i).css("width",20);
  	$("#"+i).css("height",25);	
  }
  var mayusculas=palabras[random].toUpperCase();
  var ganador=0;
  $(".letra").click(function (){
  	if(mayusculas.includes(this.value)){
  		for(var z=0;z<mayusculas.length;z++){
  			if(this.value==mayusculas[z]){
  			$("#"+z).val(this.value);
  			ganador=ganador+1;
  			}
  		}
  	}else{
  	veces=veces+1;
  	switch(veces){
  		case 1: 	
  		$("#cabeza").css("position","absolute");
  		$("#horca").append($("#cabeza"));
  		$("#cabeza").css("margin-top","50px");
  		$("#cabeza").css("margin-left","50px");
  		break;
  		case 2:
  		$("#cuerpo").css("position","absolute");
  		$("#horca").append($("#cuerpo"));
  		$("#cuerpo").css("margin-top","100px");
  		$("#cuerpo").css("margin-left","50px");
  		break;	
  		case 3:
  		$("#brazos").css("position","absolute");
  		$("#horca").append($("#brazos"));
  		$("#brazos").css("margin-top","150px");
  		$("#brazos").css("margin-left","50px");
  		break;
  		case 4:
  		$("#piernas").css("position","absolute");
  		$("#horca").append($("#piernas"));
  		$("#piernas").css("margin-top","200px");
  		$("#piernas").css("margin-left","50px");
  		alert("GAME OVER. Das Wort war:"+palabras[random]);
  		$("#espaciojuegos").hide();
  		$("#regreso").show();
  		break;
  	}
  }
  if(ganador==mayusculas.length){
  	alert("Gut gemacht.Das Wort war:"+palabras[random]);
  $("#espaciojuegos").hide();
  $("#regreso").show();
  }
 });
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
// function elternsudoku(){
// 	for(var i=0;i<9;i++){
// 		for(var j=0;j<9;j++){

// 			$("#espaciojuegos").append("<div id='sudokugrande'><input type='number' class='casillasudoku'></div>");
// 		}
// 	}

// }
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
//faltaria
function bibelquiz(){
var count=0;
var countanswer=0;
var resultado="";
var preguntas=["Wer baute die Arche?","Wie hieß der Bruder Jakobs?","Wer hatte einen Mantel aus Kamelhaaren und aß Heuschrecken und wilden Honig?","Wie hieß der älteste Sohn Jakobs?","Welche Krankheit hatte Mephiboseth?","Welche Jünger Jesu fand im Mund eines Fisches ein Geldstück?","Wie hieß die Göttin, die in Ephesus am meisten verehrt wurde?","Wie alt wurde Hennoch?","Nach Verlauf von wie viel Jahren zog Paulus wieder nach Jerusalem?","Wie viel Wunder tut Gott?"];
var respuestas=["Noah","Johannes","Mose","Abel","Isaac","Esau","Johannes der Täufer","Jakobus","Judas","Ruben","Benjamin","Ephraim","Er war lahm","Er war blind","Er war taub","Petrus","Johannes","Jakobus","Martha","Maria","Diana","340 Jahre","365 Jahre","120 Jahre","14 Jahre","25 Jahre","7 Jahre","198","34","Unzählige"];
var richtig=[0,2,0,0,0,0,2,1,0,2];
var countright=0;
var countfail=0;
$("#espaciojuegos").append("<div class='bibelfragen'><button id='enviorta'>Nächste Frage</button></div>");
$(".bibelfragen").append("<div id='pregunta'>"+preguntas[count]+"</div><div id='respuesta'><button type='button' class='rtaquiz' id='firstanswer' value='0'>"+respuestas[countanswer]+"</button><button type='button' class='rtaquiz' id='secondanswer' value='1'>"+respuestas[countanswer+1]+"</button><button type='button' class='rtaquiz' id='thirdanswer' value='2'>"+respuestas[countanswer+2]+"</button></div>");
	$(".rtaquiz").click(function(){	
	resultado=document.getElementById(this.id).value;
	if(resultado==richtig[count]){
	$("#"+this.id).css("background-color","green");
	countright=countright+1;
	}else{
    countfail=countfail+1;
    $("#"+this.id).css("background-color","red");
    }
});
$("#enviorta").click(function(){
	if(count<preguntas.length-1){
	$(".rtaquiz").css("background-color","transparent");
	$("#pregunta").empty();
	$("#respuesta").hide();
	count=count+1;
	$("#pregunta").append(preguntas[count]);
	countanswer=countanswer+3;
	$("#firstanswer").text(respuestas[countanswer]);
	$("#secondanswer").text(respuestas[countanswer+1]);
	$("#thirdanswer").text(respuestas[countanswer+2]);
	$("#respuesta").show();
	if((countanswer+2)==respuestas.length-1)
	$("#enviorta").html("Ergebnisse Zeigen");
}
	else{
		$("#pregunta").append("<div id='ergebnisse'>Richtig:"+countright+" Falsch="+countfail+"</div>");
		$("#espaciojuegos").append("<button type='button' class='btn btn-danger'id='quizback' onclick='recarga()'>Zum Menü</button>");
	}

	});	
   }
});