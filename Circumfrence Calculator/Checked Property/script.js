let checkbox = document.getElementById("check");
let Visabtn = document.getElementById("Visa");
let Masterbtn = document.getElementById("MasterCard");
let PayPalbtn = document.getElementById("PayPal");

let mySumbit = document.getElementById("sumbit")


let result1 = document.getElementById("result1")
let result2 = document.getElementById("result2")

mySumbit.onclick = function(){

    if(checkbox.checked){

        result1.textContent = `You are Suscribed`

    }
    else{
        result1.textContent = `you are not subcribed`
    }

    if(Visabtn.checked){
        result2.textContent = `you selected visa`
    }
    else if(Masterbtn.checked){
        result2.textContent = `you selcted mastercard`
    }

    else if(PayPalbtn.checked){
        result2.textContent = `you selcted paypal`
    }

    else{
        result2.textContent = `you have not selected anything`
    }


}

