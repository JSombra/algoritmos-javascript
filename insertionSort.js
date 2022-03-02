const livros = require('./listaLivros')
const troca = require('./troca')

function insertionSort (arr) {
    for (let atual = 0; atual < arr.length; atual++) {
        let analise = atual;
        while (analise > 0 && arr[analise].preco < arr[analise - 1].preco) {
            troca(arr, analise)
            analise --
        }        
    }
    console.log(arr);
}

insertionSort(livros)