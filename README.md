<h1 align="center">Back-end Social Network</h1>

## :memo: Descrição
Social Network:
Este projeto é uma API backend para uma rede social simple. Implementa um CRUD completo (Create, Read, Update, Delete) usando as tecnologias JWT (JSON Web Tokens), Prisma ORM e Express, Postgree Sql, TypeScript...

## ⛹️‍♀️ Finalizando este Projeto Full Stack em andamento segue o link ⬇️
* https://entrega-criando-rede-social-josenilsonfariasx-1roctl7zc.vercel.app/

## :books: Funcionalidades
* <b>Criar Perfil</b>: O usuario pode cadastrar um perfil utilizando Email, nomde de usuario e senha
* <b>Login </b>: O usuario pode efetuar um login utilizando Email e senha
* <b>Alterar Foto de perfil</b>: Ao efetuar o login o usuario podera se quiser trocar foto de perfil
* <b>Criar Postes</b>: Usuario pode Criar postes e Ve os mesmo no feed
* <b>Curtir Postes</b>: Cada Usuario da Rede pode Curtir quaisquer poste que esteja em seu feed
* <b>Seguir Pessoas</b>: Os usuarios podem seguir pessoas as quais nao seguem
* <b>Perfil</b>: Cada usuario tem seu proprio perfil ontem contem a quantidade de Likes, numero de seguidores, postes e pessoas seguindo. Todo mundo pode ver o perfil de todo mundo
* <b>Rotas seguras com JWT</b>: Todas as rotas sao seguras impedindo que qualquer pessoa possa acessar qualquer rota

## :wrench: Tecnologias utilizadas
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" />
<img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
<img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white"/>

## :rocket: Rodando o projeto
Para rodar o repositório é necessário clonar o mesmo, dar o seguinte comando para instalar as dependencias:
```
yarn
```

Crie um Banco de dados Postgree e use os dados do BDD para configurar o Prisma ORM <br>
Crie um arquivo .env na raiz do projeto e crie duas varaveis de ambiente:<br>
*DATABASE_URL=""
*JWT_SECRET=a64464757087f1611c6c8da04a930372

Dentro do DATABASE_URL coloque o link do seu BDD

Para fazer execultar as migrações no bdd utilize o seguinte comando:
```
npx prisma dev
```

Para finalizar so execultar o comando a baixo e acessar o localhost na porta 3333 pelo insonmia e seguir as urls no arquivo routes.ts:
```
yarn dev
```

## :soon: Implementação futura
* Usuarios poderão privar seus perfil
* Usuarios poderão bloquear qualquer perfil

## :Autor
<table>
  <tr>
    <td align="center">
      <a href="http://github.com/Josenilsonfariasx">
        <img src="https://avatars.githubusercontent.com/u/56259137?v=4" width="100px;" alt="Foto de Tati Alves no GitHub"/><br>
        <sub>
          <b>Josenilson Farias</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## :dart: Social Network
