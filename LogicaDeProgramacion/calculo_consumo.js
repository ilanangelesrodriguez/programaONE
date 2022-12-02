function saltarLinea() {
    document.write("<br><br>")
}

document.write("<h3>¿Alcohol o gasolina?</h3>")
document.write("<hr>")
document.write("<h4>Gasolina</h4>")
alert("Uso de Gasolina")
let capacity=40
document.write("Capacidad de tanque: "+capacity+" litros.")
saltarLinea()
let route=prompt("¿Cual es el recorrido del carro?")
document.write("Recorrido: "+route+" km.")
saltarLinea()
let efficiency=route/capacity
document.write("Eficiencia "+efficiency+" km/litros")
saltarLinea()

document.write("<h4>Alcohol</h4>")
alert("Uso de alcohol")
document.write("Capacidad de tanque: "+capacity+" litros.")
saltarLinea()
route=prompt("¿Cual es el recorrido del carro?")
document.write("Recorrido: "+route+" km.")
saltarLinea()
efficiency=route/capacity
document.write("Eficiencia "+efficiency+" km/litros")
//document.write(saltoDeLinea)