function print(frase) {
    document.write(frase)
}
function pointBreak() {
    document.write("<br>")
}
print("<h3>Año de Mundial de fútbol</h3>")

let yearWorld=1930

let currentYear=parseInt(prompt("Introduce Año actual"))

// for (let i = 1930; i <= currentYear; i++) {
//     yearWorld=yearWorld+4

//     alert("Hubo mundial en el año "+yearWorld )
    
// }
while (yearWorld<=currentYear) {
    print("Hubo mundial en el año "+yearWorld+"." )
    yearWorld=yearWorld+4
    pointBreak()
}