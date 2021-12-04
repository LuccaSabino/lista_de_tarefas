// // Para usar o enter do teclado no elemento input
var enter = document.getElementById('nova-tarefa');

enter.addEventListener('keyup', (e) => {

    if (e.key === "Enter") {
        addItem();
    };
});

// // Para adicionar uma nova tarefa

function addItem() {

    var novaTarefa = document.getElementById('nova-tarefa');

    var lista = document.getElementById('lista');
    var item = document.getElementById('item');
    var tarefa = item.content.cloneNode(true);

    var span = tarefa.querySelector('span');
    var nmrDeItens = lista.children.length;

    if (novaTarefa.value != '') {

        // var nmrDeItens = lista.children.length;

        // if (nmrDeItens % 2 == 0) {

        //     tarefa.style.backgroundColor = 'pink'


        // }

        // if (nmrDeItens % 3 == 0) {
        //     tarefa +=

        // }


        lista.appendChild(tarefa);
        span.append(novaTarefa.value);

    };

    novaTarefa.value = '';



};


// // Para remover alguma tarefa

function deletarItem(botao) {
    botao.parentElement.remove();

};

