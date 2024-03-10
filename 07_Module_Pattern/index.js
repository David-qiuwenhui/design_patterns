import addValues, {
  multiply as multiplyValues,
  subtract,
  square,
} from './math.js';

function add(...args) {
  return args.reduce((acc, cur) => cur + acc);
}

function multiply(...args) {
  return args.reduce((acc, cur) => cur * acc);
}

console.log(addValues(7, 8));
console.log(multiplyValues(8, 9));
console.log(subtract(10, 3));
console.log(square(3));

console.log(add(8, 9, 2, 10));
console.log(multiply(8, 9, 2, 10));
