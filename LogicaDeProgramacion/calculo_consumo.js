document.write("<h3>¿Alcohol o gasolina?</h3>")
//let saltoDeLinea=document.write("<br><br>")
document.write("<hr>")
document.write("<h4>Gasolina</h4>")
alert("Uso de Gasolina")
let capacity=40
document.write("Capacidad de tanque: "+capacity+" litros.")
let saltoDeLinea=document.write("<br><br>")
let route=prompt("¿Cual es el recorrido del carro?")
document.write("Recorrido: "+route+" km.")
saltoDeLinea
let efficiency=route/capacity
document.write("Eficiencia "+efficiency+" km/litros")

document.write("<h4>Alcohol</h4>")
alert("Uso de alcohol")
document.write("Capacidad de tanque: "+capacity+" litros.")
saltoDeLinea
route=prompt("¿Cual es el recorrido del carro?")
document.write("Recorrido: "+route+" km.")
saltoDeLinea
efficiency=route/capacity
document.write("Eficiencia "+efficiency+" km/litros")