class Pessoa {
    constructor(nome='sem nome') {
        this.nome = nome
    }
    falar() {
        return `olá sou o ${this.nome}!`
    }
    static explicacao() {
        console.log('essa é uma classe para Pessoas!')
    }
}

class CLT extends Pessoa{
    constructor(nome, idade, profissao) {
        super(nome)
        this.id = idade
        this.prof = profissao
    }
    desc() {
        console.log(super.falar() + `, tenho ${this.id} anos e trabalho de ${this.prof}`)
    }
}

const clt = new CLT('Joao', 20, 'frentista')
console.log(clt.nome)
console.log(clt.falar())
clt.desc()
clt.prof = 'bombeiro'
clt.desc()
Pessoa.explicacao()