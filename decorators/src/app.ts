function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger('LOGGING - PERSON')
class Person {
  name = 'Matthew';

  constructor() {
    console.log('Creating person objec...');
  }
}

const pers = new Person();
console.log(pers);
