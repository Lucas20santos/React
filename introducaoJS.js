// Numeros 

console.log(0.1 + 0.2 == 0.30000000000000004)

// Modulo Math

console.log(Math.sin(3.5));
console.log(Math.PI);
console.log(Math.E);

// converter String para Inteiro
// parseInt

texto = "111";
num = parseInt(texto, 2)
console.log(num)

// parseFloat

texto = "1111"
num = parseFloat(texto)
console.log(num)

// com o operador unario +

console.log(+ "45")

// Será retornado um valor NaN - Not a Number - se o valor 
// da string não for um número

console.log(parseInt("hello", 10))

// valores espaciais como + Infinity e - Ifinity

console.log(1 / 0)
console.log(-1 / 0)

console.log(parseInt("12e345", 10)) // retorna 12
console.log(parseFloat("12m34"))    // retorna 12
console.log(parseFloat(12e34))      // retornará o número 12e+34


