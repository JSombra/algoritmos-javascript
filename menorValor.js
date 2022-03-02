const livros = require('./listaLivros')

function menorValor (arrProdutos, indice) {
    let maisBarato = indice;
    for (let atual = indice; atual < arrProdutos.length; atual++) {
        if(arrProdutos[atual].preco > arrProdutos[maisBarato].preco){
            maisBarato = atual
        }
    }
    return maisBarato
}

module.exports = menorValor;