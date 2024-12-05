let dispay=document.getElementById('display');

function append(value){
    // alert(value);
    // alert("1")
    dispay.value += value;
}

function backspace(){
    dispay.value = dispay.value.slice(0,-1);
}

function calculate(){
    dispay.value = eval(display.value);
}

function clear1(){
    dispay.value='';
}
function negateNumber(){
    dispay.value = -parseFloat(display.value);
}
function percentage(){
    dispay.value = parseFloat(dispay.value) /100;
}