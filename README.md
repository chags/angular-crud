# Crud Angular

Projeto criado em: [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

#Requisitos
## 1 Com a última versão do Angular V13, desenvolver um CRUD de Usuários com os seguintes campos:
Nome, data de nascimento, CPF e e-mail.  

Necessário validar data de nascimento para maiores de 18 (Apenas maiores de 18 podem ser cadastrados),   

e-mail e validação do CP, todos no front-end.
## 2 Criar um carrinho de compra
Exibir lista de produtos que poderão ser selecionados para adicionar em um carrinho de compra.  

Necessário deixar disponível para o usuário a quantidade a ser inserida do produto. 

Exibir lista de produtos que foram inseridos no carrinho de compra.
## 3 Back-end (API)
Pode ser realizado com a linguagem desejada.

## Diferencial
Usar Material ou Bootstrap 5.  

Uso de Lazy-loading feature modules.

## Para rodar o projeto 

Rodar o comando  `ng serve` abrir o brouser [localhost:4200](http://localhost:4200/)  

Para rodar a API com o banco de dados rode `npm install -g json-server` para instalar o servidor de API  

Agora rode o comando  `json-server --watch db.json` abrir o brouser  [localhost:3000](http://localhost:3000)   

OBS:para ver os dados do banco acesse o arquivo na raiz desse projeto `db.json`.  

Para saber mais sobre json-server acesse: [github.com/typicode/json-server](https://github.com/typicode/json-server)  

## Code scaffolding

para criar um compoment `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.