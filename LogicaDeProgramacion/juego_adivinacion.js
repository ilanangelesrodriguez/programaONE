function print(frase) {
    document.write(frase)
}
function pointBreak() {
    document.write("<br>")
}
print("<h3>Juego de adivinacion</h3>")

var numPen=Math.round(Math.random()*10);
var numLan=parseInt(prompt("Ingresa un N° entre 0-10"))

if (numPen===numLan) {
    alert("Felicitaciones, acertaste")
    print("Acertaste")
} else {
    print("El numero era "+numPen)
}