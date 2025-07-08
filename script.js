document.getElementById("btnAdicionar").addEventListener("click", adicionarTarefa);

function adicionarTarefa() {
    const inputTexto = document.getElementById("tarefa");
    const inputHora = document.getElementById("horaTarefa");
    const inputData = document.getElementById("dataTarefa");

    const textoTarefa = inputTexto.value.trim();
    const horaSelecionada = inputHora.value;
    const dataSelecionada = inputData.value;

    if (textoTarefa && horaSelecionada && dataSelecionada) {
        const lista = document.getElementById("listaTarefas");
        const li = document.createElement("li");

        const dataFormatada = new Date(dataSelecionada).toLocaleDateString('pt-BR');

        li.innerHTML = `
            <div>
                <strong>${textoTarefa}</strong>
                <small>Agendado para ${dataFormatada} às ${horaSelecionada}</small>
            </div>
            <button onclick="removerTarefa(this)">X</button>
        `;

        lista.appendChild(li);

        inputTexto.value = "";
        inputHora.value = "";
        inputData.value = "";
    } else {
        alert("Preencha a tarefa, a data e o horário!");
    }
}

function removerTarefa(botao) {
    const li = botao.parentNode;
    li.remove();
}