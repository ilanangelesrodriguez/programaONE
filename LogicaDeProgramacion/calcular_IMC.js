function print(frase) {
    document.write(frase)
}
function pointBreak() {
    document.write("<br>")
}
function calcularIMC(peso, altura) {
    imc=peso/(altura**2)
    print("<b>El IMC es: </b>"+imc)
}

print("<h3>Indice de Masa Corporal (IMC)</h3>")
//N° de personas a calcular

let n=prompt("Introduce N° de personas")
//Peso de la persona
for (let i = 0; i < n; i++) {
    alert("Persona "+(i+1))
    let w=prompt("Cual es el peso (en kg)?")
    print("<h4>Persona "+(i+1)+"</h4>")
    print("<b>El peso es: </b>"+w+"kg")
    pointBreak()
    let h=prompt("Cual es la altura (en m)?")
    print("<b>La altura es: </b>"+h+"m")
    pointBreak()

    calcularIMC(w,h)
}