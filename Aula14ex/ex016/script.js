function contar() {
    var inicio = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('passo').value
    var saida = document.getElementById('saida')
    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        saida.innerHTML = 'Impossivel contar'
    } else {
        var text = ''
        for (inicio; inicio <= fim; passo) {
            text += `${inicio}`
        }
        saida.innerText = text
    }
}