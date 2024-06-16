// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
  for (let i of employeeSalaries) {
    newEmployeeSalaries.push(operation(i));
  }
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Using `forEach` function here

function addBonus(salary) {
  return salary + 5000;
}

let newSalary = forEach(employeeSalaries, addBonus);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
