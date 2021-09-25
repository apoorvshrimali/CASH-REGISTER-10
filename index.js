const billAmount = document.querySelector("#bill-amount");
const checkButton = document.querySelector("#check-btn");
const cashGiven = document.querySelector("#cash-given");
const errorMessage =document.querySelector("#error-message")
const NumberOfNotes = document.querySelectorAll(".number-of-notes") 


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
    console.log(NumberOfNotes)
    const notes = [2000,500, 200, 100 ,50 ,20 ,10 ,5 , 2 , 1 ]
    var netAmount =cashGiven.value-billAmount.value
    var prevAmount = netAmount  
    for(let i = 0 ;i < notes.length ; i++){
        const result  = Math.floor(prevAmount / notes[i])
        NumberOfNotes[i].innerText = result // 2
        prevAmount = prevAmount % notes[i]  
    }
}
}
