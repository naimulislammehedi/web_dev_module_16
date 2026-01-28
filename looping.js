/*
1. for loop 
2. while loop 
3. do while
4. for of 
5. for in 
*/
const friends = ['Elon', 'Bill', 'Mark', 'Waren']; 

// 



for (let i = 0; i < friends.length; i++) {
    // console.log(i); 
    // console.log(friends[i]); 
}

const numbers = [5, 23, 456, 23, 45, 654, 43]; 
for (let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i]); 
}

let i = 0; 
while(i < friends.length) {
    console.log(friends[i]); 
    i++; 
}

let n = 0; 
while (n < numbers.length) {
    console.log(numbers[n]); 
    n++; 
}