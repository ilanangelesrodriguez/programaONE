document.write("<h1>Hola</h1>")
//Conectar etiquetas html con acciones en JavaScript
let pantalla=document.querySelector("canvas");
let pincel=pantalla.getContext("2d");

// pincel.fillStyle="lightgrey" //propiedad
// pincel.fillRect(0,0,600,400) //Funcion

pincel.fillStyle="green" //propiedad
pincel.fillRect(0,0,200,400) //Funcion

pincel.fillStyle="red" //propiedad
pincel.fillRect(400,0,200,400) //Funcion

pincel.fillStyle="yellow"
pincel.beginPath();
pincel.moveTo(300,200);
pincel.lineTo(200,400);
pincel.lineTo(400,400);
pincel.fill()

pincel.fillStyle="blue"
pincel.beginPath();
pincel.arc(300,200,50,0,2*3);
pincel.fill()

//Usar canvas rendering context 2d