let botaoAdicionar = document.querySelector('#adicionar-evento')
botaoAdicionar.addEventListener('click', function (even) {
    even.preventDefault()

    let form = document.querySelector('#adiciona')

    let evento = obterValoresDoForm(form)

    let erros = validarEvento(evento)


    if (erros.length > 0) {
        exibeMensagemDeErro(erros)
        return
    }

    adicionaEventoNaTabela(evento)

    let mensagemErro = document.querySelector("#mesagens-erro")
    mensagemErro.innerHTML = ''


})
//--------------------------------------------------------------------------------------//
function validarEvento(evento) {
    let erros = []

    if (evento.nome.length == 0) {
        erros.push('O evento precisa ter nome')
    }
    if (evento.data.length == 0) {
        erros.push('O evento precisa ter data')
    }
    if (evento.horario.length == 0) {
        erros.push('O evento precisa ter horario')
    }
    if (evento.local.length == 0) {
        erros.push('O evento precisa ter local')
    }
    if (evento.status.length == 0) {
        erros.push('O evento precisa ter status')
    }
    if(evento.data.length == evento.data.length){
        erros.push('Já temos evento nessa data')
    }

    return erros
}

//-----------------------------------------------------------------------
function exibeMensagemDeErro(erros) {
    let ul = document.querySelector('#mensagens-erro')
    ul.innerHTML = ''

    erros.forEach(function (erro) {
        let li = document.createElement('li')
        li.textContent = erro
        ul.appendChild(li)
    })
}

//---------------------------------------------------------------

function adicionaEventoNaTabela(evento) {
    let eventoTr = montarTr(evento)
    let tabela = document.querySelector('#tabela-evento')
    tabela.appendChild(eventoTr)
}
//------------------------------------------------------------------

function montarTr(evento) {
    let eventoTr = document.createElement('tr')
    eventoTr.classList.add('evento')
    eventoTr.appendChild(montarTd(evento.nome, 'nome-evento'))
    eventoTr.appendChild(montarTd(evento.data, 'data-evento'))
    eventoTr.appendChild(montarTd(evento.horario, 'horario-evento'))
    eventoTr.appendChild(montarTd(evento.local, 'local-evento'))
    eventoTr.appendChild(montarTd(evento.status, 'status-evento'))
    return eventoTr

}
//----------------------------------------------------------------------------
function montarTd(dado, classe) {
    let td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)
    return td

}
//------------------------------------------------------------------------------------
function obterValoresDoForm(form) {
    let evento = {
        nome: form.nome.value,
        data: form.data.value,
        horario: form.horario.value,
        local: form.local.value,
        status: form.status.value,

    }
    return evento

}
let eventos = document.querySelectorAll('.evento')

for (var i = 0; i < eventos.length; i++) {
    let evento = eventos[i]

    let nomeTd = evento.querySelector('.nome-evento')
    let nome = nomeTd.textContent

    let dataTd = evento.querySelector('.data-evento')
    let data = dataTd.textContent

    let horarioTd = evento.querySelector('.horario-evento')
    let horario = horarioTd.textContent

    let localTd = evento.querySelector('.local-evento')
    let local = localTd.textContent

    let statusTd = evento.querySelector('.status-evento')
    let status = statusTd.textContent

}