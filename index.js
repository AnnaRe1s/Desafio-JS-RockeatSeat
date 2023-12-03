//Desafio - Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
window.alert("Hello word!");

//Desafio - Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

let num1 = 5;
let num2 = 3;

const sum = (num1, num2) => {
  return num1 + num2;
};

console.log("soma", sum(num1, num2));

// Desafio - Crie um script que declare uma variável e verifique se o seu valor é um número.
//Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

let numberOrString = [];

const isNumber = (isANumber) => {
  if (typeof isANumber == "number") {
    console.log("É um número");
  } else {
    console.log("Não é um número");
  }
};

// Desafio - Crie um script que declare uma variável e verifique se o seu valor é uma string.
// Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

const isString = (isString) => {
  if (typeof isString == "string") {
    console.log("É uma String");
  } else {
    console.log("Não é uma String");
  }
};

// Desafio - Crie um script que declare uma variável e verifique se o seu valor é um booleano.
// Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
const isBoolean = (isBoolean) => {
  if (typeof isBoolean == "boolean") {
    console.log("É um Booleano");
  } else {
    console.log("Não é um Booleano");
  }
};

// Uniao dos 3 desafios anteriores
const whatIsTheTypeof = (isA) => {
  if (typeof isA == "number") {
    console.log("É um número");
  } else if (typeof isString == "string") {
    console.log("É uma String");
  } else if (typeof isBoolean == "boolean") {
    console.log("É um Booleano");
  } else {
    console.log("É", typeof isA);
  }
};

isNumber(numberOrString);
isString(numberOrString);
isBoolean(numberOrString);
whatIsTheTypeof(numberOrString);

// Desafio - Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
let number1 = 5;
let number2 = 3;

const subtraction = (num1, num2) => {
  return num1 - num2;
};

console.log("subtração ", subtraction(number1, number));

//Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.const subtraction = (num1, num2) => {
const multiplication = (num1, num2) => {
  return num1 * num2;
};

console.log("multiplicação", multiplication(number1, number));

// Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
const division = (num1, num2) => {
  return num1 / num2;
};

console.log("multiplicação", division(number1, number));

//Crie um script que declare uma variável e verifique se o seu valor é um número par.
//Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

const even = (number) => {
  if (number % 2 === 0) {
    console.log("É um número par");
  } else {
    console.log("Não é um número par");
  }
};

even(number1);

//Desafio - Crie um script que declare uma variável e verifique se o seu valor é um número ímpar.
// Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

const orOdd = (number) => {
  if (number % 2 !== 0) {
    console.log("É um número impar");
  } else {
    console.log("Não é um número impar");
  }
};

orOdd(number1);
