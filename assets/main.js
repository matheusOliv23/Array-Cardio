const pessoas = [
    { nome: "Carlos", sobrenome: "José", idade: 28 },
    { nome: "Maria", sobrenome: "Soares", idade: 18 },
    { nome: "Augusto", sobrenome: "Lima", idade: 17 },
    { nome: "Pedro", sobrenome: "Richard", idade: 22 },
    { nome: "Carla", sobrenome: "Silva", idade: 19 },
    { nome: "Mariana", sobrenome: "Oliveira", idade: 21 },
    { nome: "Fernando", sobrenome: "Augusto", idade: 25 },
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

// Usar o reduce para mostrar a soma de todas as idades das pessoas

// Solução sem reduce

let totalIdades = 0;

for (let i = 0; i < pessoas.length; i++) {
    totalIdades += pessoas[i].idade;
}

console.log(totalIdades);

// Com reduce

const idades = pessoas.reduce((total, pessoa) => {
    return total + pessoa.idade;
}, 0);

console.log(idades);

// Criar uma list

const categoria = document.querySelector(".nw-category a");
const links = Array.from(categoria.querySelectorAll("a"));

const de = links
    .map((link) => link.textContent)
    .filter((streetName = streetName.includes("de")));

//Organizar os sobrenomes em ordem crescente

const crescente = nomes.sort(function(lastOne, nextOne) {
    const parts = lastOne.split("");
});

function makeList() {
    document.getElementById("alfabetica").innerHTML = pessoas
        .map((item, index) => `<li>${item.nome} ${item.sobrenome}</li>`)
        .sort()
        .join("");

    document.getElementById("idadeCrescente").innerHTML = pessoas
        .map((item, index) => `<li>${item.nome} ${item.sobrenome}</li>`)
        .sort((a, b) => (a.idade < b.idade ? -1 : 1))
        .join("");

    document.getElementById("a").innerHTML = pessoas
        .map((item, index) => `<li>${item.nome} ${item.sobrenome}</li>`)
        .filter((pessoa => pessoa.includes('a')))
        .join("");
}

// Usage
// makeList();