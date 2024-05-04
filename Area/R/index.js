function calculate() {
    const base = parseFloat(document.getElementById("baseInput").value);
    const height = parseFloat(document.getElementById("heightInput").value);
    if (isNaN(base) || isNaN(height)) {
        alert("Por favor, insira valores numéricos para base e altura.");
        return;
    }
    document.getElementById("base").innerText = `b = ${base}`;
    document.getElementById("height").innerText = `h = ${height}`;
    document.getElementById('result').innerHTML = "O Perímetro do retangulo é dado por: <br>" + "P = 2.(" + base + "+" + height + ") = " + "2." + (base + height) + " = "  + (2*(base + height)) + 
    " <br> <br> A área é dada por: <br> A  = " + base + "." + height + " = " + (base *height) + 
    " <br> <br> A diagonal é dada por: <br> d²  = " + base + "² +" + height + "² " + "<br> d² = " + (base*base) + " + " + (height *height) + "<br>d = √ " + (base*base + height*height) + "<br>d =" + Math.pow((base*base + height*height), 0.5);
}