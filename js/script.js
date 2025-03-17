// pegar o valor da gasolina e do álcool
// dividir o valor do álcool pelo da gasolina 
// se o valor for inferior a 0.7 ou 70%
// é mais vantajoso abastecer com alcool
// Se não, gasolina

function calcular(){
    var gasolina = Number(document.getElementById("num1").value);
    var alcool = Number(document.getElementById("num2").value);

    var conta = alcool / gasolina;

    if(conta == 0){
        document.getElementById("resultado").innerHTML = "Valor invalido";

    }
    else if (conta <= 0.7){
        document.getElementById("resultado").innerHTML = "Melhor álcool";
    }

    else{
        document.getElementById("resultado").innerHTML = "Melhor Gasolina";
    }

}