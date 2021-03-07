// Example Generics
const names: Array<string> = [];

const promise: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve('This is done!');
  }, 2000);
});

// Generic Functions
promise.then((data) => {
  data.split(' ');
});

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

console.log(merge({ name: 'Matthew' }, { age: 25 }));

const mergedObj = merge({ name: 'Matthew' }, { age: 25 });
console.log(mergedObj.name);

interface Lengty {
  length: number;
}

function countAndDescribe<T extends Lengty>(element: T): [T, string] {
  let descriptionText = 'No value';
  if (element.length === 1) {
    descriptionText = 'Got 1 element.';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }
  return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(['Sports', 'Cooking']));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return 'Value: ' + obj[key];
}

console.log(extractAndConvert({ name: 'Matthew' }, 'name'));
