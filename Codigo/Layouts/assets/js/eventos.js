// declara um conjunto inicial de eventos
var db_eventos_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Campeonato de xadrez",
            "cidade": "Belo Horizonte",
            "categoria": "Campeonato",
            "rua": "Rua das dores 290",
            "data_evento": "2021-11-27",
            "hora_evento": "13:50"
        },
        {
            "id": 2,
            "nome": "Viagem italia",
            "cidade": "Belo horizonte",
            "categoria": "Viagem",
            "rua": "Rua do aeroporto 001",
            "data_evento": "2021-11-27",
            "hora_evento": "23:59"
        },
        {
            "id": 3,
            "nome": "中文课",
            "cidade": "Rio de Janeiro",
            "categoria": "Estudos",
            "rua": "Avenida paulista 1520",
            "data_evento": "2021-11-27",
            "hora_evento": "14:10"
        },
        {
            "id": 4,
            "nome": "Estudos Teológicos",
            "cidade": "Betim",
            "categoria": "Estudos",
            "rua": "Rua das dores 401",
            "data_evento": "2021-11-27",
            "hora_evento": "09:50"
        },
        {
            "id": 5,
            "nome": "吃中国菜",
            "cidade": "São Paulo",
            "categoria": "Comida",
            "rua": "Bairro liberdade 340",
            "data_evento": "2021-11-27",
            "hora_evento": "12:00"
        },
        {
            "id": 6,
            "nome": "Clube de golfe",
            "cidade": "Rio de Janeiro",
            "categoria": "trabalho",
            "rua": "Rua do golfe 3004",
            "data_evento": "2021-11-27",
            "hora_evento": "14:59"
        },
        {
            "id": 7,
            "nome": "Guitar Heroes",
            "cidade": "Belo Horizonte",
            "categoria": "Musica",
            "rua": "Rua dos guitarristas 309",
            "data_evento": "2022-03-12",
            "hora_evento": "13:40"
        },
        {
            "id": 8,
            "nome": "CryptoLosers",
            "cidade": "Palmas",
            "categoria": "Estudos",
            "rua": "Rua da capital 201",
            "data_evento": "2021-11-27",
            "hora_evento": "09:30"
        },
        {
            "id": 9,
            "nome": "Grupo lorem ipsum",
            "cidade": "Palmas",
            "categoria": "Estudos",
            "rua": "Rua lorem ipsum dolor sit amet 42",
            "data_evento": "2023-11-21",
            "hora_evento": "10:50"
        },
        {
            "id": 10,
            "nome": "Grupo de Caligrafia",
            "cidade": "São Paulo",
            "categoria": "Amigos",
            "rua": "Bairro liberdade 3309",
            "data_evento": "2022-9-13",
            "hora_evento": "15:50"
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_evento'));
if (!db) {
    db = db_eventos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertevento(evento) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0)
        novoId = db.data[db.data.length - 1].id + 1;
    let novoevento = {
        "id": novoId,
        "nome": evento.nome,
        "cidade": evento.cidade,
        "categoria": evento.categoria,
        "rua": evento.rua,
        "data_evento": evento.data_evento,
        "hora_evento": evento.hora_evento
    };

    // Insere o novo objeto no array
    db.data.push(novoevento);
    displayMessage("evento inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_evento', JSON.stringify(db));
}

function updateevento(id, evento) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = evento.nome,
        db.data[index].cidade = evento.cidade,
        db.data[index].categoria = evento.categoria,
        db.data[index].data_evento = evento.data_evento,
        db.data[index].hora_evento = evento.hora_evento

    displayMessage("evento alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_evento', JSON.stringify(db));
}

function deleteevento(id) {
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("evento removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_evento', JSON.stringify(db));
}
function dataAtual() {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    return date;
}
function dataMinima() {
    document.getElementById("inputevento").min = dataAtual();
}
function zerarLocalStorage() {
    window.localStorage.clear();
}
