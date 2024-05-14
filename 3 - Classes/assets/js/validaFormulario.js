class ValidaFormulario{
    constructor(form){
        this.form = form;
        this.inputNome = form.querySelector('.nome')
        //this.inputSobrenome = form.querySelector('.sobrenome')
        this.inputCpf = form.querySelector('.cpf')
        this.inputUsuario = form.querySelector('.usuario')
        this.inputSenha = form.querySelector('.senha')
        this.inputRepetirSenha = form.querySelector('.repetir-senha')
        this.eventos();
    }

    eventos(){
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(event){
        event.preventDefault();

        this.nome = this.inputNome.value
       // this.inputSobrenome = this.inputSobrenome.value
        this.cpf = this.inputCpf.value
        this.usuario = this.inputUsuario.value
        this.senha = this.inputSenha
        this.repetirSenha = this.inputRepetirSenha

        if(this.validarForm()){
            window.alert('Formulário validado com sucesso!')
        }

    }

    criaErro(campo, msg) {
        
        const div = document.createElement('div');
        div.classList.add('error-text')
        div.innerHTML = msg
        campo.insertAdjacentElement('afterend', div)
        campo.alreadyHasError = 1
        
    }

    limparErros(){
        for(let erro of document.querySelectorAll('.error-text')){
            erro.remove()
        }
    }

    validarForm(){
        const validaCpf = new ValidaCPF(this.cpf)
        let valido = true

        for(let campo of this.form.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerText
            this.limparErros()

            if(!campo.value){
                this.criaErro(campo, `O campo "${label}" não pode estar vazio`)
                valido = false
            }
        }

        if(this.usuario.length < 3 || this.usuario.length > 12){
            this.criaErro(this.inputUsuario, 'Usuário deverá ter entre 3 e 12 caracteres')
            valido = false
        }

        if(this.inputSenha.value !== this.inputRepetirSenha.value){
            this.criaErro(this.inputRepetirSenha, 'As senhas não coincidem')
            valido = false
        }

        if(!validaCpf.valida(this.cpf)){
            this.criaErro(this.inputCpf, 'CPF inválido')
            valido = false
        }

        return valido
    }
}   