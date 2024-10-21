// interface ModeloAluno{
//     matricula: number;
//     nome: string;
// }

// function LogAluno(aluno: ModeloAluno){
//     return (target : any) => {
//         console.log(aluno.nome);
//         console.log(aluno.matricula);
//     } 
// }

// @LogAluno({
// nome: "estevam",
// matricula: 72856
// })
// class Aluno{
// }


// let exemplo = new Aluno();


interface ModeloAluno{
    matricula?: number;
    nome?: string;
}

function LogAluno({nome = "vazio", matricula = 0}: ModeloAluno){
    return (target : any) => {
        console.log(nome);
        console.log(matricula);
    } 
}

@LogAluno({})
class Aluno{
}



let exemplo = new Aluno();