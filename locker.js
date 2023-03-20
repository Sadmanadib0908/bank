const depositBtn = document.getElementById('deposit-btn');
const depositField = document.getElementById('deposit-field')
const previousDepositAmount = document.getElementById('deposit-amount')
// balance
const balance = document.getElementById('balance-amount');



depositBtn.addEventListener('click', function () {
    // balance related
    const balanceAmount = balance.innerText;
    const balanceCurrentAmount = parseFloat(balanceAmount);

    // deposit related
    const newDepositField = parseFloat(depositField.value);
    const newPreviousDepositAmount = parseFloat(previousDepositAmount.innerText)
    // result related
    const finalDeposit = newPreviousDepositAmount + newDepositField;
    const newBalanceAmount = balanceCurrentAmount + newDepositField;
    balance.innerText = newBalanceAmount
    previousDepositAmount.innerText = finalDeposit
    // clearing input field
    depositField.value = ''
})

const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener("click", function () {

    const withDrawAmount = document.getElementById('withdraw-amount');
    const withDrawField = document.getElementById('withdraw-field');
    const withDrawAmountFloat = parseFloat(withDrawAmount.innerText);
    const withDrawFieldFloat = parseFloat(withDrawField.value);
    
    // finalDeposit.innerText = finalDeposit - withDrawAmountFloat;
    if(parseFloat(balance.innerText) < withDrawFieldFloat){
        alert('You do not have enough balance');
    }
    else if(withDrawFieldFloat < 0){
        alert('please give the amount in positive')
    }
    else{
        withDrawAmount.innerText = withDrawAmountFloat + withDrawFieldFloat;    
        balance.innerText = (parseFloat(balance.innerText)) - withDrawFieldFloat
    }
    withDrawField.value = ''

})

