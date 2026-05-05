
let aluno = {
    nome: "lucas",
    idade: 18,
    curso: "ADS",
    materias: ["ui/ux design", "logica de programação", "modelagem de banco de dados"],
    endereco:{
        cidade: "são paulo",
        bairro: "são domingos",
        rua : "josé vaz guerreiro"
    }
}
aluno.idade = 19
aluno.status = true
delete aluno.idade

console.log(aluno.nome)
console.log(aluno.idade)
console.log(aluno.curso)
console.log(aluno.materias[1])