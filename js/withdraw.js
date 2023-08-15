document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputValue = withdrawInput.value;
    const withdrawInputValueNumber = parseFloat(withdrawInputValue)
    withdrawInput.value =''

    //
    const withdrawCurrent = document.getElementById('withdraw-current');
    const withdrawCurrentValue =withdrawCurrent.innerText;
    const withdrawCurrentValueNumber = parseFloat(withdrawCurrentValue);

    //
    const currentBalance = document.getElementById('current-balance');
    const currentBalanceValue = currentBalance.innerText;
    const currentBalanceValueNumber = parseFloat(currentBalanceValue);

    //
    const withdrawAmount = withdrawInputValueNumber + withdrawCurrentValueNumber;
    withdrawCurrent.innerText = withdrawAmount;
    currentBalance.innerText = currentBalanceValueNumber -withdrawAmount;

})