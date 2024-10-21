class ContaCorrente{
	numero: number;
    titular: string;
    saldo: number; // saldo: number ou saldo = 0

    constructor(
        aNumero: number,
        aTitular: string, 
        aSaldo: number) {
        this.numero = aNumero;
        this.titular = aTitular;
        this.saldo = aSaldo;
    } 

    depositar(valor: number) {
      this.saldo += valor;  
    }   

    sacar(valor: number) {
        this.saldo -= valor;
    }   

    exibirSaldo() {
        console.log('R$ ', this.saldo);
    }


}

const conta = new ContaCorrente(1, 'Paulo', 21);

console.log('Número: ', conta.numero);
console.log('Titular: ', conta.titular);
conta.exibirSaldo();
conta.depositar(153);
conta.exibirSaldo();
conta.sacar(50);
conta.exibirSaldo();







//class Person {
//    name: string;
//}

//const person = new Person();
//person.name = "Jane";

//console.log(person);