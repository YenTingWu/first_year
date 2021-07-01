const firstClass = document.querySelector('.firstClass');
const businessClass = document.querySelector('.businessClass');
const economyClass = document.querySelector('.economyClass');
const ticketCategories = document.getElementById('ticketCategories');
const register = document.getElementById('register');


// Display Tickets' Amount 

function displayTicketAmount(input, inputAmount, message) {
    if(inputAmount === 1) {
        register.style.visibility = 'visible';
        input.style.display = 'block';
        input.innerText = inputAmount + " " + message;
    } else if (inputAmount > 1) {
        input.innerText = inputAmount + " " + message + "s";
        input.style.display = 'block';
    } else if (inputAmount === 0) {
        input.style.display = 'none';
    }
}

// Update Selected Count 

function updateSelectedCount() {
    const firstClassAmount = document.querySelectorAll('.firstClass .selected').length;
    const businessClassAmount = document.querySelectorAll('.businessClass .selected').length;
    const economyClassAmount = document.querySelectorAll('.economyClass .selected').length;
    const firstTicketDisplay = document.getElementById('firstTicket');
    const businessTicketDisplay = document.getElementById('businessTicket');
    const economyTicketDisplay = document.getElementById('economyTicket'); 
    const totalCostDisplay = document.getElementById('totalCost');
    const firstClassTotalCost = firstClassAmount * 3000;
    const businessClassTotalCost = businessClassAmount * 1000;
    const economyClassTotalCost = economyClassAmount * 300;
    const totalCost = firstClassTotalCost + businessClassTotalCost + economyClassTotalCost;
    
    displayTicketAmount(firstTicketDisplay, firstClassAmount,'first flight ticket');
    displayTicketAmount(businessTicketDisplay, businessClassAmount,'business flight ticket');
    displayTicketAmount(economyTicketDisplay, economyClassAmount,'economy flight ticket');

    totalCostDisplay.innerText = '$' + totalCost;
}


// Seat EventHandler

firstClass.addEventListener('click', e => {
    if(e.target.classList.contains('seat') && 
       !e.target.classList.contains('occupied') &&
       !e.target.parentElement.parentElement.classList.contains('unselected')) 
       {
           e.target.classList.toggle('selected');
       }
    updateSelectedCount();
});

businessClass.addEventListener('click', e => {
    if(e.target.classList.contains('seat') && 
       !e.target.classList.contains('occupied') &&
       !e.target.parentElement.parentElement.parentElement.classList.contains('unselected')) {
           e.target.classList.toggle('selected');
       }
    updateSelectedCount();
});

economyClass.addEventListener('click', e => {
    if(e.target.classList.contains('seat') && 
       !e.target.classList.contains('occupied') &&
       !e.target.parentElement.parentElement.parentElement.classList.contains('unselected')) {
           e.target.classList.toggle('selected');
       }
    updateSelectedCount();
});

// EventHandler -----> #ticketCategories change

function removeUnselected() {
    firstClass.classList.remove('unselected');
    businessClass.classList.remove('unselected');
    economyClass.classList.remove('unselected');
}

function unselectedSection(input) {
    input.classList.toggle('unselected');
}

ticketCategories.addEventListener('change', e => {
    if(e.target.value === '3000') {
        removeUnselected();
        unselectedSection(businessClass);
        unselectedSection(economyClass);
    } else if (e.target.value === '1000') {
        removeUnselected();
        unselectedSection(firstClass);
        unselectedSection(economyClass)
    } else if (e.target.value === '300') {
        removeUnselected();
        unselectedSection(firstClass);
        unselectedSection(businessClass);
    }
});


unselectedSection(firstClass);
unselectedSection(businessClass);