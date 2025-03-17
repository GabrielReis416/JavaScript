const soma = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;

const resultado = (num1, num2) => {
   console.log('Resultado da Soma ente', num1 ,' e ', num2 ,  '=', soma(num1, num2));
   console.log('Resultado da Subtração  ente', num1 ,' e ', num2 ,  '=', sub(num1, num2));
   console.log('Resultado da Multiplicação entre ', num1 ,' e ', num2 ,  '=', mult(num1, num2));
   console.log('Resultado da divisão entre', num1 ,' e ', num2 ,  '=', div(num1, num2));
}

resultado(5, 5);