// Count the occurrences of distinct elements in the given 2D array. The given input is an array, the elements of which are arrays of strings. The result is an object whose property names are the values from the arrays and their value is the number of their occurrences.

const arr = [
   ["a", "b", "c"],
   ["c", "d", "f"],
   ["d", "f", "g"],
];

// const output = arr.reduce((acc, curr) => {
//    curr.map((elem) => {
//       if (!acc[elem]) {
//          acc[elem] = 1;
//       } else {
//          acc[elem] = acc[elem] + 1;
//       }
//    });
//    return acc;
// }, {});

const output = arr.flat().reduce((acc, curr) => {
   if (!acc[curr]) acc[curr] = 1;
   else acc[curr]++;

   return acc;
}, {});

console.log(output);
