// You are given an array of objects representing a collection of employees, each with a name, salary, and department. Your task is to use map, filter, and reduce to calculate the average salary for each department and then return an array of objects containing only the departments that have an average salary above 65000.

const arr = [
   { name: "John", salary: 50000, department: "IT" },
   { name: "Jane", salary: 60000, department: "HR" },
   { name: "Bob", salary: 55000, department: "IT" },
   { name: "Sophie", salary: 75000, department: "HR" },
   { name: "Mike", salary: 65000, department: "IT" },
   { name: "Emily", salary: 80000, department: "HR" },
   { name: "David", salary: 70000, department: "IT" },
];

[{ department: "HR", average: 71666 }];

const deptConfig = arr.reduce((acc, curr) => {
   if (!acc.find((employee) => employee.department === curr.department)) {
      acc.push({
         department: curr.department,
         totalSalary: curr.salary,
         totalCount: 1,
      });
   } else {
      const index = acc.findIndex(
         (employee) => employee.department === curr.department
      );
      acc[index].totalSalary += curr.salary;
      acc[index].totalCount += 1;
   }

   return acc;
}, []);

const output = deptConfig
   .reduce((acc, curr) => {
      acc.push({
         department: curr.department,
         average: curr.totalSalary / curr.totalCount,
      });

      return acc;
   }, [])
   .filter((curr) => curr.average > 65000);

console.log(output);
