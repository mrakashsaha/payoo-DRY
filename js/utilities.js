// Common shared function

function getInputFieldValueById (id) {
    return parseFloat(document.getElementById (id).value);
}

function getInnerTextValueById (id) {
    return parseFloat (document.getElementById (id).innerText);
}

function setInnerTextValueById (id, value) {
    document.getElementById(id).innerText = value;
}


// Toggle between sections by button

function showSectionById (id) {
    document.getElementById('add-money-section').classList.add ('hidden');
    document.getElementById('withdraw-money-section').classList.add ('hidden');
    document.getElementById('transactions-section').classList.add ('hidden');
    document.getElementById(id).classList.remove ('hidden');
}