enum Profissao {
    Professora,
    Desenvolvedor,
    Vigilante
}

interface Pessoa {
    nome: string,
    idade?: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const Roberto: Pessoa = {
    nome: "Roberto",
    idade: 29,
    profissao: Profissao.Desenvolvedor
}

const carla: Pessoa = {
    nome: "Carla",
    idade: 29,
    profissao: Profissao.Professora
}

const marcelo: Pessoa = {
    nome: "Marcelo",
    idade: 29,
    profissao: Profissao.Vigilante
}

const Luana: Estudante = {
    nome: 'Luana',
    idade: 21,
    profissao: Profissao.Professora,
    materias: ['Matemática', 'Inglês']
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log("- ", item);
    }
}

listar(Luana.materias);