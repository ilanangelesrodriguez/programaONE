var secret=Math.round(Math.random()*10)
//QuerySelector: es una funcion que devuelve el elemento resultante a la seleccion
var input=document.querySelector("input")
var button=document.querySelector("button")

//Foco en la etiqueta de entrada
input.focus();
function verificar(){
    if (parseInt(input.value)==secret) {
        alert("Usted acerto!")
    } else {
        alert("No acertaste")
    }
    //Limpiar el cajon
    input.value="";
    //Para que el cursor se ponga en la casilla
    input.focus();
}


//verificar()
//El nombre de la funcion llama el codigo
//Onclick: funcion para el click
button.onclick=verificar