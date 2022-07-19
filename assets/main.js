const pessoas = [
    { nome: "Carlos", sobrenome: "José", idade: "28" },
    { nome: "Maria", sobrenome: "Soares", idade: "18" },
    { nome: "Augusto", sobrenome: "Lima", idade: "17" },
    { nome: "Pedro", sobrenome: "Richard", idade: "22" },
    { nome: "Carla", sobrenome: "Silva", idade: "19" },
    { nome: "Mariana", sobrenome: "Oliveira", idade: "21" },
    { nome: "Fernando", sobrenome: "Augusto", idade: "25" },
];

const nomes = ["Carlos", "Jose", "Guilherme", "Matheus", "Fabricio"];

// Usar o filter para Filtrar a lista de 'pessoas' pela idade

const maiores20 = pessoas.filter((pessoa) => pessoa.idade > 20);

console.table(maiores20);

// Usar o map parar Mapear as 'pessoas' com o nome e o sobrenome

const nomeCompleto = pessoas.map(
    (pessoa) => `${pessoa.nome} ${pessoa.sobrenome}`
);
console.log(nomeCompleto);

//Usar o sort para ordenar as pessoas da menor idade para a maior

const ordenados = pessoas.sort((a, b) => (a.idade > b.idade ? 1 : -1));

console.table(ordenados);