const theater = document.querySelector('.theater');
const seats = document.querySelectorAll('.theater .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelector = document.getElementById('movieSelector');

//

populateUI();

// Use + || parseFloat() to change the string to number 

let ticketPrice = +movieSelector.value; 

// Update count and price

const updateSelectedCount = () => {
    // When we use querySelectorAll to grab the elements, it will return NodeList, which is not an array
    // https://gomakethings.com/converting-a-nodelist-to-an-array-with-vanilla-javascript/

    const selectedSeats = document.querySelectorAll('.row .selected');

    // NodeLists and Arrays are two different things because NodeLists are actually not a JavaScript API, but a browser API. //
    // Therefore, we have to convert NodeList into an array so that we can use the ES6 array function // 
    // How do we do this?  

    // 1. Copy the value into an another array (We can use the spread operation[...arrayName])
    // 2. Map through the array
    // 3. return an array

    const seatsIndex = [...selectedSeats].map( seat => [...seats].indexOf(seat));
   
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const countselectedSeats = selectedSeats.length;
    count.innerText = countselectedSeats;
    total.innerText = countselectedSeats * ticketPrice;
}

// Set the moive data to the local storage

const setMovieData = (movieIndex, moviePrice) => {
    localStorage.setItem('movieIndex', movieIndex);
    localStorage.setItem('moviePrice', moviePrice);
}

// Get data from localStorage and populate UI

function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    if(selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if(selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }
    const selectedMovieIndex = localStorage.getItem('movieIndex');
    
    if(selectedMovieIndex !== null) {
        movieSelector.selectedIndex = selectedMovieIndex;
    }
} 


// Movie selected event

movieSelector.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);

    updateSelectedCount();
});

// Seat click event

theater.addEventListener('click', e => {
    if(e.target.classList.contains('seat') && 
       !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
    }

    updateSelectedCount();
});

// Initial count and price

updateSelectedCount();