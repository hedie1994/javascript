function validateFunction () {
    var name = document.forms['validateForm']['name'].value;
    var email = document.forms['validateForm']['email'].value;
    const validName = name !== "";
    const validEmail = email.includes('@');

    if (validName && validEmail) {
        alert('دریافت اطلاعات با موفقیت انجام شد');
    }
    else {
        if (!validName) {
            alert('لطفا نام را وارد کنید');
        }
        if (!validEmail) {
            alert('لطفا ایمیل معتبر وارد کنید');
        }
    } 

/*     if (name == "") {
        alert ('نام را وارد کنید');
    }
    else if (!email.includes('@')) {
        alert ('ایمیل معتبر وارد کنید');
    }
    else {
        alert('دریافت اطلاعات با موفقیت انجام شد.');
    } */
}



