function adicionarTarefa() {
    const input = document.getElementById('novaTarefa');
    const textoTarefa = input.value.trim();

    if (textoTarefa === '') {
        alert('Por favor, digite uma tarefa!');
        return;
    }

    const lista = document.getElementById('listaTarefas');
    const novoItem = document.createElement('li');

    // Cria a checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onchange = function () {
        concluirTarefa(this);
    };

    // Cria o texto da tarefa
    const span = document.createElement('span');
    span.textContent = textoTarefa;

    // Adiciona a checkbox e o texto dentro do <li>
    novoItem.appendChild(checkbox);
    novoItem.appendChild(span);

    lista.appendChild(novoItem);
    input.value = '';
}

function concluirTarefa(checkbox) {
    // Pega o elemento <span> que está logo ao lado da checkbox
    const span = checkbox.nextElementSibling;
    
    if (checkbox.checked) {
        span.classList.add('concluida');
    } else {
        span.classList.remove('concluida');
    }
}