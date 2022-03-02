const livros = require('./listaLivros')
const menorValor = require('./menorValor')

const titulosOrdenados = [];

livros.forEach((_, indice)=>{
    let menor = menorValor(livros, indice)
    let livroAtual = livros[indice]
    let livroMenorPreco = livros[menor]
    livros[indice] = livroMenorPreco
    livros[menor] = livroAtual
})

// livros.sort((x, y) => { // funciona da mesma forma que o foreach
//     return x.preco - y.preco
// })

console.log(livros)