let output = document.getElementById("calc")

function display(num) {
    output.value += num;
}
function clear(){
    output.value ="";
}
function Delete() {
    output.value = output.value.slice(0, -1)
}
let number ="123456123456";
console.log(number.slice(0,  -1));
function calc(){
    try{
         output.value = eval(output.value);
    }
    catch(err){
        output.value =" Error";
    }
}