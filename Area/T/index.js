function calculateTriangle() {
    const side1 = parseFloat(document.getElementById("side1").value);
    const side2 = parseFloat(document.getElementById("side2").value);
    const side3 = parseFloat(document.getElementById("side3").value);

    if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
        const resultText = "O Perímetro do triângulo é dado por: <br>P=" + side1 + "+" + side2 + "+" + side3 + "<br>P =" + (side1 + side2 + side3) + 
        "<br><br>Aplicando a fórmula de Heron, podemos determinar a área da seguinte maneira: <br><br> I)  Calculamos o semi-perímetro (p), temos: <br>p = P/2 <br>p =" +  (side1 + side2 + side3) + "/2 <br>p =  " + ((side1 + side2 + side3)/2) + 
        "<br> <br> II) Aplicando a fórmula de Heron: <br>S = √p(p-a)(p-b)(p-c), onde a, b e c são os lados do triângulo, obtemos: <br><br> S = √" + ((side1 + side2 + side3)/2) + "(" + ((side1 + side2 + side3)/2) + " - " + side1 + ")" +
        "(" + ((side1 + side2 + side3)/2) + " - " + side2 + ")" + "(" + ((side1 + side2 + side3)/2) + " - " + side3 + ")" +
        "<br>S = √" + ((side1 + side2 + side3)/2) + "×" + (((side1 + side2 + side3)/2) - side1) + "×" + (((side1 + side2 + side3)/2) - side2) + "×" + (((side1 + side2 + side3)/2) - side3)+
        "<br>S = √" + ((side1 + side2 + side3)/2)*(((side1 + side2 + side3)/2) - side1)*(((side1 + side2 + side3)/2) - side2)*(((side1 + side2 + side3)/2) - side3) + "<br>" +
        "S = " + Math.pow(((side1 + side2 + side3)/2)*(((side1 + side2 + side3)/2) - side1)*(((side1 + side2 + side3)/2) - side2)*(((side1 + side2 + side3)/2) - side3), 0.5);
        document.getElementById('result').textContent = resultText;
    } else {
        document.getElementById("result").textContent = "Esses lados não formam um triângulo válido.";
    }
}