function tabuada() {
    var num = document.getElementById('num').value
    if (num.length == 0) {
        alert('[ERRO]-Digite um número!')
    } else {
        var op = document.getElementsByTagName('option')
        for (var c = 1; c <= 10; c++) {
            op[c-1].innerText = `${num} X ${c} = ${num * c}`
        }
    }
}