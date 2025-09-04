function verificar() {
    var ano  = new Date().getFullYear()
    var nasc = document.getElementById('nasc').value
    if (nasc.length == 0  || nasc > ano) {
        window.alert('[ERRO]')
    } else {
        var rdsex = document.getElementsByName('rdsex')
        var img = document.createElement('img')
        img.style.width = '300px'
        var idade = ano - nasc
        var res = document.querySelector('div#res')
        if (rdsex[0].checked) {
            var genero = 'Homem'
            if (idade <= 10) {
                img.setAttribute('src', 'bebe-h.png')
            } else if (idade <= 20) {
                img.setAttribute('src', 'jovem-h.png')
            } else if (idade <= 50) {
                img.setAttribute('src', 'adulto-h.png')
            } else {
                img.setAttribute('src', 'idoso-h.png')
            }
        } else {
            var genero = 'Mulher'
            if (idade <= 10) {
                img.setAttribute('src', 'bebe-f.png')
            } else if (idade <= 20) {
                img.setAttribute('src', 'jovem-f.png')
            } else if (idade <= 50) {
                img.setAttribute('src', 'adulto-f.png')
            } else {
                img.setAttribute('src', 'idoso-f.png')
            }
        }
        res.innerHTML = `<p>Detectamos ${genero} de ${idade} anos.</p>`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}