"use strict";
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Desenvolvedor"] = 1] = "Desenvolvedor";
    Profissao[Profissao["Vigilante"] = 2] = "Vigilante";
})(Profissao || (Profissao = {}));
const Roberto = {
    nome: "Roberto",
    idade: 29,
    profissao: Profissao.Desenvolvedor
};
const carla = {
    nome: "Carla",
    idade: 29,
    profissao: Profissao.Professora
};
const marcelo = {
    nome: "Marcelo",
    idade: 29,
    profissao: Profissao.Vigilante
};
const Luana = {
    nome: 'Luana',
    idade: 21,
    profissao: Profissao.Professora,
    materias: ['Matemática', 'Inglês']
};
function listar(lista) {
    for (const item of lista) {
        console.log("- ", item);
    }
}
listar(Luana.materias);
