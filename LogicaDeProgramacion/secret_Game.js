//var secret=Math.round(Math.random()*10)
//QuerySelector: es una funcion que devuelve el elemento resultante a la seleccion
var input = document.querySelector("input");
var button = document.querySelector("button");

let secrets = [3, 5, 7, 9];
secrets.push(aleatorio());
secrets.push(aleatorio());
secrets.push(aleatorio());
secrets.push(aleatorio());
//Funcion push: es para ingresar los valores

//Foco en la etiqueta de entrada
input.focus();
function aleatorio() {
  return Math.round(Math.random() * 10);
}
function sortearNumero(cantidad) {
  let secrets = [];
  let contador = 0;
  while (contador < cantidad) {
    let numRandom = aleatorio();
    console.log(numRandom);
    let found = false;

    if (numRandom != 0) {
      for (let posicion = 0; posicion < secrets.length; posicion++) {
        if (numRandom == secrets[posicion]) {
          found = true;
          break;
        }
      }
      if (found == false) {
        secrets.push(numRandom);
        contador++;
      }
    }
  }
  return secrets;
}

let secretos = sortearNumero(4);
console.log(secretos);
function verificar() {
  let found = false;

  for (let i = 0; i < secrets.length; i++) {
    if (parseInt(input.value) == secrets[i]) {
      alert("Usted acerto!");
      found = true;

      //Corta el proceso
      break;
    }
  }
  if (found == false) {
    alert("No acertaste");
  }

  //Limpiar el cajon
  input.value = "";
  //Para que el cursor se ponga en la casilla
  input.focus();
}

//verificar()
//El nombre de la funcion llama el codigo
//Onclick: funcion para el click
button.onclick = verificar;
