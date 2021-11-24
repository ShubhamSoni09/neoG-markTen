
let billamount, cash, diff=0, i, j;

let cashInput = document.querySelector(".cashDiv");
let nextButton = document.querySelector("#next");
let calculateButton = document.querySelector("#calculate");

let errorDiv = document.querySelector(".error");
let table = document.querySelector("table");
let amountDiv = documentcashDivision.querySelector('div.hidden');
let amount = document.querySelector(".amount");

let notesArray = [2000, 500, 100, 20, 10, 5, 1,];
let countArray = [0, 0, 0, 0, 0, 0, 0];

nextButton.addEventListener('click', (e) => {
    e.preventDefault();

    let billInput = document.querySelector("#billamount");

    if( billInput.value === '' || billInput.value <= 0 ) {
        errorDiv.innerText = 'Error: Please enter the value appropriately.';

        amountDiv.classList.add('hidden');

        countArray = countArray.map(num => 0);
        showOutput();
    } else {
        billamount = parseInt(billInput.value);

        errorDiv.innerText = '';

        cashInput.style.display = 'block';
        calculateButtpn.style.display = 'block';
    }
});

calculateButton.addEventListener('click', (e) => {
    e.preventDefault();

    let cashInput = document.querySelector("#cash");
    let billInput = document.querySelector("#billamount");

    countArray = countArray.map(num => 0);
    showOutput();

    if( cashInput.value === ''  || cashInput.value <= 0  || billInput.value === '' || billInput.value <= 0 ) {
        errorDiv.innerText = 'Error: Please enter here the value appropriately.';

        amountDiv.classList.add('hidden');
        
    } else {
        billamount = parseInt(billInput.value);
        cash = parseInt(cashInput.value);
    
        errorDiv.innerText = '';

        amountDiv.classList.add('hidden');

        if( cash === billamount ) {
            errorDiv.innerText = 'No amount to be returned';
        } else if ( cash < billamount ) {
            errorDiv.innerText = 'Error: Cash given cannot be less than billamount amount';
        } else {
            calculateChange();
        }    
    }
});

function calculateChange() {

    diff = parseInt(cash) - parseInt(billamount);

    amount.innerText = `Rs. ${diff}`;

    for( i = 0; i < notesArray.length; i++ ) {

        if( diff >= notesArray[i] ) {
            countArray[i] = Math.floor( diff / notesArray[i] );
            diff -= countArray[i] * notesArray[i];
        } else {
            countArray[i] = 0;
        }
    }

    showOutput();
    amountDiv.classList.remove('hidden');
}

function showOutput() {
    let tbody = table.tBodies[0];
    
    for( j=0; j<countArray.length; j++ ) {
        tbody.rows[j+1].cells[1].innerHTML = countArray[j];
    }
    
}