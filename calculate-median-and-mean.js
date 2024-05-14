// Calculate the mean and median values of the number elements from the input array.

const arr = [12, 46, 32, 64];

arr.sort((a, b) => a - b);

const output = arr.reduce(
   (acc, curr, idx, array) => {
      acc.mean = acc.mean + curr / array.length;

      if (array.length % 2 === 0) {
         if (idx === array.length / 2 - 1) {
            acc.median = acc.median + curr;
         } else if (idx === array.length / 2) {
            acc.median = acc.median + curr;
            acc.median = acc.median / 2;
         }
      } else {
         if (idx === (array.length - 1) / 2) arr.median = curr;
      }

      return acc;
   },
   { mean: 0, median: 0 }
);

console.log(output);
