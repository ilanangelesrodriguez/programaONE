function saltarLinea() {
    document.write("<br><br>")
}
function imprimir(frase) {
    document.write(frase)
}

imprimir("<h3>¿Alcohol o gasolina?</h3>")
imprimir("<hr>")
//Este codigo calcula la eficiencia del carro, usando gasolina
imprimir("<h4>Gasolina</h4>")
alert("Uso de Gasolina")
let capacity=40
imprimir("Capacidad de tanque: "+capacity+" litros.")
saltarLinea()
let route=prompt("¿Cual es el recorrido del carro?")
imprimir("Recorrido: "+route+" km.")
saltarLinea()
let efficiency=route/capacity
imprimir("Eficiencia "+efficiency+" km/litros")

saltarLinea()

//Este codigo calcula la eficiencia del carro, usando alcohol
imprimir("<h4>Alcohol</h4>")
alert("Uso de alcohol")
imprimir("Capacidad de tanque: "+capacity+" litros.")
saltarLinea()
route=prompt("¿Cual es el recorrido del carro?")
imprimir("Recorrido: "+route+" km.")
saltarLinea()
efficiency=route/capacity
imprimir("Eficiencia "+efficiency+" km/litros")
//document.write(saltoDeLinea)