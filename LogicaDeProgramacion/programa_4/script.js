var pantalla=document.querySelector("canvas");
var pincel=pantalla.getContext("2d");

pincel.fillStyle="lightgrey";
pincel.fillRect(0,0,600,400);

function disenarCircunferencia(x,y,radio){
    pincel.fillStyle="blue";
    pincel.beginPath();
    pincel.arc(x,y,radio,0,2*Math.PI);
    pincel.fill();
}
function limpiarPantalla(){
    pincel.clearRect(0,0,600,400);
}
// for(let i=20;i<600;i++){
//     setInterval(disenarCircunferencia(i,20,10),2000);
// }
//disenarCircunferencia(20,20,10);
//setInterval(disenarCircunferencia(i,20,10),2000)
let i=0;
function actualizarPantalla(){
    limpiarPantalla()
    disenarCircunferencia(i,20,10);
    i++;
}
setInterval(actualizarPantalla,100)