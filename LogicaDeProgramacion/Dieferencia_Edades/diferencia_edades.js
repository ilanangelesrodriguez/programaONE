// ¿Cuántos años de diferencia tienes con tu hermano? Escribe un programa que muestre el mensaje ¨Nuestra diferencia de edad es¨, concatenando el resultado de la diferencia de tu edad con la de tu hermano (o de un amigo). La respuesta puede dar negativa, sin duda. No olvides de usar las funciones saltarLinea e imprimir y de incluir la etiqueta <meta> para resolver problemas de acentuación. No necesitas enviar la respuesta, solo basta crear un programa, probar y verificar si todo funciona. ¡Si tienes alguna duda no dejes de postearla en el foro!
function print(frase) {
    document.write(frase)
}
function pointBreak() {
    document.write("<br><br>")
}
function age() {
    let yourAge=prompt("Cual es tu edad?")
    print("Tu edad es: "+ yourAge)
    pointBreak()
    let brotherAge=prompt("Cual es la edad de tu hermano?")
    print("La edad de tu hermano es: "+ brotherAge)
    pointBreak()
    olderAge(yourAge,brotherAge)
}
function ageDifference(a, b) {
    let diferencia=a-b
    print("La diferencia de edad es: "+diferencia)
}

function olderAge(yourAge, brotherAge) {
    if (yourAge > brotherAge) {
        print("Tu eres el mayor")
        pointBreak()
        ageDifference(yourAge, brotherAge)
    } else if (brotherAge > yourAge){
        print("Tu hermano es el mayor")
        pointBreak()
        ageDifference(brotherAge, yourAge)
    } else {
        print("Tienen la misma edad")
    }
}

print("<h1>Diferencia entre edades</h1>")
age()
pointBreak()
