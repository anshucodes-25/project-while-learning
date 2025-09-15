
let radius;
const PI = 3.1489;
let circum;

radius = window.prompt("Enter your radius");


document.getElementById("sumbit").onclick = function(){
    radius = document.getElementById("radius").value
    radius = Number(radius);
    circum = 2 * PI * radius;

    if(circum){
        document.getElementById("result").textContent = circum
        console.log(circum)
    }

    else{
        document.getElementById("result2").textContent = `Enter the Radius`
    }

    
}



