function print(frase) {
    document.write(frase)
}
function pointBreak() {
    document.write("<br>")
}
//Funcion para generar espacios
function space(space) {
    for (let i = 0; i < space; i++) {
        print("&nbsp")
    }
}

print("<h3>Tabla</h3>")
space(11)

//Bucle para imprimir columnas
for (let j = 0; j < 5; j++) {
        print("| Columna "+(j+1)+" |")
}
pointBreak()

//Bucle para imprimir filas
for (let i = 0; i < 3; i++) {
    print("|Fila "+(i+1)+" |")
    pointBreak()
    
}