function addItem() {
    var novaTarefa = document.getElementById('nova-tarefa').value

    var lista = document.getElementById("lista")
    var item = document.getElementById('item')
    var itens = item.content.cloneNode(true)

    // alert(novaTarefa)

    lista.appendChild(itens)
}