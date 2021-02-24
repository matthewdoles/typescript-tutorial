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

// default parameters
const addDefaultParameter = (a: number, b: number = 6) => {
  return a + b;
};

printOutput(addDefaultParameter(5));

// arrays & spread operator
const hobbies = ['Sports', 'Cooking'];

const activeHobbies = [...hobbies, 'Hiking'];
// or
activeHobbies.push(...hobbies);

// objects & spread operator
const person = {
  firstName: 'Matthew',
  personAge: 25,
};

const copiedPerson = { ...person };

// rest parameters
const addRestParameters = (...numbers: number[]) => {
  return numbers.reduce((currResult, currValue) => {
    return currResult + currValue;
  }, 0);
};

printOutput(addRestParameters(5, 10, 2, 3.7));

// array destructuring
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);

// object destucturing
const { firstName: personName, personAge } = person;
console.log(person, personName, personAge);
