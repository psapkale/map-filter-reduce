// If the given input is a number, you should return the factorial of that number.

const num = 6;

const arr = new Array(num).fill(null);

const output = arr
   .map((_, idx) => idx + 1)
   .reduce((acc, curr) => {
      acc = acc * curr;
      return acc;
   }, 1);

console.log(output);
