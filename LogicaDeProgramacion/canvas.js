document.write("<h1>Hola</h1>")
//Conectar etiquetas html con acciones en JavaScript
let pantalla=document.querySelector("canvas");
let pincel=pantalla.getContext("2d");

// pincel.fillStyle="lightgrey" //propiedad
// pincel.fillRect(0,0,600,400) //Funcion
function dibujarCuadrados(n) {
    let nc=parseInt(prompt("Introduce numero de columnas"))
    let nf=parseInt(prompt("Introduce numero de Filas"))
    pincel.fillStyle=n; //propiedad
    pincel.fillRect(0,0,50,50); //Funcion

    pincel.strokeStyle="black";
    pincel.strokeRect(0,0,50,50);

    for(let i=0;i<nc;i++){
        for(let j=0;j<nf;j++){
            pincel.fillRect(50*i,50*j,50,50) 
            pincel.strokeRect(50*i,50*j,50,50)
        }
    }
}


dibujarCuadrados("red")
dibujarCuadrados("green")
dibujarCuadrados("yellow")
//Usar canvas rendering context 2d