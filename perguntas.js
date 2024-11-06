criaCartao(
    categoria,
    pergunta,
    resposta
)

criaCartao(
    categoria,
    pergunta,
    resposta
)

criaCartao(
    categoria,
    pergunta,
    resposta
)
criaCartao(
    'Programação',
    'O que é Python?',
    'O Python é uma linguagem de programação'
)

criaCartao(
    'Geografia',
    'Qual a capital da França?',
    'A capital da França é Paris'
)

criaCartao(
    'Programação',
    'O que é uma função?',
    'Uma função é um bloco de código que executa alguma tarefa'
)
function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'
}

criaCartao(
    'Lingua inglesa',
    'Como se diz OI em inglês?',
    'Oi em ingles é HI (RAI)'
) 
let respostaEstaVisivel = false

function viraCartao(){
    respostaestaVisivel = !respostaEstaVisivel
}
function viraCartao() {
    respostaEstaVisivel = !respostaEstaVisivel
    cartao.classList.toggle('active', respostaEstaVisivel)
}
cartao.addEventListener('click', viraCartao)

