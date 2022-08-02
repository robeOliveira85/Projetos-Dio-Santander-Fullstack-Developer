# Um overview sobre o framework Angular

- maio 21, 2021
- [2 Comments](https://blog.geekhunter.com.br/um-overview-sobre-o-framework-angular/#disqus_thread)

E aí, vamos falar sobre Angular? 🤩

Quando decidimos utilizar uma tecnologia em um novo projeto, é natural que uma das primeiras coisa que façamos seja entender o **propósito que essa tecnologia tem a oferecer** e como podemos ter um maior aproveitamento de suas funcionalidades e características.

Para adquirir este entendimento é necessário ter uma **visão geral** da arquitetura dessa tecnologia.

Pensando nisso, vamos demonstrar neste artigo uma visão geral da arquitetura do **Angular** e, assim, possibilitar aos leitores a oportunidade de entender melhor como funciona este fantástico *framework*.

Dá uma olhada no que você vai ler hoje:

**Conteúdo** [ocultar](https://blog.geekhunter.com.br/um-overview-sobre-o-framework-angular/#) 

[1 O que é o framework Angular?](https://blog.geekhunter.com.br/um-overview-sobre-o-framework-angular/#O_que_e_o_framework_Angular)

[2 Qual a diferença entre Angular e AngularJS?](https://blog.geekhunter.com.br/um-overview-sobre-o-framework-angular/#Qual_a_diferenca_entre_Angular_e_AngularJS)

[3 A arquitetura do framework Angular](https://blog.geekhunter.com.br/um-overview-sobre-o-framework-angular/#A_arquitetura_do_framework_Angular)

[3.1 NgModules](https://blog.geekhunter.com.br/um-overview-sobre-o-framework-angular/#NgModules)

[3.2 Components](https://blog.geekhunter.com.br/um-overview-sobre-o-framework-angular/#Components)

[3.3 Directives](https://blog.geekhunter.com.br/um-overview-sobre-o-framework-angular/#Directives)

[3.4 Interpolation](https://blog.geekhunter.com.br/um-overview-sobre-o-framework-angular/#Interpolation)

[3.5 Dependency injection (DI)](https://blog.geekhunter.com.br/um-overview-sobre-o-framework-angular/#Dependency_injection_DI)

[4 Angular CLI](https://blog.geekhunter.com.br/um-overview-sobre-o-framework-angular/#Angular_CLI)

[5 Angular SPAs](https://blog.geekhunter.com.br/um-overview-sobre-o-framework-angular/#Angular_SPAs)

[6 Considerações Finais](https://blog.geekhunter.com.br/um-overview-sobre-o-framework-angular/#Consideracoes_Finais)

## **O que é o framework Angular?**

![tela roxa com o que e angular escrito logo da angular a direita e da geekhunter embaixo](https://blog-geek-midia.s3.amazonaws.com/wp-content/uploads/2019/10/01121304/o-que-e-o-angular-1024x576.jpg)

**Angular** é um *framework* para desenvolver aplicações em diversas plataformas, mantido e desenvolvido pela **Google**.

Você pode reutilizar o código escrito para web, web mobile, mobile native e desktop native!

Ele vem com um **conjunto de bibliotecas** poderosas que podemos importar, possibilitando construir aplicações com uma qualidade e produtividade surpreendente.

Além disso, o Angular coloca você no controle da escalabilidade, atendendo aos enormes requisitos de dados construindo modelos em RxJS, Immutable.js ou outro push-model.

Ele é uma reescritura completa do antigo A*ngular*JS e foi escrito em **[TypeScript](https://blog.geekhunter.com.br/typescript-3-4-as-novidades/)**.

> Veja quais são os [Frameworks e Bibliotecas de Javascript](https://blog.geekhunter.com.br/frameworks-javascript-e-bibliotecas-java/) mais importantes!

## Qual a diferença entre Angular e AngularJS?

Para início de conversa, **o AngularJS é um framework** a parte. Lançado em 2009, ele é a versão 1.0 do conceito que vemos hoje.

Com o passar dos anos e a evolução das tecnologias Web, houve a necessidade de evoluir o AngularJS como era conhecido.

Por não conseguir mais acompanhar com performance as novidades como Javascript 2015, HTML 5, o CSS 3, etc., surgiu a necessidade de reescrever (criar outro) framework por completo.

Em 2016, saiu o Angular V2, um **outro framework** totalmente reescrito e adaptado. O Typescript foi escolhido por ser um superset de Javascript, implementando mais possibilidades para a linguagem.

Esse é o Angular que estamos falando aqui.

**As diferenças mais notáveis são:**

- Um é baseado na linguagem Javascript e o outro em Typescript;
- AngularJS não foi construído considerando o suporte mobile, já o Angular é totalmente orientado ao mobile.
- O Angular ficou mais simples que o AngularJS, além da sintaxe que é totalmente diferente, agora o ng-for, por exemplo, é *ngFor. O padrão da sintaxe é camelcase.
- A presença do Angular CLI na nova versão.
- A velocidade do Angular é 5x mais alta que o AngularJS, graças ao algoritmo de dados.

[![img](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20720%20200'%3E%3C/svg%3E)](https://www.geekhunter.com.br/criar-perfil-gratis?utm_source=blog&utm_medium=banner&utm_campaign=overview_sobre_angular)

## A arquitetura do framework Angular

![tela roxa coma arquitetura do angular escrito logo da angular a direita e da geekhunter embaixo](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201024%20576'%3E%3C/svg%3E)

A arquitetura do **Angular** permite organizar a aplicação por módulos através dos *NgModules,* que fornecem um contexto para os componentes serem compilados.

Uma aplicação sempre tem ao menos um **módulo raiz** que habilita a inicialização e, normalmente, possui outros módulos de bibliotecas. 

Os componentes deliberam as visualizações — que são conglomerados de elementos e funcionalidades de tela — que o Angular modifica de acordo com a lógica e os dados da aplicação.

Esses componentes usam serviços que fornecem funcionalidades específicas e que são indiretamente relacionadas a essas visualizações.

Os **provedores de serviços** podem ser injetados nos componentes como dependências, tornando seu código modular e reutilizável.

Serviços e componentes são simples classes com decoradores, que definem o tipo e fornecem metadados para informar o Angular como usá-los.

![grafico](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20700%20356'%3E%3C/svg%3E)

### **NgModules**

Tem como objetivo declarar e agrupar tudo que criamos no Angular. Existem duas estrutura principais, que são: *declarations* e o *providers.*

**Declarations** é onde declaramos os itens que iremos utilizar nesse módulo, como por exemplo componentes e diretivas, já nos **Providers** informamos os serviços.

```
 @NgModule({
  declarations: [ AppComponent],
 providers: [ AuthClientService  ],
})
```

Assim como módulos **[JavaScript](https://blog.geekhunter.com.br/linguagem-javascript-um-guia-para-iniciantes/)**, o *NgModules* também pode importar funcionalidades de outros *NgModules* e permitir que suas próprias funcionalidades também sejam exportadas.

Um exemplo claro disso é que para usar o serviço de roteador no seu *app* basta importar o *RouterNgModule*.

```
 @NgModule({
  declarations: [ AppComponent ],
  imports: [ AppRoutingModule ],
  })
```

> [React vs Vue vs Angular](https://blog.geekhunter.com.br/react-vs-vue-vs-angular-qual-escolher/): qual escolher?

### **Components**

A maior parte do desenvolvimento quando se utiliza o *framework Angular* é feito nos componentes.

**Cada componente define uma classe**, que contém dados e lógicas do aplicativo e está sempre associada a um *template HTML*, onde são definidas as visualizações deste componente.

O decorator *@Component()* identifica a classe imediatamente como um componente e oferece o modelo e os metadados específicos dele.

Os metadados configuram, por exemplo, como o componente pode ser referenciado no **HTML** e também quais os serviços devem ser utilizados.

```
 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ HeroService ]
}) 
```

### **Directives**

As diretivas são como marcadores no elemento DOM que comunicam ao **Angular** para incluir um comportamento específico.

Existem três tipo de diretivas no Angular, que são: Diretivas de atributos, Diretivas estruturais e Componentes.

**Diretivas de atributos**: Alteram a aparência ou o comportamento de um elemento, componente ou outra diretiva, como por exemplo, *NgClass e NgStyle*.

**Diretivas estruturais**: Modificam o *layout* adicionando ou removendo elementos do DOM, como por exemplo, *NgIf* e *NgFor.*

**Componentes**: São diretivas com um modelo.

[![img](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20720%20200'%3E%3C/svg%3E)](https://www.geekhunter.com.br/criar-perfil-gratis?utm_source=blog&utm_medium=banner&utm_campaign=overview_sobre_angular)

### **Interpolation**

A interpolação é usada para exibir uma **propriedade do componente** no HTML.

Sua sintaxe são chaves duplas e podemos exibir qualquer tipo de dados, por exemplo, números, datas, *arrays* e etc…

#### **Componente**

```
 export class AppComponent {
  propriedade = "Hello!!!"
}
```

#### **Html**

```
 <h1>{{propriedade}}</h1> 
```

### **Dependency injection (DI)**

O DI é conectado à estrutura **Angular** e usado em todos os lugares para fornecer aos componentes os serviços (ou outras coisas) que eles precisam.

Componentes consomem serviços. Isto é, você pode *injetar* um serviço em um componente, dando acesso ao componente para essa classe de serviço.

Para realizar isso, usamos o *providedIn*, que é uma propriedade do decorador *@Injectable*.

```
 @Injetable({
 providedIn: SomeModule
})
```

## **Angular CLI**

A **[CLI Angular](https://angular.io/cli)** é uma ferramenta de interface da linha de comandos que você usa para inicializar, desenvolver e manter aplicativos **Angular**.

Nesse sentido, ela é a forma mais fácil, rápida e recomendada de se iniciar a sua aplicação em Angular, além de fazer a manutenção em projetos que recebe.

Para você ter noção, alguns exemplos de comandos abaixo deixam claro como o uso de Angular CLI facilita a vida do programador:

| **ng build**    | Compila um aplicativo Angular em um diretório de saída.      |
| --------------- | ------------------------------------------------------------ |
| **ng serve**    | Cria um servidor local HTTP para testar seu aplicativo, reconstruindo as alterações do arquivo. |
| **ng generate** | Gera ou modifica arquivos com base em um esquema.            |
| **ng test**     | Executa testes de unidade em um determinado projeto.         |
| **ng e2e**      | Constrói e fornece um aplicativo Angular e, em seguida, executa testes de ponta a ponta. |

Você pode usar a ferramenta diretamente em um *shell* de comando ou indiretamente por meio de uma interface do usuário interativa, como o **Angular Console**.

> Um guia para usar [**React JS**](https://blog.geekhunter.com.br/um-guia-para-usar-react-js/)

## Angular SPAs

Você sabe o que é uma SPA? Uma Single-Page Application é aplicação web que roda em uma única página, se assemelhando a um aplicativo desktop ou um mobile.

Alguns profissionais chamam de “páginas ajax” também.

Um bom exemplo é o Gmail do Google, porque a navegação está em uma única página e todo o conteúdo é carregado de uma vez ou obtido dinamicamente (via requisições Ajax).

A redução dos dados enviados e recebidos a cada solicitação é o principal fator vantajoso das

Usar Angular para fazer uma SPA é uma boa ideia pois possui sistemas de rotas e clientes HTTP para fazer requisições a recursos externos (uma API, por exemplo).

## **Considerações** Finais

![tela roxa com consideracoes finais escrito logo da angular a direita e da geekhunter embaixo](https://blog-geek-midia.s3.amazonaws.com/wp-content/uploads/2019/10/01121420/consideracoes-finais-1024x576.jpg)

Esse foi o nosso *OverView* sobre este fantástico *FrameWork*. É claro que, se tratando de uma visão geral, vários temas importante ficaram de fora deste post.

Alguns exemplos são: *Lifecycle Hooks, Pipes, Property binding/Event binding* e muitos outros.

Por esse motivo, vou deixar o link da [**documentação oficial do Angular**](https://angular.io/) para vocês poderem se aprofundar ainda mais nesta ferramenta.

Grande abraço e até a próxima.