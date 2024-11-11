function evenOdd (x) {
    if(x%2 == 0) {
        console.log('عدد زوج است');
    }
    else {
        console.log('عدد فرد است');
    }
    return x;
}

const result = evenOdd(5);