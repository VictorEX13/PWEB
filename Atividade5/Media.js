let media;
let opcao = confirm("Calcular média das notas?");
if(opcao == true){
    let nota1 = prompt("digite a primeira nota");
    let nota2 = prompt("digite a segunda nota");   
    let nota3 = prompt("digite a terceira nota");
    media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
}
alert(media);