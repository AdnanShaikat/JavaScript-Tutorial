function greet (user) {
    return 'Hello ' + user;
}


function isString(params) {
    if (typeof(params) == "string") {
        return true;
    }else{
        return false;
    }
}

function isBlank(params) {
    if(typeof(params) == "undefined"){
        return true;
    }
    else if (params.length > 0) {
        return false;
    }else{
        return true;
    }
}

function count() {
    for(let i =1; i<=200; i++) {
        console.log(i);
    }
}

function even() {
    for(let i =2; i<=100; i+=2) {
        console.log(i)
    }
}

function sum(num) {
    let sum = 0;
    for(let i=1; i<=num; i++) {
        sum = i + sum;
    }

    return sum;
}

function sumOdd(num) {
    let result = 0;
    for(let i=1; i<=num; i+=2) {
        result = i + result;
    }
    return result;
}


// let producList = ['Shirt', "Pant", "Panjabi", "Tshirt"];
// for (let i=0; i<=producList.length; i++) {
//     console.log(producList[i]);
// }

function sumOf() {
    let productPrice = [10, 20, 30, 40];
    let result = 0;
    for(let i=0; i < productPrice.length; i++) {
        result = productPrice[i] + result;
    }
    return result;
}





