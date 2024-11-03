////////////////////merge object with assign///////////////////////
/* const object1 = { a: 1, b: 2, c: 3, d: 4};
const object2 = { e: 5, f: 6};
const object3 = { g: 7 };
const object4 = { h: 8, i: 9, j: 10 };
const object5 = { k: 11 };
const object6 = { l: 12 };
const object7 = { m: 13, n: 14 };

// ترکیب آبجکت‌ها
const mergeObject = Object.assign({}, object1, object2, object3, object4, object5, object6, object7);

console.log(mergeObject); */


////////////////////merge object with foreach///////////////////////
const objects = [
    { a: 2, b: 4 },
    { c: 6, d: 8 },
    { e: 10, f: 12 },
    { g: 14, h: 16 },
    { i: 18, j: 20 },
    { k: 22, l: 24 },
    { m: 26, n: 28 }
];

const combinedObject = {};

// ترکیب آبجکت‌ها
objects.forEach(obj => {
    Object.entries(obj).forEach(([key, value]) => {
        combinedObject[key] = value;
    });
});

console.log(combinedObject);
