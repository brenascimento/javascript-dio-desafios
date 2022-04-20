class ContaBancaria{
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(novoSaldo){
        this._saldo = novoSaldo;
    }

    sacar(valor){
        if (valor > this._saldo) console.log('Valor de saque maior que saldo')
        else this._saldo -= valor;
    }

    depositar(valor){
        this._saldo += valor;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, saldo, cartaoCredito){
        super(agencia, numero, 'Conta Corrente', saldo)
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(novoCartaoCredito){
        this._cartaoCredito = novoCartaoCredito;
    }

}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero, saldo){
        super(agencia, numero, 'Conta Poupança', saldo)
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero, saldo){
        super(agencia, numero, 'Conta Universitaria', saldo)
    }

    sacar(valor){
        if(valor < 500) super.sacar(valor)
        else console.log('Contas universitárias não podem sacar valores maiores que 500')
    }
}

let contaEstudante = new ContaUniversitaria(11, 2020, 3000)
console.log(contaEstudante)
contaEstudante.sacar(4000) // Tem que dá erro! ContaBancaria lógica
contaEstudante.sacar(600)  // ContaUniversitaria lógica
contaEstudante.sacar(10)
console.log(contaEstudante)

