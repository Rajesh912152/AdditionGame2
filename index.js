let firstEl=document.getElementById("first");
let secondEl=document.getElementById("second");
let userInputEl=document.getElementById("userInput");
let resultEl=document.getElementById("result");

let successMsg="Congratulations! You got it right."
let tryAgainMsg="Please Try Again.";

function check(){
    let firstElValue=parseInt(firstEl.textContent);
    let secondElvalue=parseInt(secondEl.textContent);
    let userInputElValue=parseInt(userInputEl.value);
    let sumEl=firstElValue+secondElvalue;
    if (sumEl==userInputElValue){
        resultEl.textContent=successMsg;
        resultEl.style.backgroundColor="#028a0f"
    }
    else{
        resultEl.textContent=tryAgainMsg;
        resultEl.style.backgroundColor="#1e217c"
    }

}
function restart(){
    let randomNumber1=Math.random()*100
    let randomNumber2=Math.random()*100
    firstEl.textContent=Math.ceil(randomNumber1)
    secondEl.textContent=Math.ceil(randomNumber2)
    resultEl.textContent="";
    userInputEl.value=""
}
restart()