function addContact() {
    let nome = document.getElementById('input-nome').value
    let telefone = document.getElementById('input-telefone').value

    let tabela = document.getElementById('table1')
    let novaLinha = tabela.insertRow(-1)
    let colunaNome = novaLinha.insertCell(0)
    let colunaTelefone = novaLinha.insertCell(1)

    colunaNome.innerHTML = nome
    colunaTelefone.innerHTML = telefone

}