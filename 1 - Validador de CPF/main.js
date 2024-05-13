function Pessoa(nome, cpf){

    if (this.validateCpf(cpf)) {
        this._cpf = cpf;
    } else {
        throw new Error('CPF inválido!');
    }

    this.nome = nome;
    
    Object.defineProperties(this, {
        nome : {
            get : function (){
                return nome
            },
            set : function(valor){
                nome = valor
            }
        },
        cpf : {
            get : function (){
                return cpf
            },
            set : function(valor){
                if(Pessoa.prototype.validateCpf(valor)){
                    cpf = valor
                }
                else cpf = null
            }
        }
    })
}

Pessoa.prototype.validateCpf = function (cpf) {
    try {
        let cpfSequence = cpf.replace(/\D+/g,'');
        
        if (cpfSequence.length !== 11) {
            throw new Error('O CPF deve conter exatamente 11 dígitos.');
        }

        let arrayCpf = cpfSequence.split('');
        const arrayReferencia = [...arrayCpf];
        arrayCpf.splice(-2);

        let i = 10;
        
        let somatorio = arrayCpf.reduce((acumulador, valor) => {
            acumulador += valor * i;
            i--;
            return acumulador;
        }, 0);
        
        let digito = 11 - (somatorio % 11);
        digito = digito > 9 ? 0 : digito;
        
        arrayCpf.push(digito);

        i = 11;
        
        somatorio = arrayCpf.reduce((acumulador, valor) => {
            acumulador += valor * i;
            i--;
            return acumulador;
        }, 0);
        
        digito = 11 - (somatorio % 11);
        digito = digito > 9 ? 0 : digito;
        
        arrayCpf.push(digito);

        let a = arrayCpf.join('');
        let b = arrayReferencia.join('');

        return a === b;
    } catch (error) {
        console.error('Erro ao validar CPF:', error.message);
        return false;
    }
}

const pessoa = new Pessoa('Matheus', '105.174.209-96');
console.log(pessoa.cpf)