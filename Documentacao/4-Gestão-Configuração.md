# Gestão de Configuração

> Nesta parte do documento, você deve apresentar como foi realizada a
> gestão de configuração do projeto. Isto é, como a ferramenta de
> controle de versão foi configurada, bem como a hospedagem da
> plataforma.

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório `upstream`.

O projeto segue a seguinte convenção para o nome de branchs:

- `master`: versão estável já testada do software
- `gh-pages` : versão que está sendo hospedada
- `unstable`: versão já testada do software, porém instável
- `testing`: versão em testes do software
- `develop`: versão de desenvolvimento do software
- `release`: prepara o projeto para uma nova versão em produção
- `hotfixes`: versão com algum erro com necessidade de correção imediata
- `feature`: versão com nova funcionalidade de um release bem mais no futuro

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `bugfix`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida
- `unknownbug`: problema não rastreado
- `needresearch`: precisa de mais pesquisa para implementar
- `documentation`: incremento ou adicionamento na documentação
- `duplicate`: esse issue ou pull request já existia
- `good first issue`: comece por aqui
- `team help`: integrante precisando de ajuda na tarefa
- `attention`: atenção extra é necessária
- `invalid`: essa parte parece errada
- `question`: mais informações necessárias para o pull request
- `wontfixnow`: isso não será trabalhado agora
- `needtest`: está pronto e necessita ser testado
- `passedontest`: passou na fase de testes

Esse projeto possui oito branchs,no início do desenvolvimento o código
começará no `develop`,caso suja a ideia de uma funcionalidade que pode 
modificar muito o código e será implementada somente em versões futuras 
ele será feito no branch`feature` e será criado um issue sobre isso com a 
tag `wontfixnow`,e quando ficar pronta poderá ser feito o pull request 
aos outros integrante para permitir o pull do `feature` para o `develop`.

As issues tags `duplicate`,`needtest`,`good first issue`,`feature` e `needresearch`são utilizadas
dentro do  `develop` branch para orientar a equipe.Já as issues tags
`question`,`invalid`,`attention`,`team help` e `documentation` são usadas globalmente disponíveis em todos
os branchs.

Quando a equipe estiver confiante na versão,porém ela ainda não foi testada ela ficará no 
`release` até poder ser testada.Caso uma versão apresentar falhas significativa que precise ser
corrigida com prioridade ela será merged para `hotfixes`,e quando acabar voltará para `develop`
e depois `release`.

Caso a versão esteja pronta para teste,merged para `testing`e depois para `unstable`
onde será testada,se passar em todos os testes será merged para o `master` e depois `gh-pages`onde será hospedada usando Github 
Pages.Entretanto,se falhar nos testes voltará para `develop`,onde será criado issues usando tags
`bugfix`,`unknownbug` e `enhancement` para informar os problemas encontrados nos testes.

Os commits aconteceram todas as vezes em que alteração no repositório ou uma alteração de código que passado por um teste local
e não apresentou erros durante sua fase de desenvolvimento.


> Discuta como a configuração do projeto foi feita na ferramenta de
> versionamento escolhida. Exponha como a gerência de tags, merges,
> commits e branchs é realizada. Discuta como a gerência de issues foi
> realizada.
>
> **Links Úteis**:
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)

## Hospedagem

> Explique como a hospedagem e o lançamento da plataforma foi feita.
>
> **Links Úteis**:
>
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Crie seu Site com o
>   HostGator](https://www.hostgator.com.br/como-publicar-seu-site)
> - [GoDady](https://br.godaddy.com/how-to)
> - [GitHub Pages](https://pages.github.com/)
