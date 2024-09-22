// document.getElementById ('btn-add-money').addEventListener ('click', function (event) {
//     event.preventDefault();

//     const addMoneyAmount = document.getElementById ('add-money-input').value;
//     const pinNumber = document.getElementById ('input-pin').value;
//     console.log (addMoneyAmount, pinNumber);

//     if (pinNumber === '1234') {
//         const balance = parseFloat (document.getElementById('account-balance').innerText);
//         const updateBalance = balance + parseFloat (addMoneyAmount);
//         document.getElementById ('account-balance').innerText = updateBalance;
        
//     }

//     else {
//         alert ('Wrong Pin Number');
//         document.getElementById ('input-pin').value = '';
//     }

    
// })

document.getElementById ('btn-add-money').addEventListener ('click', function (event) {
    event.preventDefault();
    const addMoneyAmount = getInputFieldValueById('add-money-input');
    const pinNumber = getInputFieldValueById('input-pin');

    if (isNaN (addMoneyAmount)) {
        alert ('Please enter valid amount');
        return;
    }
    if (pinNumber === 1234) {

        const balance = getInnerTextValueById ('account-balance');
        const updateBalance = balance + addMoneyAmount;
        setInnerTextValueById ('account-balance', updateBalance);

        // Add to transaction history
        const entry = document.createElement('p');
        entry.innerText = `Add Money: +${addMoneyAmount} Tk. Balance: ${updateBalance}`
        // Should be a common function
        document.getElementById('transaction-list').appendChild(entry);
    }

    else {
        alert ('Wrong PIN! Plase Enter correct PIN?');
        
    }
})