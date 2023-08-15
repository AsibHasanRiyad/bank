document.getElementById('deposit-button').addEventListener('click',function(){
    const depositInput =document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    const depositAmountValue = parseFloat(depositAmount)
    //
    const depositCurrent = document.getElementById('deposit-current');
    const depositCurrentValue = depositCurrent.innerText;
    const depositCurrentValueNumber = parseFloat(depositCurrentValue)
    depositCurrent.innerText = depositAmountValue + depositCurrentValueNumber;
    depositInput.value =''

    // 
    const currentBalance = document.getElementById('current-balance');
    const currentBalanceValue = currentBalance.innerText;
    const currentBalanceValueNumber = parseFloat(currentBalanceValue)
    currentBalance.innerText = depositAmountValue + currentBalanceValueNumber;
    
})
