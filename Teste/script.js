const cpf = document.getElementById('cpf')
const tel = document.getElementById('tel')
const data = document.getElementById('data')
const output = document.querySelector('output')
const regex = /\d{3}[.]?\d{3}[.]?\d{3}[-]?\d{2}/
let text = 'telefones encontrados: '

function resultado() {
    output.innerText = ''
    if (regex.test(cpf.value)) {
        cpf.value = 'cpf enviado com sucesso'
    } else {
        cpf.value = 'erro digite novamente'
        cpf.focus()
    }
    setTimeout(() => {cpf.value=''}, 1000)
    const tels = tel.value.match(/\d{2}[-]?\d{4,5}[-]?\d{4}/g)
    for (const i in tels) {
        text += `${tels[i]} `
    }
    output.innerText = text
    console.log(/(\d{4})[-]?(\d{1,2})[-]?(\d{1,2})/.exec(data.value))
    data.value = data.value.replace(/(\d{4})[-]?(\d{1,2})[-]?(\d{1,2})/, /$3-$2-$1/)
}