const person = {
    name: 'sodor uddin', 
    age: 25, 
    profession: 'developer', 
    salary: 25000, 
    married: true,
    "fav places": ['bandorban', 'saintmartin', 'kuakata']
}

// dot notation
console.log(person.profession); 
const income = person.salary; 
console.log(income); 

// bracket notation 
console.log(person['age']); 
const boyos = person['age']; 
console.log(boyos); 

// console.log(person.'fav_places')

// bracket notation 
console.log(person['fav places']); 