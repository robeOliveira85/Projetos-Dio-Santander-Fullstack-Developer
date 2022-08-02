## O que é AngularJS?

------

**AngularJS** é um framework em j[avascript](https://www.portalgsti.com.br/javascript/), de código aberto e que é mantido pelo Google. Seu objetivo é aumentar aplicativos que podem ser acessados por um navegador web e tem como padrão o MVVM (*Model-View-View-Model*), em um esforço para facilitar tanto o desenvolvimento quanto o teste dos aplicativos.

![AngularJS](https://www.portalgsti.com.br/media/uploads/editor-uploads/marcomascarenhas/2016/07/28/angularjs.png)

O framework AngularJS funciona através da leitura de páginas [HTML](https://www.portalgsti.com.br/html/), que tem embutido nelas atributos adicionais personalizados em suas tags. Angular interpreta esses atributos como as diretivas para ligar partes de entrada ou saída de página para um modelo que é representado por variáveis em padrão javaScript. Os valores dessas variáveis javaScript podem ser configurados manualmente no código ou recuperado a partir de recursos JSON estáticos ou dinâmicos.

O Angular JS disponibiliza recursos cmpletos para facilitar a criação de um aplicativo CRUD: 

- vinculação de dados, 
- diretrizes básicas de modelos, 
- validação de formulários, 
- roteamento, 
- componentes reutilizáveis 
- injeção de dependência.

Angular segue o padrão MVC da engenharia de Software e encoraja o baixo acoplamento entre apresentação, dados e componentes lógicos.

## Como Usar o Angular

------

AngularJS é distribuído como um arquivo JavaScript e pode ser adicionado a uma página da web com uma tag de script:

```html
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
```

## Motivação do AngularJS

------

O AngularJS surgiu a partir da necessidade de evolução dos frameworks de [Javascript](https://www.portalgsti.com.br/javascript/). O Javascript é uma linguagem de programação web frontend, isso é, programação ligada à interface com o usuário.

Não é o primeiro framework popular que surgiu  neste sentido. Muitos outros são utilizados por desenvolvedores, a exemplo do jQuery, que é uma biblioteca que facilita o controle de elementos de uma página HTML, também chamado de DOM. Outros exemplos de frameworks de Javascript: [Javascript MVC](http://javascriptmvc.com/), [Backbone.js](http://backbonejs.org/), [Knockout](http://knockoutjs.com/).

Com o passar dos anos, tornou-se tendência que linguagem que é executada no lado do cliente (navegador) pudesse também ser executada no lado do servidor, gerando a plataforma [NODE.JS](https://www.portalgsti.com.br/node-js/) (um interpretador de código JavaScript), hoje em dia mundialmente conhecida e utilizada.

Para saber mais sobre JavaScript, acesse: [O que é JavaScript](https://www.portalgsti.com.br/javascript/sobre/).

Para saber mais sobre NODE.JS, acesse: [O que é NODE.JS](https://www.portalgsti.com.br/javascript/sobre/)

## Principais Características e Recursos do AngularJS

------

- Utiliza [Padrão MVC (Model View Controller)](https://www.portalgsti.com.br/2017/08/padrao-mvc-arquitetura-model-view-controller.html)
- É Baseado no Conceito [SPA: Single Page Application](https://www.portalgsti.com.br/2017/08/single-page-application-spa.html)
- Utiliza Recurso Two-Way Data Binding
- Utiliza o Conceito de Injeção de Dependência
  Utiliza [Recurso de Diretivas](https://www.portalgsti.com.br/2017/08/usando-diretivas-no-angularjs.html)

Para saber mais sobre estas propriedades do AngularJS, acesse: [Principais Características e Recursos do AngularJS](https://www.portalgsti.com.br/2017/08/principais-caracteristicas-e-recursos-do-angularjs.html)

## Principais diretivas do AngulaRJS

------

Segue abaixo a lista de diretivas que permitem o desenvolvedor especificar tags HTML personalizadas:

| **ng-app**            | Declara um elemento como o elemento raiz da aplicação, ocasionando a mudança do comportamento padrão da tag. |
| --------------------- | ------------------------------------------------------------ |
| **ng-bind**           | Muda o texto de um elemento HTML automaticamente, de acordo com o seu resultado, vindo das regras de negócio. |
| **ng-model**          | É similar ao ng-bind, mas permite ligação direta bidirecional (two-way data binding ) entre a view e o escopo do aplicativo. |
| **ng-class**          | Permite atributos de classe serem carregados dinamicamente.  |
| **ng-click**          | Permite instanciar o evento de click, semelhante ao onclick. |
| **ng-controller**     | Especifica um controller JavaScript para aquele HTML em questão. |
| **ng-repeat**         | Instancia um elemento por item de um array.                  |
| **ng-show & ng-hide** | Mostra ou esconde um elemento HTML de acordo com o resultado de uma expressão booleana. |
| **ng-switch**         | Instancia um template, em uma lista de escolhas, dependendo do valor obtido pela expressão. |
| **ng-view**           | A diretiva base para manipulação de rotas, resolvendo um JSON antes de renderizar os modelos acionados por controladores especificados. |
| **ng-if**             | Declaração básica de um 'if' que permite mostrar um elemento se a condição for verdadeira. |





## O que é Angular Expressions?



------



São trechos de códigos em Javascript, que no caso do AngularJS devem ser colocados entre chaves: {{expression}}. As expressions em AngularJS também podem ser escritas dentro de uma diretiva: ng-bind = "expression"

### Exemplo:

```html
<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
<body>
<div ng-app="">
  <p>Exemplo de Expression: {{ 5 + 5 }}</p>
</div>
</body>
</html>
```



## Código fonte

------

- [Acesse aqui o código fonte do AngularJS](https://github.com/danielschmitz/livro-angula)

## Mais sobre AngularJS

------

- [Vídeoaulas gratuitas sobre AngularJS](https://www.portalgsti.com.br/videos/?criteria=&category=desenvolvimento&community=angularjs&order=0#)
- [Cursos online sobre AngularJS](https://www.portalgsti.com.br/angularjs/cursos/)
- [Ebooks e Apostilas sobre AngularJS](https://www.portalgsti.com.br/angularjs/materiais/)
- [Comunidade AngularJS](https://www.portalgsti.com.br/angularjs/)