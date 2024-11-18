let words = ['hello', 'world', 'javascript'];
let uppercasedWords = words.map(word => word.toUpperCase());

console.log(uppercasedWords); // ['HELLO', 'WORLD', 'JAVASCRIPT']


////////////////////////////////////
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(number => number * 2);

console.log(doubled); // [2, 4, 6, 8, 10]


////////////////////////////////////

let users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

let userNames = users.map(user => user.name);
let userAges = users.map(user => user.age);


console.log(userNames); // ['Alice', 'Bob', 'Charlie']


//////////////////filter//////////////////

let numbers1 = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers1.filter(number => number % 2 === 0);

console.log(evenNumbers); // [2, 4, 6]



let users1 = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

let adults = users.filter(user => user.age >= 30);

console.log(adults); 
// [{ name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 }]


let words1 = ['apple', 'banana', 'kiwi', 'mango', 'pear'];
let longWords = words.filter(word => word.length > 4);

console.log(longWords); // ['banana']

let obj1 = {
    name: 'hedieh',
    family: 'sahafi',
    age: 30
}

let obj2 = {
    name: 'sara',
    family: 'rajabi',
    age: 20,
    gender: 'female'
}

const merged = { 
    ...obj1,
    ...obj2
};
console.log(merged);



