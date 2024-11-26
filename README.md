
![Hackerman](https://media.tenor.com/m1RhIkr2usoAAAAj/machiko-sun.gif)

# Desafio Hackerman | Front-End

Esse projeto foi desenvolvido para atender as propostas do desafio, utilizando o Angular como framework principal. O objetivo foi criar uma aplicação interativa, utilizando a [API Swapi](https://swapi.dev/documentation). Confira abaixo os detalhes de implementação, tecnologias utilizadas e como acessar o deploy final

## 🎯 Deploy do Projeto

Você pode acessar a aplicação clicando aqui -> [Hackerman Challenge](https://hackerman-challenge.web.app)

## 🛠️ Tecnologias Utilizadas
- Angular 16 para criação da SPA
- Bootstrap para estilização responsiva
- Firebase para hospedagem
- Git para versionamento
- API Swapi para obtenção de dados dos personagens de Star Wars
- LocalStorage para persistência de dados

## 📜 Requisitos Atendidos

**Validação de E-mail**
- Regex para validar o formato do e-mail
- Botão de navegação desabilitado até que o e-mail preenchido seja válido
- Mensagem de erro para entradas inválidas


**Busca de Personagens**
- Input que recebe o nome do personagem
- Tela de carregamento ao aguardar resposta da API (com um timeout intencional para demonstrar o efeito visual do loading)
- Exibição dos dados retornados pela API, formatados conforme a proposta do desafio
- Os resultados são salvos no LocalStorage, permitindo a recuperação das informações ao revisitar a página


**Sistema de Rotas e Guard**
- Página inicial /email (validação de e-mail)
- Página de busca /search (detalhes do personagem) — Acesso restrito: o usuário é redirecionado para a página de validação caso o e-mail não tenha sido preenchido
- Loading integrado na página de busca

## 🖼️ Design & Recursos

[Protótipo Navegável](https://www.figma.com/proto/8QutE5PbNea4Q4hi8T91rv/Hackerman-s-Challenge?page-id=0%3A1&node-id=3%3A2&viewport=494%2C378%2C0.13534130156040192&scaling=min-zoom&starting-point-node-id=3%3A2&hide-ui=1)

[Projeto no Figma](https://www.figma.com/file/8QutE5PbNea4Q4hi8T91rv/Hackerman-s-Challenge?node-id=0%3A1)

[Assets](https://drive.google.com/drive/u/2/folders/1tv8m1SoQ5kC6v7QLx3RtF5U-9R8EE-nG)