var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = "lightgray";
    pincel.fillRect(0, 0, 600, 400);

    function dibujarCirculo(x, y, radio, color) {

        pincel.fillStyle = color;
        pincel.beginPath();
        pincel.arc(x, y, radio, 0, 2*3.14);
        pincel.fill();
    }
    function dibujarFlor(x,y,r){
        dibujarCirculo(x,y,r,"red")
        dibujarCirculo(x,y-2*r,r,"yellow")
        dibujarCirculo(x-2*r,y,r,"orange")
        dibujarCirculo(x,y+2*r,r,"blue")
        dibujarCirculo(x+2*r,y,r,"black")
    }
    dibujarFlor(300,200,20)