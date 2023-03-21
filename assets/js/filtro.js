let campoFiltro = document.querySelector('#filtrar-tabela')

campoFiltro.addEventListener('input', function () {
    let pacientes = document.querySelectorAll('.evento')

    if (this.value.length > 0) {
        for (let i = 0; i < eventos.length; i++) {
            let evento = eventos[i]
            let tdNome = evento.querySelector('.nome-evento')
            let nome = tdNome.textContent
            let expressao = new RegExp(this.value, 'i')

            if (!expressao.test(nome)) {
                evento.classList.add('erro-busca')
            } else {
                evento.classList.remove('erro-busca')
            }
        }

    } else {
        for (let i = 0; i < eventos.length; i++) {
            let evento = eventos[i]
            eventos.classList.remove('erro-busca')
        }
    }

})