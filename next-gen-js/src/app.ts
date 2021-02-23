// const
const userName = 'Matthew';

// let
let age = 25;
age = 24;

// arrow functions

//old
function addOld(a: number, b: number) {
  return a + b;
}

// new
const addNew = (a: number, b: number) => {
  return a + b;
};

// one expression
const addOneExpressionNew = (a: number, b: number) => a + b;

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

const button = document.querySelector('button');
if (button) {
  button.addEventListener('click', (event) => console.log(event));
}

printOutput(addOneExpressionNew(2, 5));
