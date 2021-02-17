const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Matthew',
  age: 25,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
};

console.log(person);
for (const hobby of person.hobbies) {
  // string methods available to array of strings
  console.log(hobby.toUpperCase());
}

// any array example
let anyArray: any[];
anyArray = ['sports', 34, false];
console.log(anyArray);
