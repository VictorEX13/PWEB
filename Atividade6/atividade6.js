jokenpo();

function jokenpo(){
    let jogadaPlayer = prompt("Escolha: 1 = pedra, 2 = papel, 3 = tesoura");
    let jogadaPc = Math.random();

    if(jogadaPlayer == 1){
        jogadaPlayer = "pedra";
    } else if(jogadaPlayer == 2){
        jogadaPlayer = "papel";
    } else if(jogadaPlayer == 3){
        jogadaPlayer = "tesoura";
    } else{
        alert("valor inválido");
        return;
    }

    if(jogadaPc < 0.34){
        jogadaPc = "pedra";
    } else if(jogadaPc > 0.33 && jogadaPc < 0.67){
        jogadaPc = "papel";
    } else {
        jogadaPc = "tesoura";
    } 
    alert("A mão adversária é: " + jogadaPc);

    if(jogadaPlayer === jogadaPc){
        alert("Empate!!");
    } else if((jogadaPlayer == "pedra" && jogadaPc == "tesoura") || (jogadaPlayer == "papel" && jogadaPc == "pedra") || (jogadaPlayer == "tesoura" && jogadaPc == "papel")){
        alert("Você venceu!!");
    } else{
        alert("Você perdeu!!");
    }
}