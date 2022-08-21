document.getElementById('deposit-button').addEventListener('click', function(){
    const newDepositeAmount = getInputFieldValueById('deposit-field');
    const previousdeposit = getTextElementvalueById('deposit-total');
    const totalDepositAmount = newDepositeAmount + previousdeposit;
    setTextElementValueById('deposit-total',totalDepositAmount);
    const totalFinalBalance = getTextElementvalueById('balance-total');
    const totlaFinslshowdeposit = totalFinalBalance + newDepositeAmount;

    setTextElementValueById('balance-total',totlaFinslshowdeposit);
})