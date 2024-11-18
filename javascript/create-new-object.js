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

function newObjects(obj1, obj2) {
    const result = {};

    // جمع‌آوری کلیدها از هر دو آبجکت
    const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);

    // پر کردن آبجکت نتیجه
    keys.forEach(key => {
        if (key in obj1) {
            result[key] = obj1[key]; // اگر کلید در obj1 موجود باشد، مقدار را اضافه کن
        }
        // در صورت عدم وجود در obj1، از obj2 استفاده کن
        else if (key in obj2) {
            result[key] = obj2[key];
        }
    });

    return result;
}

// مثال از دو آبجکت
const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4, d: 5 };

// استفاده از تابع
const mergedObject = newObjects(object1, object2);

console.log(mergedObject);
