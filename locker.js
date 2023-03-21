const depositBtn = document.getElementById('deposit-btn');
const depositField = document.getElementById('deposit-field')
const previousDepositAmount = document.getElementById('deposit-amount')
// balance
const balance = document.getElementById('balance-amount');
const loanBtn = document.getElementById('loan-btn');
const loanAmount = document.getElementById('loan-amount');

loanBtn.addEventListener('click',function(){
   
    const loanAmountFloat = parseFloat(loanAmount.innerText);
    const loanField = document.getElementById('loan-field');
    const loanFieldFloat = parseFloat(loanField.value);
    if(loanFieldFloat > 10000 || loanAmountFloat >= 10000 || (loanFieldFloat+loanAmountFloat) > 10000){
        alert('you can not take loan more than 10000')
        
    }
    else{
        loanAmount.innerText = loanAmountFloat + loanFieldFloat
        balance.innerText = (parseFloat(balance.innerText)) + loanFieldFloat   
        
    }
    loanField.value = '';  
   
    
})

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
    
    if((parseFloat(loanAmount.innerText)) < 1){
        balance.innerText = newBalanceAmount
    }
    else if(newDepositField >= (parseFloat(loanAmount.innerText))){
        balance.innerText = balanceCurrentAmount + (newDepositField - (parseFloat(loanAmount.innerText)))
        loanAmount.innerText = (parseFloat(loanAmount.innerText)) - (parseFloat(loanAmount.innerText))
    }
    else{
        balance.innerText = balanceCurrentAmount;
        loanAmount.innerText = (parseFloat(loanAmount.innerText)) - newDepositField
    }
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

