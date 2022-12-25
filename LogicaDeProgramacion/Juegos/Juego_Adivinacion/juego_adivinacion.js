function print(frase) {
    document.write(frase)
}
function pointBreak() {
    document.write("<br>")
}
print("<h3>Juego de adivinacion</h3>")

//Math round es una funcion que ayuda a redondear el numero
//Math.random nos brinda un numero aleatorio entre 0 y 1
var numPen=Math.round(Math.random()*10);
var numLan=0

//N° de intentos del usuario
var attempts=3
//Acumulador de intentos
let acm=0
while (acm<attempts) {
    //Registro de numero
    numLan=parseInt(prompt("Ingresa un N° entre 0-10"))
    //Condicional para respuesta
    if (numPen===numLan) {
        alert("Felicitaciones, acertaste en el intento "+(acm+1))
        print("Acertaste")
        pointBreak()
        break;
    } else {
        print("El numero era "+numPen)
        pointBreak()
    }
    acm++
    alert("Te quedan "+(attempts-acm)+" intentos")
}

// if (numPen===numLan) {
//     alert("Felicitaciones, acertaste")
//     print("Acertaste")
// } else {
//     print("El numero era "+numPen)
// }