const billAmount = document.querySelector("#bill-amount");
const checkButton = document.querySelector("#check-btn");
const cashGiven = document.querySelector("#cash-given");
const errorMessage =document.querySelector("#error-message")
checkButton.addEventListener("click", checkEventHandler );
function checkEventHandler(){

if (Number(cashGiven.value)<=0)
{errorMessage.innerText="Please Enter Value greater Than Bill Amount"
    console.log ("Please Enter Value greater Than Bill Amount")
}
else if (Number(cashGiven.value)<=Number(billAmount.value)){
    errorMessage.innerText="CASH GIVEN IS LESS THAN BILL AMOUNT"
console.log("CASH GIVEN IS LESS THAN BILL AMOUNT")
}
else {
    var result ="cashGiven.value-billAmount.value"
}
}
