let num1 = parseFloat(prompt("Digite o primeiro número"));
let num2 = parseFloat(prompt("Digite o segundo número"));
let num3 = parseFloat(prompt("Digite o terceiro número"));

function maior(num1, num2, num3){
    const maiorNum = Math.max(num1, num2, num3);

    return maiorNum;
}

alert("o maior número é: " + maior(num1, num2, num3));