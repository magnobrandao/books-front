# Projeto Técnico - Magno Book Front-ennd

O projeto proposto envolve que fosse criado uma página que permitisse o usuário pesquisar o livro que ele deseja, buscando no backend, além de permitir ver detalhes do livro.

## Recursos Utilizados no Projeto

**Typescript:** Foi empregado o Typescript para melhorar a qualidade do código, através da adoção de tipagem estática.

**React:** A biblioteca React foi fundamental para criar interfaces de usuário interativas e responsivas. Com ela, foi possível dividir a aplicação em componentes reutilizáveis, facilitando o desenvolvimento e a manutenção do código.

**Branches e Convenção de Commits:** A metodologia de trabalho com branches foi adotada para organizar o desenvolvimento de forma mais eficiente. Cada funcionalidade ou correção foi desenvolvida em sua própria branch, permitindo uma implementação isolada e segura. A convenção de commits adotada tornou o histórico de alterações mais claro e compreensível, facilitando o entendimento do que foi modificado em cada etapa do desenvolvimento.

**Material UI:** A biblioteca de componentes Material UI foi utilizada para acelerar o desenvolvimento da interface de usuário.

## Funcionalidades Implementadas

- Página Inicial:
  -Exibição de uma lista de livros obtidos do Backend.
  -Implementação de paginação

- Página de Detalhes do Livro:
  -Clicando em um livro exibido, será redirecionado para um modal com detalhes.

- Funcionalidade de Pesquisa:
  Foi implementado um mecanisco de pesquisa, utilizando o Debounce para otimização das requisições.

- Design Responsivo
  Utilizado o máximo no projeto para manter um Design Responsivo e limpo.

- Design de UI/UX:
  Criou-se um projeto base no figma da página Home, para inicialização dos conceitos de Layout e prototipação no Figma.

- ## Visualização do Projeto

![App Screenshot](https://i.imgur.com/wD5OSjk.png)

## 🔗 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: git e node.js. Você também vai precisar de um editor de código, recomendo o VS Code. Além disso, você precisará instalar e rodar o Backend em seu computador. Segue o link do repositório no Github: 
[Projeto Backend](https://github.com/magnobrandao/books-api)

## Rodando o Projeto

```bash

# Clone este repositório (ou download )

 git clone git@github.com:magnobrandao/books-front.git

# Acesse a pasta do projeto no terminal/cmd

  $ books-front

# Instale as dependências

  $ npm install

# Após a instalação, execute o comando para rodar a aplicação

  $ npm start
```

