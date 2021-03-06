const names: Array<string> = [];

const promise: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve('This is done!');
  }, 2000);
});

promise.then((data) => {
  data.split(' ');
});

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

console.log(merge({ name: 'Matthew' }, { age: 25 }));

const mergedObj = merge({ name: 'Matthew' }, { age: 25 });
console.log(mergedObj.name);
