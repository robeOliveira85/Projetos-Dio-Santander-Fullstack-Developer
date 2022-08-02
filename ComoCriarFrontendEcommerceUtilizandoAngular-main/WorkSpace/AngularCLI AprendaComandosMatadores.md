# Angular CLI : aprenda comandos matadores

- [Front-End](https://www.zup.com.br/categorias/front-end)
- • 6 maio 2020
- 

#### Neste artigo você vai ver:

- [Começando a instalação ](https://www.zup.com.br/blog/angular-cli-aprenda-comandos#texto-blog)
- [O comando mais importante do Angular CLI‍](https://www.zup.com.br/blog/angular-cli-aprenda-comandos#texto-blog)
- [Newsletter de tecnologia](https://www.zup.com.br/blog/angular-cli-aprenda-comandos#texto-blog)

> → ng new hello-world

Se você trabalhou com Angular em algum momento, muito provavelmente já se deparou com o comando acima, certo?

A ideia dessa é mostrar com **exemplos práticos como utilizar diversos comandos escondidos** (nem tanto) da ferramenta **Angular CLI** para turbinar aquelas tarefas chatas do dia a dia. 

Bora?

### Começando a instalação 

O mais importante agora é instalar a ferramenta que o angular disponibiliza para acelerar o processo de desenvolvimento: o Angular CLI. É bem simples, basta abrir um prompt de comando (CMD) e executar o comando abaixo:

> npm install -g @angular/cli

Após alguns minutos a ferramenta de linha de comando do Angular estará pronta para ser usada.

### **![❗](https://s.w.org/images/core/emoji/13.1.0/svg/2757.svg) O comando mais importante do Angular CLI** ‍

> → ng new hello-world



**Por que esse comando é tão importante?** É por ele que tudo começa! 

Qualquer projeto que usa Angular como base de um jeito ou de outro, usará esse comando. E o melhor é que podemos fazer várias coisas com esse comando principal.

Confere aí. ![🙂](https://s.w.org/images/core/emoji/13.1.0/svg/1f642.svg) 

> –routing
> ng new hello-world –routing

Esse comando ‘parametrozinho’ a mais que você coloca na linha de comando, já cria pra você um arquivo de rotas. Dá pra ter uma ideia de como padronizar a nomenclatura e estrutura de arquivos de rotas que você irá desenvolver para a sua aplicação.

> –prefix
> ng new hello-world –prefix lib



Todo projeto Angular tem como prefixo padrão a palavra ‘app’. Se você criar qualquer coisa no angular na mão e não configurar o prefixo, o validador de códigos irá dizer que você não está seguindo o padrão de codificação. 

O comando acima é **muito interessante quando você está trabalhando em alguma biblioteca**. Utilizar o prefixo padrão ‘app’ em uma biblioteca, deixa tudo muito genérico, e pra quem utiliza fica confuso a mistura de funcionalidade com biblioteca.

> –style
> ng new hello-world –style scss
> ‍

Uma das grandes vantagens do angular é poder escolher como você vai usar o CSS. Pode usar ele puro e com outros preprocessadores. A ideia do parâmetro –style é poder configurar já na criação do projeto qual “tipo” de CSS você vai poder utilizar. Alguém aí gosta de trabalhar com SCSS? Deixa nos comentários! 



> –skipGit

> ng new hello-world –skipGit=true



Se por motivos de necessidade (ou insanidade) o projeto não utilizar GIT para controle de fontes, é possível pular a inicialização do repositório GIT:) Aí é um arquivo a menos pra você pensar na cagada que está fazendo escolhendo outra ferramenta pra controle de fontes.



> –skipInstall

> ng new hello-world –skipInstall=true



Uma sugestão muito prática pra testar todos esses comandos de criação é utilizar o comando “–skipInstall”. Com isso é possível testar vários comandos, ver estrutura dos projetos em muito menos tempo pois a máquina só vai se encarregar de criar os arquivos do projeto e não vai instalar todos aqueles pacotes pesados de javascript que o angular precisa pra funcionar.

‍

→ –verbose

→ ng new hello-world –verbose=true

Mas se por algum motivo um comando simplesmente dá um erro maluco (bastante rao), o comando –verbose ajudar a enxergar onde está o projeto, ou seja, dar um log mais detalhado da criação do projeto.



> –minimal

> ng new hello-world –minimal=true



Algumas vezes a intenção é testar alguma super hiper mini MINI implementação. Por padrão a criação de um projeto Angular, cria e instala um monte de script relacionado a [testes](https://www.zup.com.br/blog/testes-de-apis-com-python-e-pytest), que não é necessário para essas provas de conceitos rápidas. O papel desse comando é agilizar a criação do projeto.

‍

**![✅](https://s.w.org/images/core/emoji/13.1.0/svg/2705.svg)Simples assim!**

A minha intenção aqui não foi mostrar todos os comandos e parâmetros, já que isso conseguimos encontrar facilmente na documentação do Angular, que é ótima. 

A ideia foi mostrar o que eu aprendi e tentar abrir um pouco as possibilidades para alguns cenários no dia a dia.

E aí, tem algum comando que você gostaria de compartilhar para criação de projetos? Deixe sua opinião nos comentários! 

Lembre-se: somos uma comunidade e é assim que crescemos ![🙂](https://s.w.org/images/core/emoji/13.1.0/svg/1f642.svg)