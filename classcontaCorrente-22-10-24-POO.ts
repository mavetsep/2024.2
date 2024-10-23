class ContaCorrente {
    numero: number;
    titular: string;
    private saldo: number;
    
    constructor(
    aNumero: number,
    aTitular: string,
    aSaldo: number) {
    this.numero = aNumero;
    this.titular = aTitular;
    this.saldo = aSaldo;
    }
    
    depositar(valor: number) {
    if (valor > 0) {
    this.saldo += valor;
    } else {
    throw 'O valor para depósito deve ser maior que zero';
    }
    }
    
    sacar(valor: number) {
    if (valor > 0) {
    if (this.saldo >= valor) {
    this.saldo -= valor;
    } else {
    throw new Error('Saldo insuficiente');
    }
    } else {
    throw 'O valor para saque deve ser maior que zero';
    }
    }
    
    exibirSaldo() {
    console.log('R$ ', this.saldo);
    }
    }
    
    const conta = new ContaCorrente(1, 'Marcelo', 100);
    console.log('Número: ', conta.numero);
    console.log('Títular: ', conta.titular);
    conta.exibirSaldo();
    conta.depositar(150);
    conta.exibirSaldo();
    conta.sacar(50);
    conta.exibirSaldo();
    //conta.sacar(500);
    //conta.exibirSaldo();
    conta.depositar(200);
    conta.exibirSaldo();