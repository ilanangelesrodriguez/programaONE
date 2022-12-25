var pantalla=document.querySelector("canvas");
var pincel=pantalla.getContext("2d");

pincel.fillStyle="grey";
pincel.fillRect(0,0,600,400);

function exhibirAlerta(evento) {
    console.log(evento);
    alert("Hiciste click");
}

pantalla.onclick=exhibirAlerta;