var nums = []
var saida = document.getElementById('saida')
function adicionar() {
    let num = document.getElementById('num').value
    if (nums.indexOf(Number(num)) != -1 || num.length == 0 || Number(num) > 100 || Number(num) < 1) {
        alert('[ERRO]-Não foi digitado nenhum número ou o número não está entre 1 e 100 ou o número já foi adicionado.')
    } else {
        saida.innerHTML = ''
        nums.push(Number(num))
        let op = document.createElement('option')
        op.innerText = `Valor ${num} adicionado.`
        document.getElementById('ad').appendChild(op)
    }
}

function finalizar() {
    if (nums.length == 0) {
        alert('[ERRO]-Nenhum número foi adicionado.')
    } else {
        nums.sort((a, b) => a - b)
        let soma = 0
        for (let n in nums) {
            soma += nums[n]
        }
        saida.innerHTML = `<p>Ao todo, temos ${nums.length} números cadastrados.</p><p>O maior valor informado foi ${nums[nums.length-1]}.</p><p>O menor valor informado foi ${nums[0]}</p><p>Somando todos os valores, temos ${soma}</p><p>A média dos valores digitados é ${soma / nums.length}</p>`
    }
}