
function myFunction(){
var total=parseFloat(document.getElementsByClassName("total")[0].value);
var rate=parseFloat(document.getElementsByClassName("rate")[0].value);
console.log("total"+total);
if(isNaN(total)){
    console.log("entereddddd")
    document.querySelector('.total-error').innerHTML="please enter total error";
}
else {
    document.querySelector('.total-error').innerHTML=" ";
}
if(isNaN(rate)){
    
    document.querySelector('.rate-error').innerHTML="please enter rate error";
}
else {
    document.querySelector('.rate-error').innerHTML=" ";
}
if(isNaN(total)|| isNaN(rate)){
    document.querySelector('.tip').innerHTML=" ";
    document.querySelector('.tax').innerHTML=" ";
    document.querySelector('.grand').innerHTML=" ";
}
if(!isNaN(total) &&  !isNaN(rate)){
    document.querySelector('.total-error').innerHTML=" ";
    document.querySelector('.rate-error').innerHTML="  ";
console.log("total"+total+"rate"+rate);
var tax=total*(5.5/100);
var tip=total*(rate/100);
var grand=total+tax+tip;
console.log("grand"+grand);
document.querySelector('.tip').innerHTML="$"+tip;
document.querySelector('.tax').innerHTML="$"+tax;
document.querySelector('.grand').innerHTML="$"+grand;
console.log(total)
}
}

document.querySelector('#submit').addEventListener('click', myFunction)