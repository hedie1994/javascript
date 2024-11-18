function renameFields(users) {
    return users.map(user => {
        return {
            name: user.username,
            family: user.userfamily
        };
    });
}

// مثال از آرایه ورودی
const objArray = [
    { username: 'hedieh', userfamily: 'sahafi' },
    { username: 'ali' , userfamily: 'alavi' }
];

// استفاده از تابع
const updatedUsersArray = renameFields(objArray);

console.log(updatedUsersArray);