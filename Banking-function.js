function getInputValue(inputId){
    const inputAmount = document.getElementById(inputId);
    const inputAmountText = inputAmount.value;
    const inputValue = parseFloat(inputAmountText);
    inputAmount.value= '';
    return inputValue;
}

function updateTotalField(totalField,amount){
    const totalAmount = document.getElementById(totalField);
    const totalAmountText = totalAmount.innerText;
    const totalAmountValue = parseFloat(totalAmountText);
    document.getElementById(totalField).innerText = totalAmountValue + amount;
}

function getCurrentBalance(){
    const balanceAmount = document.getElementById('balance-total');
    const balanceAmountText = balanceAmount.innerText;
    const previosBalanceTotal = parseFloat(balanceAmountText);
    return previosBalanceTotal;
}

function updatebalance(amount, isadd){
    const balanceTotal = document.getElementById('balance-total');
    const previousBalance = getCurrentBalance();
    if(isadd == true){
        balanceTotal.innerText = previousBalance + amount;
    }
    else{
        balanceTotal.innerText = previousBalance - amount;   
    }
}

document.getElementById('deposit-button').addEventListener('click',function(){
    const depositValue = getInputValue('deposit-input');
    if( depositValue>0){
        updateTotalField('deposit-total', depositValue);
        updatebalance( depositValue, true);
    }
    else{
        alert("You Can't negative OR Zero value Deposit !!")
    }
})

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawValue = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawValue > 0 && withdrawValue < currentBalance){
        updateTotalField('withdraw-total', withdrawValue);
        updatebalance(withdrawValue , false)
    }
    else if(withdrawValue < 0){
        alert("You Can't negative value Withdraw !!")
    }
    else if (withdrawValue > currentBalance){
        alert(" wihdraw amount exit your current balance !!" )
    }
    
})