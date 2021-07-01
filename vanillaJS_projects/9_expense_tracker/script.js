const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

// const dummyTransactions = [
//   { id: 1, text: 'Flower', amount: -20 },
//   { id: 2, text: 'Salary', amount: 300 },
//   { id: 3, text: 'Book', amount: -10 },
//   { id: 4, text: 'Camera', amount: 150 }
// ];

const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));

let transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

// Add transaction

function addTransaction(e) {
    e.preventDefault();

    if(text.value === '' || amount.value.trim() === '') {
        alert('Please add a text and amount');
        return false;
    } else {
        const transaction = {
            id: generateRandomNumber(),
            text: text.value,
            amount: +amount.value
        }
        transactions.push(transaction);

        updateLocalStorage(transactions);

        init();
    }
}

// Generate random number

function generateRandomNumber() {
    return Math.floor(Math.random() * 1000000);
}

// Add transaction to DOM list

function addTransactionDOM(transaction) {

    // Get sign
    const sign = transaction.amount < 0 ? '-' : '+';
    const item = document.createElement('li');

    // Add class based on value

    item.classList.add(transaction.amount < 0 ? 'minus' : "plus");

    item.innerHTML = `
        ${transaction.text} <span>${sign}${formatNumber(Math.abs(transaction.amount))}</span> <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
    `

    list.appendChild(item);
}

// Update the balance, income and expense 

function updateValues() {
    const amounts = transactions
                        .map(transaction => transaction.amount);

    const total = formatNumber(
        +amounts
            .reduce((acc, item) => (acc +=item), 0)
            .toFixed(2)
    );

    const income = formatNumber(
        +amounts
            .filter(item => item > 0)
            .reduce((acc, cur) => acc + cur, 0)
            .toFixed(2)
    );
    

    const expense = formatNumber(
        +amounts
            .filter(item => item < 0)
            .reduce((acc, cur) => acc + cur, 0)
            .toFixed(2)
    );

    balance.innerText = `$${total}`;
    money_plus.innerText = `$${income}`;
    money_minus.innerText = `$${expense}`;
    }

// Remove transaction by ID

function removeTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);

    updateLocalStorage(transactions);

    init();
}

// format number

function formatNumber(number) {
    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// update local storage data

function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Init app

function init() {
    list.innerHTML = '';

    transactions.forEach(addTransactionDOM);
    updateValues();
}

init();  

// EventListner 

form.addEventListener('submit', addTransaction)