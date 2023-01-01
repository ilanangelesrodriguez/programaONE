var pantalla=document.querySelector("canvas");
var pincel=pantalla.getContext("2d");

pincel.fillStyle="lightgrey";
pincel.fillRect(0,0,600,400);
let radio=10;
let xAleatorio;
let yAleatorio;

function disenarCircunferencia(x,y,radio,color){
    pincel.fillStyle=color;
    pincel.beginPath();
    pincel.arc(x,y,radio,0,2*Math.PI);
    pincel.fill();
}
function limpiarPantalla(){
    pincel.clearRect(0,0,600,400);
}
let i=0;

function disenarObjetivo(x,y){
    disenarCircunferencia(x,y,radio+20,"red");
    disenarCircunferencia(x,y,radio+10,"white");
    disenarCircunferencia(x,y,radio,"red");
}
function actualizarPantalla(){
    limpiarPantalla();
    xAleatorio=sortearNumero(600);
    yAleatorio=sortearNumero(400);
    disenarObjetivo(xAleatorio,yAleatorio);
    i++;
}
function sortearNumero(maximo){
    return Math.floor(Math.random()*maximo);
}

function disparar(evento){
    var x=evento.pageX-pantalla.offsetLeft;
    var y=evento.pageY-pantalla.offsetTop;
        if ((x<xAleatorio+radio)&&(x>xAleatorio-radio)&&(y<yAleatorio+radio)&&(y>yAleatorio-radio)) {
            alert("Tiro certero")
        }
}
// xAleatorio=sortearNumero(600);
// yAleatorio=sortearNumero(400);
//disenarObjetivo(xAleatorio,yAleatorio)
setInterval(actualizarPantalla,2000)

pantalla.onclick=disparar;