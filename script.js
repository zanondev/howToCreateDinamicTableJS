//1) pegar o ID da tag FORM 
const form = document.getElementById("form");
//2) pegar o ID da tag TABLE
const table = document.getElementById("table");
//3) pegar o id dos INPUT (informaçoes do usuario)
const nome = document.getElementById("nome");
const telefone = document.getElementById("telefone");
//4) função de manipulador do SUBMIT
const submitEvent = (event) => {
    //evitar de dar refresh
    event.preventDefault();
    //criar o objeto relacionado as info do usuario
    const aluno = {
        nome: nome.value,
        telefone: telefone.value,
        status: 'pendente',
    };
    //funcao para adicionar o objeto na tabela
    addTable(aluno);
}
//5) funcao para adicionar o objeto na tabela
const addTable = (aluno) => {
    //criar tag TR 
    const newRow = document.createElement('tr');
    //criar tag TD de cada coluna da tabela
    const columnName = document.createElement('td');
    //inserir valor para o TD
    columnName.textContent = aluno.nome;
    //inserir o TD na posição de filho da TR
    newRow.appendChild(columnName);

    //repetindo a criacao de TD, valor TD e posição TD para os demais itens
    const columnPhone = document.createElement('td');
    columnPhone.textContent = aluno.telefone;
    newRow.appendChild(columnPhone);

    const columnStatus = document.createElement('td');
    columnStatus.textContent = aluno.status;
    newRow.appendChild(columnStatus);

    //cria linha nova na primeira posicao do corpo da tabela
    table.getElementsByTagName('tbody')[0].appendChild(newRow);

}

//) fazer o eventListener do SUBMIT
form.addEventListener("submit", submitEvent);

//A PARTIR DAQUI A TABELA JÁ ESTÁ PRONTA! ABAIXO OUTRA FUNCAO PARA MUDAR COMPORTAMENTO DA TABELA NO EVENTO DE CLIQUE

//6) funcao para manipular o status no evento de clique
const changeStatus = (event) => {
    //condicao do clique ser na tag TD -> nao sei pq mas o TD tem q ser maiusculo
    if (event.target.tagName === 'TD') {
        //definir uma constante com o pai do target (o pai vai ser o TR)
        const row = event.target.parentElement;
        //classList -> criando uma classe CSS na linha para alterar o CSS no evento também (mudar cor da linha)
        row.classList = 'Feito';
        //pega a ultima coluna (que é a de status)
        const columnStatus = row.querySelector('td:last-child');
        //textcontent -> escrevendo 'Feito'
        columnStatus.textContent = 'Feito';
    }
}
//7) usamos event bubbling para não precisar definir para cada td
table.addEventListener('click', changeStatus);


