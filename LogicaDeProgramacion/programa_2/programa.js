    document.write("<h2>Usuario:</h2>")
    let user=prompt("Tu nombre:")
    document.write(user)
    document.write("<br>")

    let a=prompt("Tu edad es:")
    document.write("Tiene "+a+" años.")
    document.write("<br>")
    let year=prompt("El año actual es:")
    document.write("Año: "+year)
    document.write("<br>")
    document.write("El año de nacimiento es: "+(year-a))

    year=2025
    document.write("<br>")
    document.write("<br>")
    let u2=year-2000
    document.write("Usuario 2 tiene "+(u2)+" años.")
    document.write("<br>")
    document.write("<br>")
    let u3=year-1995
    document.write("Usuario 3 tiene "+(u3)+" años.")
    document.write("<br>")
    document.write("<br>")
    let u4=year-1990
    document.write("Usuario 4 tiene "+(u4)+" años.")
    document.write("<br>")
    document.write("<br>")

    let promedio=(u2+u3+u4)/3

    document.write("El promedio es: "+Math.round(promedio))
