var saida = document.getElementById('saida')
function contar() {
    var inicio = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('passo').value
    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        saida.innerText = 'Impossivel contar'
    } else {
        if (passo <= 0) {
            alert('não é possível ter passo 0 ou menor, mas foi considerado como 1')
            passo = 1
        }
        var text = 'Contando: <br>'
        inicio = Number(inicio)
        fim = Number(fim)
        passo = Number(passo)
        if (fim >= inicio) {
            for (var c = inicio; c <= fim; c += passo) {
                text += `${c}&#x1F449;`
            }
        } else {
            for (var c = inicio; c >= fim; c -= passo) {
                text += `${c}&#x1F449;`
            }
        }
        text += `&#x1F3F4;`
        saida.innerHTML = text
    }
}