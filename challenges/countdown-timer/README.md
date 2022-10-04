# Desafio: Countdown Coming Soon
Desafio criado pela Rocketseat para assinantes gratuitos do [site da Rocketseat](https://rocketseat.com.br).

## Sobre o desafio
Esse projeto é um contador regressivo para um evento ou lançamento. O objetivo é criar um contador regressivo responsivo e pronto para ser usado em qualquer projeto (apenas o front-end foi criado).
> Essa foi a página que eu criei: [Countdown Coming Soon](https://misterioso013.github.io/5-days-of-frontend/challenges/countdown-timer/)

## Layout
O layout da aplicação está disponível no Figma: [Layout Web](https://www.figma.com/file/oDZqw3v8fem3v3RC7bTKV5/DD-%2F-Countdown/duplicate)
![Layout Web](./images/preview.png)

## Style Guide
### Cores utilizadas
```css
:root {
  --black: #4D4C59;
  --purple: #6C63FF;
	--light-grey: #C8C8C8;
  --text-color: #9C9AB6;
}
```
### Tipo de Fonte utilizadas
> A fonte [Poppins](https://fonts.google.com/specimen/Poppins) foi utilizada em todo o projeto.

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap');

* {
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
```
## O que têm de novo?
> Foram feitas algumas alterações no layout original

O layout foi criado de forma responsiva, utilizando o conceito de mobile first, ou seja, o layout foi criado para telas menores e depois foi adicionado o suporte para telas maiores.

Uma animação foi adicionada ao contador, para que ele fique mais dinâmico e agradável para o usuário e também foi adicionado um Modal para o usuário assinar a newsletter.
