let pantalla=document.querySelector("canvas");
let pincel=pantalla.getContext("2d");
pincel.fillStyle="black" //propiedad
//pincel.fillRect(0,0,500,500) //Funcion

//Forma abierta
pincel.beginPath();
pincel.moveTo(50,50);
pincel.lineTo(50,400);
pincel.lineTo(400,400);
pincel.fill()
pincel.closePath()

//Forma cerrada con relleno
// pincel.beginPath();
// pincel.moveTo(50,150);
// pincel.lineTo(50,300);
// pincel.lineTo(200,300);
// pincel.fill()

pincel.fillStyle="white" 
//Forma cerrada sin relleno
pincel.beginPath();
pincel.moveTo(100,175);
pincel.lineTo(100,350);
pincel.lineTo(275,350);
pincel.fill()
pincel.closePath()