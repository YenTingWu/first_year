const main = document.getElementById('main');
const adduserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');


let data = [];

getRandomUser();
getRandomUser();
getRandomUser();


// fetch random user and add money
async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();

    const user = data.results[0];

    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    };
    addData(newUser);
}

// doubleMoney 

function doubleMoney() {
    data = data.map(user => {
        return {...user, money: user.money * 2};
    });

    updateDom();
}

// sortByRichest

function sortByRichest() {
    data = data.sort((person1, person2) => person1.money - person2.money);

    updateDom();
}

// Filter only millionaires

function showMillionaires() {
    data = data.filter(person => person.money > 1000000);

    updateDom();
}

// Calculate the total wealth

function calculateTotalWealth() {
    const totalWealth = data.reduce((arr, cur) => {
        return arr + cur.money;
    }, 0);

    console.log(totalWealth);

    const element = document.createElement('div');
    element.classList.add('totalWealth');
    

    element.innerHTML = `Total Wealth: <strong>${formatMoney(totalWealth)}</strong>` 

    main.appendChild(element);
}


// Add new obj to data arr 

function addData(obj) {
    data.push(obj);

    updateDom();
}

// Update DOM

function updateDom(providedData = data) {
    // Clear main div

    main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

    providedData.forEach(person => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${person.name}</strong> ${formatMoney
            (person.money)
        }`;

        main.appendChild(element);
    });
}

// Format number as money
// https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string

function formatMoney(number) {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}




// Event Listeners

adduserBtn.addEventListener('click', getRandomUser);

doubleBtn.addEventListener('click', doubleMoney);

sortBtn.addEventListener('click', sortByRichest);

showMillionairesBtn.addEventListener('click', showMillionaires);

calculateWealthBtn.addEventListener('click', calculateTotalWealth);