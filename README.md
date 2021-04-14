# HiPlatform - Edwin Reule 

## Olá! 

Oi, Me chamo Edwin Reule. :)

Desenvolvi o projeto em Angular 11 pois pensei em reutilizar apenas um componente para todas as funcionalidades, até mesmo a partir dele mesmo. (rs) 

Tentei criar um fluxo de usabilidade agradável e dinâmico.
Vocês irão reparar que deixei a rota do 'data.json' apontando para o GIT que foi enviado. Foi uma tentativa de fazer vocês passarem pela experiencia do 'loading' da aplicação. Claro que falando de performance, o melhor caminho seria o 'data.json' junto com a aplicação. 

Eu gostaria de ter focado mais em performance aplicando serviços para consultar itens 'filhos' apenas após ter carregados os itens 'pais', porém estou muito corrido no meu trabalho atual e não consegui tempo suficiente (fiz de madrugada o teste rs) para montar uma 'api' e nem sei se essa era a intenção do teste. 
Mas enfim, deixo minha observação. :)

O projeto já está no formato de Angular Universal (https://angular.io/guide/universal), que é uma forma que o Google encontrou para melhorar a performance de SEO do Angular. 
Não muda nada para o teste, mas achei legal já deixar nesse formato.Espero que gostem! <3

## Minha DEMO online:
http://hiplataformdev-env.eba-a2rwzcdt.sa-east-1.elasticbeanstalk.com/

## Caso nunca tenha rodado o Angular na sua Maquina: 

Sugiro a instalação do Angular Cli. 

`npm install -g @angular/cli` 

## Rodando o projeto
 Antes de tudo: `npm install`,
 Logo depois pode rodar: `ng serve --open`

## Caso queira ver o build
 Simples:  ` npm run build:ssr --prod`
 