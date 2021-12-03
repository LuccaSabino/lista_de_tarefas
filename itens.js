function inputEnter() {

    var enter = document.getElementById('nova-tarefa');

    enter.addEventListener('keypress', (e) => {

        if (e.keyCode == 13) {
            addItem()
        }
    })
}

function addItem() {

    var novaTarefa = document.getElementById('nova-tarefa');

    var lista = document.getElementById('lista');
    var item = document.getElementById('item');
    var tarefa = item.content.cloneNode(true);

    var li = tarefa.querySelector('li');

    if (novaTarefa.value != '') {

        lista.appendChild(tarefa);
        li.append(novaTarefa.value);

    };

    novaTarefa.value = '';



};

function deletarItem(botao) {
    botao.parentElement.remove();

};



