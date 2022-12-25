function print(frase) {
    document.write(frase)
}
function pointBreak() {
    document.write("<br>")
}
print("<h3>Login</h3>")
let user="Ilan"
let password="alura321"

let userLog=0
let passwordLog=0

let attempts=0;
while (attempts<3) {
    userLog=prompt("Ingrese el Usuario")
    passwordLog=prompt("Ingresa tu contraseña")
    if (user==userLog&&password==passwordLog) {
        alert("Bienvenido al sistema "+user)
        print("Bienvenido al sistema "+user)
        break
    } else if (attempts==2){
        alert("Agotaste el número permitido de intentos!")
    } else {
        alert("Inicio de sesion invalido. Intentelo de nuevo.")
    }
    attempts++
}
