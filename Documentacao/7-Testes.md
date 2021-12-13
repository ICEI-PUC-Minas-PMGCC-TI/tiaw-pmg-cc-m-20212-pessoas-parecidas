# Avaliação da Aplicação

O processo de realização dos testes da solução desenvolvida está documentado na seção
que se segue e traz os planos de testes de software e de usabilidade, na sequência, o
registro dos testes realizados.

## Plano de Testes: Software
Requisitos para realização do teste:
- Site publicado na Internet
- Navegador da Internet - Chrome, Firefox ou Edge
- Conectividade de Internet para acesso às plataformas (APIs)

Os testes funcionais a serem realizados no aplicativo são descritos a seguir.
| Caso de teste      | *CT-01 -> login e cadastro*                                                                                                                                                       |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos         | R-01 -> O site deve ser capaz de realizar o login de um usuário anteriormente cadastrado;<br /> R-02 -> O site também deve ser capaz de adcionar um novo cadastro.                |
| Objetivo do Teste  | O teste busca verificar se a função de login estão funcionando, para garantir o acesso ao site.                                                                                   |
| Passos             | 1º Acessar O site <br /> 2º entrar no sistema de nova conta(pelo botão nova conta) <br /> 3º preencher o formulário corretamente <br /> 4º Logar com a senha e login cadastrados. |
| Critérios de Êxito | Após o resgitro e o login a uma tela para o preenchimento de novas informações vai carregar.                                                 |

| Caso de teste      | *CT-02 -> cadastro de usuário*                                                                                                               |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos         | R-01 -> O site deve ser capaz de realizar o cadastro de um novo usuário para seus contatos;<br /> R-02 -> O site também deve ser capaz de editar esse cadastro. |
| Objetivo do Teste  | O teste busca verificar se as funções de cadastro estão funcionando,<br /> para garantir as funcionalidades de contatos do site.             |
| Passos             | 1º Realizar o login <br /> 2º Quando a página carregar, clique em "contatos" e preencha corretamente  <br /> 3º Enviei as iformações.        |
| Critérios de Êxito | Após o cadastro um novo cadastri ira aparecer na lista.                                                                                      |

| Caso de teste      | *CT-03 -> cadastro de Eventos*                                                                                                                      |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos         | R-01 -> O site deve ser capaz de realizar realizar o cadastro de um novo evento;<br /> R-02 -> O site também deve ser capaz de editar esse cadastro.|
| Objetivo do Teste  | O teste busca verificar se as funções de cadastro estão funcionando, para garantir que as funções de eventos do site possam ser utilizadas. |
| Passos             | 1º Acessar a aba de grupos e dentro dela a de eventos <br /> 2º  <br /> 3º preencher o formulário corretamente <br /> 4º Logar com a senha e login cadastrados. |
| Critérios de Êxito | Depois do registro um novo evento deve aparecer na lista de eventos.                                              |

| Caso de teste      | *CT-04 -> Api para previsão do tempo*                                                                             |
| ------------------ | ----------------------------------------------------------------------------------------------------------------- |
| Requisitos         | R-01 -> O site deve ser capaz de mostrar a previsão do tempo de uma cidade, usando somente seu nome;              |
| Objetivo do Teste  | O teste busca verificar se as funções de previsão do tempo pela API openWheatherMap funcionam.                    |
| Passos             | 1º Acessar a aba de grupos e dentro dela a de eventos <br /> 2º Entrar com o nome da cidade desejada              |
| Critérios de Êxito | Ao pesquisar a previsão do clima para a semana aparecerá.                                                         |


| Caso de teste      | *CT-05 -> Api para o tempo atual*                                                                                 |
| ------------------ | -------------------------------------------------------------------------------------------------------------- |
| Requisitos         | R-01 -> O site deve ser capaz de mostrar o clima atual utilizando a Geolocalização do computador.              |
| Objetivo do Teste  | O teste busca verificar se as funções de exibição do clima pela API openWheatherMap funcionam.                 |
| Passos             | 1º Acessar a aba de calendário do usuário <br /> 2º Conceder ao site acesso à geolocalização                       |
| Critérios de Êxito | Com isso o clima atual será exibido.                                                                           |

| Caso de teste      | *CT-06 -> geolocalização*                                                                                        |
| ------------------ | ---------------------------------------------------------------------------------------------------------------- |
| Requisitos         | R-01 -> O site deve ser capaz de mostrar um mapa com as posições de Long. e lati. forcidas para uma api.         |
| Objetivo do Teste  | O teste busca verificar se a função de mapa esta funcional.                                                      |
| Passos             | 1º Acesse um perfil de usuários.                                                                                   |
| Critérios de Êxito | Ao entrar nessa pagina um mapa irá aparecer.                                                                     |
                                                                         
| Caso de teste      | *CT-07 -> Postagem*                                                                                                                                                     |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos         | R-01 -> O Usuário deve ser capaz de realizar uma postagem com uma imagem e texto.                                          |
| Objetivo do Teste  | O teste busca verificar se as postagens estão funcionais, permitindo que o usuário possa interagir nos grupos do site.     |
| Passos             | 1º Acessar a aba de grupos e nela acessar a aba de postagens<br /> 2º clicar no botão "escolher"<br /> 3º escolha uma imagems e clique em abrir <br /> 4º No post abaixo clique em comentar, escreva algo e envie o comentário.                                                                             |
| Critérios de Êxito | O comentário e a imagem devem aparecer na página.                                                                          |



## Registro de Testes de Software
Os resultados obtidos nos testes de software realizados são descritos na Tabela a seguir
  | Testes realizados | Resultados positivos |  Resultados negativos |
  |-------------------|----------------------|-----------------------|
  |1º - Teste de Login  | Após a entrada de informações validadas pelos testes lógicos o usuário logou no site | Após a entrada de informações invalidadas pelos testes lógicos, não foi possivel logar no site |
  |2º - Teste de cadastro de usuário | Após a entrada de informações validadas pelos testes lógicos a pessoa foi cadastrada no site | Após a entrada de informações invalidadas pelos testes lógicos, não foi possivel cadastra-la no site |
  |3º - este de cadastro de Eventos | Após a entrada de informações validadas pelos testes lógicos o evento foi cadastrado no site | Após a entrada de informações invalidadas pelos testes lógicos, não foi possivel cadastra-lo no site | 
  |4º - Teste de Api para previsão do tempo | Após a entrada do nome de uma cidade, a api devolve a previsão do tempo | Após a entrada de informações invalidas para a api, uma mensagem de erro aparece |
  |5º - Teste de Api para o tempo atual | Ao conceder ao site o acesso a sua geolocalização o relatorio do clima atual deve aparecer| Se não for concedido acesso o resultado exibido será "desconhecido"|
  |6º - Teste de geolocalização | O mapa exibiu corretamente a posição equivalente aos pontos de latitude e longitude | Após a entrada de informações invalidadas pela api o mapa não exibe nenhum ponto |
  |7º - Teste de Postagem | Ao selecionar um arquivo aceito pelo sistema a foto é postada | Ao selecionar um arquivo que não é aceito pelo sistema, não haverá postagem |

## Plano de Testes de Usabilidade
  O planejamento dos testes de usabilidade a serem realizados com usuários são descritos na Tabela a seguir.
- Identificação de objetivos do teste de usabilidade
- Detalhes do público envolvido nos testes
- Roteiro detalhado das tarefas que foram desempenhadas pelos usuários

## Objetivos dos testes:
  Os testes realizados com os usuários

## testes realizados
  | Testes realizado  | Testers              | Resultados            |
  |-------------------|----------------------|-----------------------|
  | Interação com o Calendário | João Carlos | O usuário conseguiu navegar pela página corretamente|
  | Interação com o Calendário | Maria Clara | O usuário teve certa dificuldade com as informações do calendário(fonte pequena)|
  | Navegação entre páginas | Artur silva | O usuário foi pedido para chegar até seu perfil, sem informação prévia do formato do site. Ao final do teste ficou claro o formato didático da navegação dentro do site| 
  | Navegação entre páginas | Guilherme Oliveira | O usuário foi pedido para chegar até seu perfil, sem informação prévia do formato do site. Ao final do teste ficou claro o formato didático da navegação dentro do site| 
  | Cadastro e login | João Carlos | O usuário criou e logou em sua conta sem dificuldades(conhecia os MBTI)|
  | Cadastro e login | Tiago Costa | O usuário criou e logou em sua conta com uma única dificuldade( pediu ajuda com o teste MBTI)|
  | Postagem | Artur Silva | O úsuario tentou upar um PDF(não aceito pelo sistema)|
  | Postagem | Guilherme Oliveira | O úsuario tentou upar um PNG com sucesso|
  | Clima do dia | Maria Clara | Ao dar permisão de acesso à geolocalização o Clima atual foi apresentado com sucesso |
  | Clima do dia | Tiago Costa | Ao negar permisão de acesso à geolocalização o Clima atual não foi apresentado |

## Registro de Testes de Usabilidade
Os resultados obtidos nos testes de usabilidade realizados são descritos na Tabela a seguir.
- Relatório com detalhamento das pessoas envolvidas no teste (indicar claramente o
número de usuários que testaram o sistema)
- Relatório com registro dos testes feitos: fotos, prints de telas, relatos dos usuários
- Relatório de problemas identificados nos testes e propostas de correções/ajustes

## Testes realizados por:
  -Artur Silva;
  -Guilherme de Oliveira;
  -João Carlos;
  -Maria Clara;
  -Tiago Costa;
  Observação: Cada um deles realizou dois testes, que foram sorteados aleatoriamnete.
  
### interação com calendário
  Esse teste foi realizado por duas pessoas:
| participantes | resultados | mudanças |
| ------------- | ---------- | -------- |
| Maria Clara   | sentiu que as letras poderiam ser maiores | Por isso almentamos a fonte |
| João Carlos   | Conseguiu navegar sem dificuldades | Nenhuma modificação realizada |
 - Maria Clara: "achei a letra do calendário muito miudinha, se meu pai quisesse usar isso aqui ele teria que dar zoom na página"
  
### Navegação entre páginas
  Esse teste foi realizado por duas pessoas:
| participantes | resultados | mudanças |
| ------------- | ---------- | -------- |
| Artur Silva   | Conseguiu navegar sem dificuldades | Nenhuma modificação realizada |
| Guilherme de Oliveira| Conseguiu navegar sem dificuldades | Nenhuma modificação realizada |
- Artur Silva: "As páginas estão bem faceis de navegar "
- Guilherme de Oliveira: "Realmente não tem muito o que falar, o desing só "tá" bom mesmo"

### Casdastro e login
  Esse teste foi realizado por duas pessoas:
| participantes | resultados | mudanças |
| ------------- | ---------- | -------- |
| João Carlos   | Conseguiu navegar sem dificuldades | Nenhuma modificação realizada |
| Tiago Costa   | Não conhecia o teste de MBTI | Foi adcionado o link para o texte |
 - Tiago Costa: "Eu não conhecia o teste MBTI, fiquei até assustado com a precisão da analise deles(Se referindo à analise do teste)"

### Postagem
  Esse teste foi realizado por duas pessoas:
| participantes | resultados | mudanças |
| ------------- | ---------- | -------- |
| Artur Silva   | Tentou enviar um PDF | Limitamos os tipos de arquivos |
| Guilherme de Oliveira  | Fez uma postagem corretamente | Nenhuma modificação realizada |
  - Artur Silva: "Eu só enviei o primeiro arquivo que eu vi, foi mau"

### Clima do dia
  Esse teste foi realizado por duas pessoas:
| participantes | resultados | mudanças |
| ------------- | ---------- | -------- |
| Maria Clara   | Deu permisão de acesso à geolocalização, clima apresentado | Nenhuma modificação realizada |
| Tiago Costa   | Não deu permisão de acesso à geolocalização, clima não apresentado | Nenhuma modificação realizada |

