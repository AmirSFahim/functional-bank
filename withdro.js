document.getElementById('withdraw-button').addEventListener('click',function(){
    const newWtidrowAmount = getInputFieldValueById('withdraw-all-filed');
    const previousWithdrowTotal = getTextElementvalueById('withdraw-total');
    const totla = newWtidrowAmount + previousWithdrowTotal;
    setTextElementValueById('withdraw-total',totla);
    const totalFinalBalance = getTextElementvalueById('balance-total');
    const totlaFinslshow = totalFinalBalance - newWtidrowAmount;

    setTextElementValueById('balance-total', totlaFinslshow);
})
// document.getElementById('withdraw-button').addEventListener('click', function(){
//     const newWithdrawAmount = getInputFieldValueById('withdraw-all-filed');
//     console.log(newWithdrawAmount)
// })