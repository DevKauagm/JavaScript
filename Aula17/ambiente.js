const amigo = {
    nome: 'Jose',
    idade: 20,
    peso: 75,
    engordar(p) {
        console.log('Engordou!')
        this.peso += p
    }
}
amigo.engordar(10)
console.log(`O ${amigo.nome} tem ${amigo.idade} anos e pesa ${amigo.peso}KG`)