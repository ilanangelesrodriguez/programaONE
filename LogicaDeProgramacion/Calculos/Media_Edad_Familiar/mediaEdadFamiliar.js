function print(frase) {
    document.write(frase)
}
function pointBreak() {
    document.write("<br>")
}
print("<h3>Media de Edad Familiar</h3>")

let n=parseInt(prompt("Introduce el n° de integrantes:"))
let media=0;

for (let i = 0; i < n; i++) {
    let fam=prompt("Introduce nombre de familiar")
    print("<h4>"+fam+"</h4>")
    pointBreak()
    
    let age=parseInt(prompt("Edad de "+fam))
    print("<b>Edad: </b>"+age)
    pointBreak()

    media=media+age
}
pointBreak()
print("La media de edad familiar es: "+(media/n))

// let acm=0;
// while (acm<10) {
//     print(acm+1)
//     pointBreak()
//     acm++
// }