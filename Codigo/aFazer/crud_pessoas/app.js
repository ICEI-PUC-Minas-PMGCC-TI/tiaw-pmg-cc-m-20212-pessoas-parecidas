// declara um conjunto inicial de contatos
var db_contatos_inicial = {
  data: [
    {
      id: 1,
      nome: "Benício Pontes Caldas",
      cidade: "Belo Horizonte",
      mbti: "ESFP",
      email: "beniciopontes@gmail",
      interesses: ["Culinária", "Japônes", "Jardinagem"],
      telefone: "(31)97456-8763",
      nascimneto: "1999-05-07",
      descricao:
        "Quem não encontra a felicidade em si mesmo, é inútil procurá-la em outro lado. ",
    },
    {
      id: 2,
      nome: "Marcelo Teixeira Aragão",
      cidade: "Betim",
      mbti: "ENFJ",
      email: "marceloteara@gmail",
      interesses: ["Pagode", "Sinuca", "Cinema"],
      telefone: "(31)96374-6785",
      nascimento: "1988-04-10",
      descricao:
        "Não levante a espada sobre a cabeça de quem te pediu perdão. ",
    },
    {
      id: 3,
      nome: "Nara Albuquerque Bonilha",
      cidade: "Rio de Janeiro",
      mbti: "INFJ",
      email: "narabonilha@gmail",
      interesses: ["Viagens", "Motocicletas", "Punk Rock"],
      telefone: "(21)97867-5657",
      nascimento: "2001-06-12",
      descricao:
        "Quem perde seus bens perde muito. Quem perde um amigo perde mais.",
    },
    {
      id: 4,
      nome: "Laura Amoedo Salomão",
      cidade: "Betim",
      mbti: "ISTP",
      email: "amoesalomao.lau@gmail",
      interesses: ["Programação", "Hacking", "Literatura"],
      telefone: "(31)98762-6876",
      nascimento: "1989-11-07",
      descricao: "Todo mundo é capaz de dominar uma dor, exceto quem a sente.",
    },
    {
      id: 5,
      nome: "Thales Nascimento Figueiredo",
      cidade: "São Paulo",
      mbti: "ENTP",
      email: "nascifigueiredo@gmail",
      interesses: ["Séries", "Futebol", "Edição de Vídeo"],
      telefone: "(11)96654-1289",
      nascimento: "2000-03-10",
      descricao:
        "Mesmo tendo juízo não faço tudo certo. Todo paraíso precisa um pouco de inferno.",
    },
    {
      id: 6,
      nome: "Diego Gonçalves Barbosa",
      cidade: "Rio de Janeiro",
      mbti: "ENFP",
      email: "digbarbosa@gmail",
      interesses: ["Games", "Cinema", "Russo"],
      telefone: "(21)98762-5432",
      nascimento: "1990-04-18",
      descricao:
        "A vida é para quem topa qualquer parada. Não para quem pára em qualquer topada. ",
    },
    {
      id: 7,
      nome: "João Guilherme Almeida",
      cidade: "Belo Horizonte",
      mbti: "ISFP",
      nascimento: "1975-10-27",
      email: "jaoalmei@gmail",
      interesses: ["Atletismo", "Rap", "Musculação"],
      telefone: "(31)98677-5632",
      descricao: "Quem não estima a vida não a merece.",
    },
    {
      id: 8,
      nome: "Elisa Moraes Lima",
      cidade: "Belo Horizonte",
      mbti: "INFP",
      nascimento: "1997-07-05",
      email: "elismoaralima@gmail",
      interesses: ["Desenho", "Literatura", "História"],
      telefone: "(31)97644-3267",
      descricao:
        "Quem tem um amigo, mesmo que um só, não importa onde se encontre, jamais sofrerá de solidão.",
    },
    {
      id: 9,
      nome: "Maria Clara Souza",
      cidade: "Betim",
      mbti: "ESTJ",
      email: "souzaclara@gmail",
      interesses: ["Guitarra", "Baseball", "UFC"],
      telefone: "(31)9376-6794",
      nascimento: "1988-05-11",
      descricao:
        "É curioso como não sei dizer quem sou. Quer dizer, sei-o bem, mas não posso dizer.",
    },
    {
      id: 10,
      nome: "Cecília Costa Duarte",
      cidade: "São Paulo",
      mbti: "ESTP",
      email: "duartecosta@gmail",
      interesses: ["Piano", "Futebol", "Basquete"],
      telefone: "(11)98072-2314",
      nascimento: "1999-07-28",
      descricao: "Em toda a parte só se aprende com quem se gosta.",
    },
  ],
};

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem("db_contato"));
if (!db) {
  db = db_contatos_inicial;
}
// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
  $("#msg").html('<div class=  alert-warning">' + msg + "</div>");
}

function validaDados(contato, erros) {
  if (
    contato.nome.match(
      /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/
    ) == null
  ) {
    contato.nome = "Erro:Dado Inválido";
    erros++;
  }
  if (
    contato.email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    ) == null
  ) {
    contato.email = "Erro:Dado Inválido";
    erros++;
  }
  if (contato.telefone.match(/\([0-9]{2}\)[0-9]{5}-[0-9]{4}/) == null) {
    contato.telefone = "Erro:Dado Inválido";
    erros++;
  }
}

function deleteContato(id) {
  let len=db.data.length;
  alert(
    `Número de perfis cadastrados antes do atual é ${len
    }`
  );
  // Filtra o array removendo o elemento com o id passado
  db.data = db.data.filter(function(element) {
    return element.id != id;
  });

  alert("Contato removido com sucesso");

  // Atualiza os dados no Local Storage
  localStorage.setItem("db_contato", JSON.stringify(db));
  len=db.data.length
  alert(
    `Número de perfis cadastrados depois da deleção  é ${len}`
  );
}

function insertContato(contato) {
  // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
  let novoId = db.data[db.data.length - 1].id + 1;
  /*let perfis_cadastrados = db.data.lenght();*/
  let novoContato;
  let erros = 0;
  let len=db.data.length;
  alert(
    `Número de perfis cadastrados antes do atual é ${len}`
  );
  validaDados(contato, erros);
  for (i = 0; i < novoId; i++) {
    if (db.data[i].email == contato.email && db.data[i].nome == contato.nome) {
        db.data[i].nome = "Erro:Dado Inválido";
        db.data[i].email = "Erro:Dado Inválido";
    } else if (
      db.data[i].nome != contato.nome &&
      db.data[i].telefone != contato.telefone
    ) {
      novoContato = {
        id: novoId,
        nome: contato.nome,
        email: contato.email,
        telefone: contato.telefone,
        mbti: contato.mbti,
        interesses: contato.interesses,
        cidade: contato.cidade,
        nascimento: contato.nascimento,
        descricao: contato.descricao,
      };
      // Insere o novo objeto no array
      db.data.push(novoContato);
      alert("Contato inserido com sucesso");
      break;
    }
  }
  len=db.data.length;
  alert(
    `Número de perfis cadastrados depois de adicionar é ${len}`
  );
  // Atualiza os dados no Local Storage
  localStorage.setItem("db_contato", JSON.stringify(db));
  if (erros != 0) {
    deleteContato(novoId);
    alert(
      `Devido a uma falha na entrada de dados, o número de perfis cadastrados agora é ${toString(
        db.data.length
      )}`
    );
  }
}

function updateContato(id, contato) {
  // Localiza o indice do objeto a ser alterado no array a partir do seu ID
  let index = db.data.map((obj) => obj.id).indexOf(id);
  let len=db.data.length;
  alert(
    `Número de perfis cadastrados antes do atual é ${len}`
  );

  // Altera os dados do objeto no array
  (db.data[index].nome = contato.nome),
    (db.data[index].email = contato.email),
    (db.data[index].mbti = contato.mbti),
    (db.data[index].telefone = contato.telefone),
    (db.data[index].interesses = contato.interesses),
    (db.data[index].cidade = contato.cidade),
    (db.data[index].nascimento = contato.nascimento),
    (db.data[index].descricao = contato.descricao);

  alert("Contato alterado com sucesso");

  // Atualiza os dados no Local Storage
  localStorage.setItem("db_contato", JSON.stringify(db));
  len=db.data.length;
  alert(
    `Número de perfis cadastrados depois da alteração é ${len}`
  );
}

//Função de teste
function teste_com_mocks() {
  //Criando objetos falsos para teste
  var falso_pessoas_um = {
    id: 1043,
    nome: "B#run@ Co%%rreia ¨Rodr&ig*uez",
    cidade: "Betim",
    mbti: "ESFP",
    email: "bruno@gmail",
    interesses: [
      "Japônes",
      "Jardinagem",
      "Literatura brasileira",
      "Arte Abstrata",
    ],
    telefone: "(31)mkld56-fdkl63",
    nascimento: "1989-04-07",
    descricao:
      "Às vezes sou forte, outras não; há dias que sou feliz e outros tento ser; sou assim, fiel a quem sou!  ",
  };
  var falso_pessoas_dois = {
    id: 1134,
    nome: "Alberto Lima Torres",
    cidade: "Belo Horizonte",
    mbti: "ENTP",
    email: "albert.torres@gmail",
    interesses: ["Futebol", "Musculação", "UFC"],
    telefone: "(3&)MG%&¨*56-8763",
    nascimento: "1979-10-02",
    descricao: "Não julgue quem eu sou, porque você não sabe de onde eu vim.  ",
  };
  var falso_pessoas_tres = {
    id: 1243,
    nome: "Carlos Almeida Nascimento",
    cidade: "São Paulo",
    mbti: "ENFJ",
    email: "b@",
    interesses: ["Games", "Chinês", "RPG"],
    telefone: "(31)97456-8763",
    nascimento: "1985-02-05",
    descricao: "A verdadeira felicidade é ser exatamente quem você é!  ",
  };

  //Declarando as variaveis com as informações dos objetos falsos
  let falso_Nome_um = falso_pessoas_um.nome;
  let falso_MBTI_um = falso_pessoas_um.mbti;
  let falso_Telefone_um = falso_pessoas_um.telefone;
  let falso_Email_um = falso_pessoas_um.email;
  let falso_Cidade_um = falso_pessoas_um.cidade;
  let falso_Interesses_um = falso_pessoas_um.interesses;
  let falso_Nasci_um = falso_pessoas_um.nascimento;
  let falso_Descricao_um = falso_pessoas_um.descricao;

  let falso_Nome_dois = falso_pessoas_dois.nome;
  let falso_MBTI_dois = falso_pessoas_dois.mbti;
  let falso_Telefone_dois = falso_pessoas_dois.telefone;
  let falso_Email_dois = falso_pessoas_dois.email;
  let falso_Cidade_dois = falso_pessoas_dois.cidade;
  let falso_Interesses_dois = falso_pessoas_dois.interesses;
  let falso_Nasci_dois = falso_pessoas_dois.nascimento;
  let falso_Descricao_dois = falso_pessoas_dois.descricao;

  let falso_Nome_tres = falso_pessoas_tres.nome;
  let falso_MBTI_tres = falso_pessoas_tres.mbti;
  let falso_Telefone_tres = falso_pessoas_tres.telefone;
  let falso_Email_tres = falso_pessoas_tres.email;
  let falso_Cidade_tres = falso_pessoas_tres.cidade;
  let falso_Interesses_tres = falso_pessoas_tres.interesses;
  let falso_Nasci_tres = falso_pessoas_tres.nascimento;
  let falso_Descricao_tres = falso_pessoas_tres.descricao;
  
  //Criando os objetos a serem passados para a função
  let mock_teste_um = {
    nome: falso_Nome_um,
    mbti: falso_MBTI_um,
    telefone: falso_Telefone_um,
    email: falso_Email_um,
    interesses: falso_Interesses_um,
    cidade: falso_Cidade_um,
    nascimento: falso_Nasci_um,
    descricao: falso_Descricao_um,
  };
  let mock_teste_dois = {
    nome: falso_Nome_dois,
    mbti: falso_MBTI_dois,
    telefone: falso_Telefone_dois,
    email: falso_Email_dois,
    interesses: falso_Interesses_dois,
    cidade: falso_Cidade_dois,
    nascimento: falso_Nasci_dois,
    descricao: falso_Descricao_dois,
  };
  let mock_teste_tres = {
    nome: falso_Nome_tres,
    mbti: falso_MBTI_tres,
    telefone: falso_Telefone_tres,
    email: falso_Email_tres,
    interesses: falso_Interesses_tres,
    cidade: falso_Cidade_tres,
    nascimento: falso_Nasci_tres,
    descricao: falso_Descricao_tres,
  };
  
  insertContato(mock_teste_um);
  insertContato(mock_teste_dois);
  insertContato(mock_teste_tres);
  exibeContatos();
}
