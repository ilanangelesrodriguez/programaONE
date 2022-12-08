function print(frase) {
    document.write(frase)
}
function pointBreak() {
    document.write("<br>")
}
print("<h3>Tabla de multiplicar</h3>")

let n=parseInt(prompt("Introduce N°"))

let l=parseInt(prompt("Hasta que numero?"))

// for (let i = 0; i <= l; i++) {
//     print((i+1)+") "+i+"*"+n+"="+i*n)
//     pointBreak()
// }

let count=0
while (count<=l) {
    print((count+1)+") "+count+"*"+n+"="+count*n)
    pointBreak()
    count++
}
