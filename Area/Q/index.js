function calcular() {
    let lado = document.getElementById('lado').value;
    document.getElementById('resultado').textContent = "O Perímetro do quadrado é dado por: <br>" +
     "P = " + lado + " + " + lado + " + " + lado + " + " + lado + 
    " = " + 4*lado + "<br> <br>" + "A área do quadrado é dada por: <br> A = "
     + lado + " . " + lado + " = " + lado*lado + "<br> <br>" + " A diagonal do quadrado é dada por: <br> d² = "
      + lado + "² + " + + lado + "²" + "<br>" + "d² = " + lado*lado + "+" + lado*lado + "<br>" + "d² = "
      + (lado*lado + lado*lado) + "<br>" + "d = √ " + (lado*lado + lado*lado) + "<br>" + "d = " + Math.pow(2*lado*lado, 0.5);
}
function calcular2(){
    let lado = document.getElementById('lado').value;
    document.getElementById('resultado').textContent = "O perimetro do retangulo é dado por: <br> d² = " +
    " = " + 4*lado + "<br> <br>" + " A área do retangulo e dada por: <br> d"
}