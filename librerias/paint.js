$(document).ready(function (){
	var paint = document.getElementById("graphic");
	var canvasmauer=document.getElementById("Mauer");
	var context=canvasmauer.getContext("2d");
	var x=0;
	var y=0;
	var opcion=false;
	var color;
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
	});