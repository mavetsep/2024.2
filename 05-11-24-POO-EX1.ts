class Funcionario {
    nome: string;
    salarioBase: number;

    constructor(nome: string, salarioBase: number) {
        this.nome = nome;
        this.salarioBase = salarioBase;
    }

    calcularSalario(): number {
        return this.salarioBase;
    }
}

class Gerente extends Funcionario {
    bonus: number;

    constructor(nome: string, salarioBase: number, bonus: number) {
        super(nome, salarioBase);  
        this.bonus = bonus;
    }

    calcularSalario(): number {
        return this.salarioBase + this.bonus; 
    }
}

class Vendedor extends Funcionario {
    comissao: number;

    constructor(nome: string, salarioBase: number, comissao: number) {
        super(nome, salarioBase);
        this.comissao = comissao;
    }

    calcularSalario(): number {
        return this.salarioBase + this.comissao; 
    }
}

/* const funcionario = new Funcionario("lucas", 3000);
console.log(funcionario.nome);               
console.log(funcionario.salarioBase);        
console.log(funcionario.calcularSalario()); 

const gerente = new Gerente("robert", 5000, 1500);
console.log(gerente.nome);                
console.log(gerente.salarioBase);         
console.log(gerente.bonus);                
console.log(gerente.calcularSalario()); */

const vendedor = new Vendedor("paulo", 2000, 1200);
console.log(vendedor.nome);               
console.log(vendedor.salarioBase);        
console.log(vendedor.comissao);            
console.log(vendedor.calcularSalario());   

