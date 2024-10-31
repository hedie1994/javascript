///////////////ساخت object ساده///////////////
let user = {
    name: 'hedieh',
    age: 30,
    email: 'hedieh.sahafii@gmail.com'
};
//console.log(user);



function showInfo(userObj) {
    console.log(userObj.name);
    console.log(userObj.age);
    console.log(userObj.email);
}

showInfo(user);



///////////با استفاده از constractor/////////
function User (name,age,email)
{
    this.name = name;
    this.age = age;
    this.email = email;

}
let user1 = new User("hedieh sahafi", 30, "hedieh.sahafii@gmail.com");
console.log(user1);


