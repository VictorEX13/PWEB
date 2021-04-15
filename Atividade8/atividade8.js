function Aluno(RA, Nome){
    this.RA = RA;
    this.Nome = Nome;
}
let Aluno1 = new Aluno('0030411111111', 'João');
alert(Aluno1.RA + " - " + Aluno1.Nome);

let Aluno2 = {
    RA: '0030412345678',
    Nome: 'Thiago'
}
alert(Aluno2.RA + " - " + Aluno2.Nome);

class createAluno{
    constructor(RA, Nome){
        this.RA = RA;
        this.Nome = Nome;
    }
}
let Aluno3 = new createAluno('0030487654321', 'Ana');
alert(Aluno3.RA + " - " + Aluno3.Nome);
