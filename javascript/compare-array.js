function findCommonElements(array1, array2) {
    const commonElements = array1.filter(element => array2.includes(element));
    return {
        count: commonElements.length,
        elements: commonElements
    };
}

// مثال از دو آرایه ورودی
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

// استفاده از تابع
const result = findCommonElements(array1, array2);

console.log(`تعداد مقادیر مشترک: ${result.count}`);
console.log(`مقادیر مشترک: ${result.elements}`);


///////////////compare array with foreach///////////////

/* function findCommonValues(arr1, arr2) {
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
console.log(`تعداد مقادیر مشترک: ${common.length}`); */