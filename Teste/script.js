const cpf = document.getElementById('cpf')
const regex = /\d{3}[.]?\d{3}[.]?\d{3}[-]?\d{2}/

function resultado() {
    console.log(regex.test(cpf.value))
    if (regex.test(cpf.value)) {
        alert('Formato válido')
    } else {
        alert('Formato inválido')
    }
}