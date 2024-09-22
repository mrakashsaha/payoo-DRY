document.getElementById ('btn-withdraw-money').addEventListener ('click', function (event) {
    event.preventDefault();
    const withdrawAmount = getInputFieldValueById ('withdraw-money-input');
    const withdrawPin = getInputFieldValueById ('input-withdraw-pin');

    if (isNaN (withdrawAmount)) {
        alert ('Please enter valid amount');
        return;
    }

    if (withdrawPin === 1234) {
        const balance = getInnerTextValueById ('account-balance');
        if (withdrawAmount>balance) {
            alert ('You have not enough balance');
            return;
        }
        const updateBalance = balance - withdrawAmount;
        setInnerTextValueById('account-balance', updateBalance);

        // Add to transaction hisotry

        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
        <h4 class="text-2xl font-bold">Withdraw</h4>
        <p>Withdraw: ${withdrawAmount} Tk. Balance ${updateBalance}</p>`

        document.getElementById('transaction-list').appendChild(div);
    }

    else {
        alert ('Wrong Pin! Please Enter the PIN correctly')
    }
})