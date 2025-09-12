var saida = document.getElementById('saida')
function contar() {
    var inicio = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('passo').value
    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        saida.innerText = 'Impossivel contar'
    } else {
        if (passo == 0) {
            alert('não é possível ter passo 0, mas foi considerado como 1')
            passo = 1
        }
        var text = ''
        inicio = Number(inicio)
        fim = Number(fim)
        passo = Number(passo)
        for (inicio; inicio < fim; inicio += passo) {
            text += `${inicio}&#x1F449;`
        }
        if (passo >= fim) {
            text += `${fim}&#x1F3F4;`
        } else {
            text += `${inicio}&#x1F3F4;`
        }
        saida.innerHTML = text
    }
}