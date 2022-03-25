# React

O objetivo é aprender React para aplicação em projeto

## Introdução ao JavaScript

### História

- fundado em 1995 por Brendn Eich, engenheiro da Netscape
- lançamento em 1996
- lançada com o Netscape2
- Seu primeiro nome foi LiveScript
- Foi rebatizada em função de marketing sobre a influência que o Java exercia na época.
- Microsoft lança o JScript
- O Netscape apresenta o Ecma Internacional
- O padrão ECMAScript

### Visão Geral

A JavaScript é:

- uma linguagem dinamica
- Orientada a Objetos
- tem tipos e operadores, objetos e métodos
- Sintaxe semelhante ao Java e ao C
- Não tem classes
- A funcionalidade de Classe é realizada por protótipos de objetos
- As funções são Objetos
- No JavaScript blocos não tem escopo só funções tem escopo

### Tipos do JavaScript

- Númericos(numbers)
- Strings(strings)
- Booleanos(booleans)
- Objetos(objects)
  - Funções(functions)
  - vetores(arrays)
  - datas (dates)
  - expressoes regulares(regexp)
- nulo (null)
- indefinido (undefined)

#### Numeros

- São de dupla precisão no formato IEEE 754
- Não existe número inteiro no JavaScript
- pode ser convertido strings em numeros com parseInt(), parseFloat() e o operador unário +.
- As funções parseInt() e parseFloat fazem a conversão da string até alcançar um caracter que é válido. Já o operador unário + retornará NaN, caso a string tenha um valor invalido

#### Strings

- Em javascritp são sequência de caracteress.
- São representado por um número de 16 bits.
- String são Objetos, ela tem métodos

#### Outros tipos

- null
  - objeto do tipo "object"
  - indica ausencia de valor
- undefined
  - objeto do tipo 'undefined'
  - indica um valor não inicializado

No javascript é possível declarar uma variável sem atribuir um valor para a mesma. Se você fizer isso, a variável será do tipo undefined.

- boolean
  - são possíveis os valores true e false
  - qualquer valor pode ser convertido para booleano:
    - false, 0, string vazia (""), NaN, null, uddefined tornando-se false
    - todos os outros valores tornam-se true

### Tipos de Operadores no JavaScript

#### Operaçoes lógicas

Operações lógicas são suportadas:

- and &&
- or ||
- not !

#### Operadores

- operador de adição ou concatenação (+)
  - se você tentar somar uma string ao número, o javascript converterá tudo em uma string e depois juntará tudo em string.

##### Operadores de comparação

- '>' maior que
- '<' menor que
- '>=' maior ou igual que
- '<=' menor ou igual que
- '==' igual que
- '===' igual que

Isso funciona tanto para números como para strings

obs: Para evitar coerção de tipo, use o operador igual-triplo

> Coerção de tipos (type coercion) é o processo de conversão de um  valor de um tipo, para outro (como a conversão de uma string para  um número, um objeto para um booleano e etc).

### Variáveis

- novas variáveis são declaradas usando a palavra-chave 'var'
- se você declarar uma variável sem atribuir qualquer valor a els, seu tipo será undefined.
- Se você fazer uma declaração de variável usando o 'var', essa variável será vista por todas as funções
- caso você faça a declaração usando o 'let', então essa variável ficará restrita ao escopo do bloco que foi declarado.

### Estruturas de Controle

- if Else
- while
- do while
- for
- switch

### Objetos

> Objetos em JavaScript são simplesmente coleções de pares nome-valor. Como tal, eles são semelhantes em:

- Dicionários em Python
- Hashes em Perl e Ruby
- Tabelas de hash em C e C++
- HashMaps em Java
- Vetores associativos em PHP

### Vetores

> São um tipo especial de objeto.

- como criar um vetor

> var a = new Array();
> a[0] = "dog";
> a[1] = "cat";
> a[2] = "hen";
> a.length
> 3

- o método length é usado para buscar o tamanho do vetor

> var a = ["dog", "cat", "hen"];
> a.length
> 3

### Função

> Junto com objetos, funções são os componentes principais para a compreensão do JavaScript.
> function add(x, y) {
> var total = x + y;
> return total;
> }

## Referências

Todo o material se encontra no artigo Introdução ao JavaScript

[Introdução ao JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/A_re-introduction_to_JavaScript#introdu%C3%A7%C3%A3o)

[Explicando a coerção de tipos em Javascript](https://medium.com/devzera/explicando-a-coer%C3%A7%C3%A3o-de-tipos-em-javascript-d6c9203c4e5)