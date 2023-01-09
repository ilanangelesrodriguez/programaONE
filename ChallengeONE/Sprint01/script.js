function encriptar(){
    let text=document.querySelector("#text-input").value;
    let encryptedText=text.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".input-salida").value = encryptedText;
    document.querySelector("#text-input").value;
}
let boton1 = document.querySelector("#btn-encriptar");
boton1.onclick = encriptar;

function desencriptar (){
        var text = document.querySelector("#text-input").value;
        var encryptedText = text.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
        document.querySelector(".input-salida").value = encryptedText;
        document.querySelector("#text-input").value;

}

let boton2 = document.querySelector("#btn-desencriptar");
boton2.onclick = desencriptar;

function copiarTexto() {
    let content = document.getElementById('message');
    
    content.select();
    document.execCommand('copy');

}
let boton3 = document.querySelector("#btn-copy");
boton3.onclick = copiarTexto;
