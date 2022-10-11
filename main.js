Canvas = document.getElementById("cnvs");
Caneta = Canvas.getContext("2d");
Cor = "indianRed";
var espessura = 10;
var radius = 20;
var UpoX,UpoY;
var eveeMOU = "supamonkee";

Canvas.addEventListener("mousedown", myMousedown);
function myMousedown(e) {
    Cor = document.getElementById("cor").value;
    espessura = document.getElementById("espessura").value;
    radius = document.getElementById("raio").value;
    eveeMOU = "mousedown";
}
Canvas.addEventListener("mousemove",Dehenhá);
function Dehenhá(e) {

    MouseX = e.clientX - Canvas.offsetLeft;
    MouseY = e.clientY - Canvas.offsetTop;
    if(eveeMOU == "mousedown"){
        Caneta.beginPath();
        Caneta.strokeStyle = Cor;
        Caneta.lineWidth = espessura;
        Caneta.moveTo (UpoX,UpoY);
        Caneta.arc(MouseX, MouseY, radius, 0, 2 * Math.PI);
        Caneta.stroke();

    }
}
Canvas.addEventListener("mouseup",MouseUp);
function MouseUp(e) {
    eveeMOU = "mouseup";
}

Canvas.addEventListener("mouseleave",MouseLeave);
function MouseUp(e) {
    eveeMOU = "mouseleave";
}