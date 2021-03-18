let soma;
let sub;
let prod;
let div;
let resto;
let opcao = confirm("deseja prosseguir ?");
if(opcao == true){
    let num1 = prompt("digite o primeiro número");
    let num2 = prompt("digite o segundo número");
    soma = parseFloat(num1) + parseFloat(num2);
    sub = parseFloat(num1) - parseFloat(num2);
    prod = parseFloat(num1) * parseFloat(num2);
    div = parseFloat(num1) / parseFloat(num2);
    resto = parseFloat(num1) % parseFloat(num2);
}
alert("soma: " + soma + "\n" + ( "subtração: ") + sub + "\n" + ("produto: ") + prod + "\n" + ("divisão: ") + div + "\n" + ("resto: ") + resto);