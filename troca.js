function troca(arr, analise) {
    let itemAnalise = arr[analise];
    let itemAnterior = arr[analise - 1];
   
    arr[analise] = itemAnterior;
    arr[analise - 1] = itemAnalise;
   }
   
   module.exports = troca;