//Exercício1
/*a) Será impresso
 Matheus Nachtergaele
 Virginia Cavendish
 Globo, 14h */

 //Exercício 2
 /*a)Vai imprimmir 
 {nome: 'Juca', idade: 3, raca: 'SRD'}
 {nome: 'Juba', idade: 3, raca: 'SRD'}
 {nome: 'Jubo', idade: 3, raca: 'SRD'}
 
 b)Os três pontos antes do nome clona objeto
 */

 //Exercício 3
 /*a) Será impresso false e indefinido 
   b) O backender deu false por está declarado no objeto. Já altura não foi declarada por isso deu indefinido.
 
 */
//Exercícios de escrita de código
//1a

const pessoa = {
    nome: "Amanda", 
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
    
}

function apresentar(pessoa){

    const nomePesssoa = pessoa.nome;
    const apelidosPessoa = pessoa.apelidos
    console.log(`Eu sou ${nomePesssoa}, mas pode me chamar de ${apelidosPessoa}`)   
}

apresentar(pessoa)

//1b

const novaPessoa = {...pessoa, apelidos: ["Manda", "Dinha", "Inha"]}

function apresentar(novaPessoa){

    const nomePesssoa = novaPessoa.nome;
    const apelidosPessoa = novaPessoa.apelidos
    console.log(`Eu sou ${nomePesssoa}, mas pode me chamar de ${apelidosPessoa}`)   
}

apresentar(novaPessoa)

//2b

const alguem = {
    nome:"Lucas",
    idade: 37,
    profissao: "jornalista"
}
const outroAlguem = {
    ...alguem,
    nome:"Ana",
    idade: 35,
    profissao: "médica"
}

function meusDados(alguem){

 const dados = [alguem.nome, alguem.nome.length, alguem.idade, alguem.profissao, alguem.profissao.length]
 return dados
}

console.log(meusDados(alguem))
console.log(meusDados(outroAlguem))

const carrinho = []
const sacola = {
    nome: "uva",
    disponivel: true
}
const sacolaUm = {
    ...sacola,
    nome: "banana"
}

const sacolaDois = {
    ...sacolaUm,
    nome: "maça"
}
function produtos(frutas){


    carrinho.push(sacola.nome, sacola.disponivel, sacolaUm.nome, sacolaUm.disponivel, sacolaDois.nome, sacolaDois.disponivel)
    return carrinho

}

console.log(produtos(carrinho))