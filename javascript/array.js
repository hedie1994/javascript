let fruits = ['apple','banana','orange'];
fruits.push('cherry');
//let remove = fruits.pop();
console.log(fruits);


/* for (let i=0; i < fruits.length; i++) {
    console.log(fruits[i]);
} */

fruits.forEach( function (fruit) {
    console.log(fruit);
});


///////////another way to define an array///////////
/* var fruits1 = new Array('apple','banana','orange');
fruits1.push('berry');
console.log(fruits1);
 */

