// If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.

const arr = [1, -4, 12, 0, -3, 29, -150];

const output = arr.reduce((acc, curr) => {
   if (curr >= 0) {
      acc = acc + curr;
   }
   return acc;
}, 0);

console.log(output);
