function pointBreak() {
    document.write("<br>")
}
function print(frase) {
    document.write(frase)
}
document.write("<h3>Calcular puntos de un equipo</h3>")

alert("Informacion del equipo")
//La funcion prompt devuelve texto
let win=parseInt(prompt("Victorias del equipo"))
let parity=parseInt(prompt("Empates del equipo"))

let points=win*3+parity
alert("El equipo tiene "+points+" puntos")

print("El equipo tiene "+points+" puntos")
