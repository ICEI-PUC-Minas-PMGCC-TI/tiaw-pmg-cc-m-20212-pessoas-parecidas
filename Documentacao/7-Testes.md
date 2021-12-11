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
| Critérios de Êxito | Após o resgitro e o login a uma tela para o preenchimento de novas informações vai carregar.                                                                                      |

| Caso de teste      | *CT-02 -> cadastro de usuário*                                                                                                               |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos         | R-01 -> O site deve ser capaz de realizar o cadastro de um novo usuário;<br /> R-02 -> O site também deve ser capaz de editar esse cadastro. |
| Objetivo do Teste  | O teste busca verificar se as funções de cadastro estão funcionando,<br /> para garantir as funcionalidades de contatos do site.             |
| Passos             | 1º Realizar o login <br /> 2º Quando a página carregar, preencha-a com informações corretas  <br /> 3º Enviei as iformações.                 |
| Critérios de Êxito | Após o cadastro a homepage deve carregar.                                                                                                    |



| Caso de teste      | *CT-03 -> cadastro de Eventos*                                                                                                                                  |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos         | R-01 -> O site deve ser capaz de realizar realizar o cadastro de um novo evento;<br /> R-02 -> O site também deve ser capaz de editar esse cadastro.            |
| Objetivo do Teste  | O teste busca verificar se as funções de cadastro estão funcionando, para garantir que as funções de eventos do site possam ser utilizadas.                     |
| Passos             | 1º Acessar a aba de grupos e dentro dela a de eventos <br /> 2º  <br /> 3º preencher o formulário corretamente <br /> 4º Logar com a senha e login cadastrados. |
| Critérios de Êxito | Depois do registro um novo evento deve aparecer na lista de eventos.                                                                                            |



| Caso de teste      | *CT-04 -> Api para previsão do tempo*                                                                                                                                          |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos         | R-01 -> O site deve ser capaz de mostrar a previsão do tempo de uma cidade, usando somente seu nome;              |
| Objetivo do Teste  | O teste busca verificar se as funções de previsão do tempo pela API openWheatherMap funcionam.                    |
| Passos             | 1º Acessar a aba de grupos e dentro dela a de eventos <br /> 2º Entrar com o nome da cidade desejada              |
| Critérios de Êxito | Ao pesquisar a previsão do clima para a semana aparecerá.                                                         |





| Caso de teste      | *CT-05 -> Api para o tempo atual*                                                                                                                                                     |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos         | R-01 -> O site deve ser capaz de mostrar o clima atual utilizando a Geolocalização do computador.              |
| Objetivo do Teste  | O teste busca verificar se as funções de exibição do clima pela API openWheatherMap funcionam.                 |
| Passos             | 1º Acessar a aba de perfil do usuário <br /> 2º Conceder ao site acesso à geolocalização                       |
| Critérios de Êxito | Com isso o clima atual será exibido.                                                                           |



| Caso de teste      | *CT-06 -> geolocalização*                                                                                                                                                     |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos         | R-01 -> O site deve ser capaz de mostrar um mapa com as posições de Long. e lati. forcidas para uma api.         |
| Objetivo do Teste  | O teste busca verificar se a função de mapa esta funcional.                                                      |
| Passos             | 1º Acesse um perfil de usuário                                                                                   |
| Critérios de Êxito | Ao entrar nessa pagina um mapa irá aparecer.                                                                     |


| Caso de teste      | *CT-07 -> Calendário*                                                                                            |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos         | R-01 -> O site deve ser capaz de mostrar no calendário eventos cadastrados;                                      |
| Objetivo do Teste  | O teste busca verificar se o calendário esta funcional.                                                          |
| Passos             | 1º Acessar a aba de calendário <br />                                                                            |
| Critérios de Êxito | Verificar se o evento esta presente.                                                                             |



| Caso de teste      | *CT-08 -> Postagem*                                                                                                                                                     |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos         | R-01 -> O Usuário deve ser capaz de realizar uma postagem com uma imagem e texto.                                |
| Objetivo do Teste  | O teste busca verificar se as postagens estão funcionais, permitindo que o usuário possa interagir nos grupos do site.     |
| Passos             | 1º Acessar a aba de grupos e nela acessar a aba de postagens<br /> 2º clicar no botão "escolher"<br /> 3º escolha uma imagems e clique em abrir <br /> 4º No post abaixo clique em comentar, escreva algo e envie o comentário. |
| Critérios de Êxito | O comentário e a imagem devem aparecer na página.                                                                                                                             |


> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> - [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Avaliação

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.
