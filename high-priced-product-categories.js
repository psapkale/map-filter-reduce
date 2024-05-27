// You are given an array of objects representing a collection of products, each with a name, price, and category. Your task is to use map, filter, and reduce to calculate the average price of products in each category, and then return an array of objects containing only the categories that have an average price above 50.

const arr = [
   { name: "Product 1", price: 20, category: "Electronics" },
   { name: "Product 2", price: 30, category: "Clothes" },
   { name: "Product 3", price: 40, category: "Electronics" },
   { name: "Product 4", price: 50, category: "Clothes" },
   { name: "Product 5", price: 60, category: "Clothes" },
   { name: "Product 6", price: 70, category: "Electronics" },
   { name: "Product 7", price: 80, category: "Clothes" },
   { name: "Product 8", price: 90, category: "Electronics" },
];

// [
//    { category: "Clothes", average: 55 },
//    { category: "Electronics", average: 55 },
// ];

const dataOnCateory = arr.reduce((acc, curr) => {
   if (!acc.find((product) => product.category === curr.category)) {
      acc.push({
         category: curr.category,
         totalPrice: curr.price,
         totalProduct: 1,
      });
   } else {
      const categoryWiseIndex = acc.findIndex(
         (product) => product.category === curr.category
      );
      acc[categoryWiseIndex].totalPrice += curr.price;
      acc[categoryWiseIndex].totalProduct += 1;
   }

   return acc;
}, []);

const output = dataOnCateory.reduce((acc, curr) => {
   acc.push({
      category: curr.category,
      average: curr.totalPrice / curr.totalProduct,
   });

   return acc;
}, []);

console.log(output);
