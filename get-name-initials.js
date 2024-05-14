// The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.

const str = "George Raymond Richard Martin";

const arr = str.split(" ");

const output = arr.reduce((result, curr) => {
   result = result + curr.charAt(0);

   return result;
}, "");

console.log(output);
