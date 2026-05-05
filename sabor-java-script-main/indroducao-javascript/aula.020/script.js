const divListaAluno = document.querySelector("#lista_aluno")
let alunos = [
    {
        nome: "lucas",
        idade: 72
    },
    {
        nome: "moranguete",
        idade: 91
    },
    {
        nome: "abacatudo",
        idade: 23
    },
    {
        nome: "lucas",
        idade: 31
    },
    {
        nome: "henrique",
        idade: 89
    },
    {
        nome: "luana",
        idade: 26
    },
    {
        nome: "lula",
        idade: 99
    },
    {
        nome: "anna",
        idade: 11
    },
    {
        nome: "flavia",
        idade: 69
    },
    {
        nome: "flavio",
        idade: 59
    },
    {
        nome: "fernanda",
        idade: 79
    },
    {
        nome: "fernando",
        idade: 88
    },
    {
        nome: "carlos",
        idade: 1
    },
    {
        nome: "carol",
        idade: 5
    },
    {
        nome: "caroline",
        idade: 77
    },
    {
        nome: "eduardo",
        idade: 66
    },
    {
        nome: "eduarda",
        idade: 8
    },
    {
        nome: "hillary",
        idade: 10
    },
    {
        nome: "kimberly",
        idade: 55
    },
    {
        nome: "alexandre",
        idade: 27
    },
    {
        nome: "rozineudo",
        idade: 45
    },
    {
        nome: "ivanete",
        idade: 12
    },
    {
        nome: "bilica",
        idade: 38
    },
    {
        nome: "maria",
        idade: 33
    },
    {
        nome: "mirella",
        idade: 40
    },
    {
        nome: "rafael",
        idade: 30
    },
    {
        nome: "rafaela",
        idade: 29
    },
    {
        nome: "xuxa",
        idade: 15
    },
    {
        nome: "wesley",
        idade: 28
    },
    {
        nome: "julia",
        idade: 25
    },
]
for(let i = 0; i < alunos.length; i++){
    const aluno = alunos[i]
    const li = document.createElement("li")
    li.textContent = `${aluno.nome} - ${aluno.idade} anos`
    divListaAluno.appendChild(li)
}
console.log(alunos)

