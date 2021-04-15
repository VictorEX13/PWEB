function createRetang(x, y){
    this.x = x;
    this.y = y;
    let obj = x * y;
    this.calcArea = function(){
        alert("Área: " + obj);
    };
}
let area = new createRetang(5, 4);
area.calcArea();

function createConta(){
    let nomeCor;
    this.getNomeCor = function(){
        return nomeCor;
    };
    this.setNomeCor = function(value){
        nomeCor = value;
    };
    let banco;
    this.getBanco = function(){
        return banco;
    };
    this.setBanco = function(value){
        banco = value;
    };
    let numConta;
    this.getNumConta = function(){
        return numConta;
    };
    this.setNumConta = function(value){
        numConta = value;
    };
    let numSaldo;
    this.getNumSaldo = function(){
        return numSaldo;
    };
    this.setNumSaldo = function(value){
        numSaldo = value;
    };
}

function createCorrente(){
    let saldoEspecial;
    this.getSaldoEspecial = function(){
        return saldoEspecial;
    };
    this.setSaldoEspecial = function(value){
        saldoEspecial = value;
    }
}

function createPoupanca(){
    let juros;
    this.getJuros = function(){
        return juros;
    };
    this.setJuros = function(value){
        juros = value;
    };
    let dataVenc;
    this.getDataVenc = function(){
        return dataVenc;
    };
    this.setDataVenc = function(value){
        dataVenc = value;
    };
}
createCorrente.prototype = new createConta();
createPoupanca.prototype = new createConta();

let corrente = new createCorrente();
let poupanca = new createPoupanca();
corrente.setSaldoEspecial(1000);
poupanca.setJuros(500);
poupanca.setDataVenc("1 de maio");

alert("saldo especial: " + corrente.getSaldoEspecial() + '\n' + "juros: " + poupanca.getJuros() + " - data de vencimento: " + poupanca.getDataVenc());