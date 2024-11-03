///////////////object with n feild///////////////
/* const obj1 = {
    name: 'test1',
    age: 30
}
const obj2 = {
    name: 'test2',
    gender: 'female'
}
const newObj = {
    name: 'test1',
    age: 30,
    gender: 'female'
} */
//console.log(user);


function findDifferentFields(obj1, obj2) {
    const differences = {};

    // دریافت کلیدهای هر دو آبجکت
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // بررسی کلیدهای آبجکت اول
    keys1.forEach(key => {
        if (obj2[key] === undefined) {
            differences[key] = { valueInObj1: obj1[key], valueInObj2: undefined };
        } else if (obj1[key] !== obj2[key]) {
            differences[key] = { valueInObj1: obj1[key], valueInObj2: obj2[key] };
        }
    });

    // بررسی کلیدهای آبجکت دوم
    keys2.forEach(key => {
        if (obj1[key] === undefined) {
            differences[key] = { valueInObj1: undefined, valueInObj2: obj2[key] };
        }
    });

    return differences;
}

// مثال استفاده از تابع
const object1 = {
    name: 'Alice',
    age: 30,
    city: 'Tehran'
};

const object2 = {
    name: 'Alice',
    age: 25,
    country: 'Iran'
};

const result = findDifferentFields(object1, object2);
console.log(result);




/* function checkObj(userObj) {
    console.log(userObj.name);
    console.log(userObj.age);
    console.log(userObj.email);
}

checkObj(user); */



///////////با استفاده از constractor/////////
/* function User (name,age,email)
{
    this.name = name;
    this.age = age;
    this.email = email;

}
let user1 = new User("hedieh sahafi", 30, "hedieh.sahafii@gmail.com");
console.log(user1); */


function findCommonValues(arr1, arr2) {
    const commonValues = [];

    // استفاده از حلقه برای بررسی مقادیر
    arr1.forEach(value => {
        if (arr2.includes(value) && !commonValues.includes(value)) {
            commonValues.push(value);
        }
    });

    return commonValues;
}

// مثال استفاده از تابع
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const common = findCommonValues(array1, array2);
console.log(`مقدارهای مشترک: ${common}`);
console.log(`تعداد مقادیر مشترک: ${common.length}`);

