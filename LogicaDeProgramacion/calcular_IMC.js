function print(frase) {
    document.write(frase)
}
function pointBreak() {
    document.write("<br>")
}
function calcularIMC(peso, altura) {
    imc=peso/(altura**2)
    //Imprimir el IMC de la persona
    print("<b>El IMC es: </b>"+imc)
    //Retornar el valor del IMC
    return imc
}
function average(imc, nPersonas) {
    average=imc/nPersonas
    //Imprimir el promedio de n° personas
    print("<b>El promedio de IMC es: </b>"+average)
}

print("<h3>Indice de Masa Corporal (IMC)</h3>")
let acm=0;

//N° de personas a calcular
let n=prompt("Introduce N° de personas")
//Bucle para preguntar n° veces
for (let i = 0; i < n; i++) {
    //Nombre de la persona
    let name=prompt("Nombre de Persona "+(i+1))
    //alert(name)
    print("<h4>Persona "+(i+1)+": "+name+"</h4>")

    //Peso de la persona
    let w=prompt("Cual es el peso (en kg) de "+name+"?")
    print("<b>El peso es: </b>"+w+"kg")
    pointBreak()

    //Altura de la persona
    let h=prompt("Cual es la altura (en m) de "+name+"?")
    print("<b>La altura es: </b>"+h+"m")
    pointBreak()

    //Funcion para calcular el IMC y retornar el valor de IMC
    calcularIMC(w,h)

    pointBreak()
    //Utilizo condicional para determinar la clasificacion de IMC
    print("<b>Clasificación de IMC: </b>")
    if (imc<18.5) {
        print("Insufeciencia ponderal")
    } else if (imc>=18.5 && imc<25) {
        print("Intervalo normal")
    } else if(imc>=25 && imc<30){
        print("Sobrepeso")
    }else {
        print("Obesidad")
    }
    //Utilizo el acumulador acm y la variable de IMC
    acm=acm+imc
}
pointBreak()
pointBreak()
//Funcion para clacular el promedio de IMC entre las personas
average(acm,n)

pointBreak()

