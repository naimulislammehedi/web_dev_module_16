const persons = ['rakib', 'nokib', 'sakib', 'akib', 'dakib']; 
const sortedPersons = persons.sort(); 
console.log(sortedPersons); 

// sort 
const numbers = [4, 7, 2, 8, 3, 6]; 
// const numbers_abc = numbers.sort(); 
const numbers_abc = [...numbers].sort(function(a, b) {
    return a -b
})
const number_dsc = [...numbers].sort(function (a, b) {return b - a}); 

console.log(numbers_abc); 
// console.log(numbers_dsc); 