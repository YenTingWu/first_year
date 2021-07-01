const cardsContainer = document.getElementById('cards-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const currentEl = document.getElementById('current');
const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const addCardBtn = document.getElementById('add-card');
const clearBtn = document.getElementById('clear');
const addContainer = document.getElementById('add-container');

// Keep track of current card

let currentActivedCard = 0;

// Store DOM cards

const cardsEl = [];

// Store cards data

// const cardsData = [
//     {
//         question: 'What must a variable begin with?',
//         answer: 'A letter, $ or _'
//     },
//     {
//         question: 'What is a variable?',
//         answer: 'Container for a piece of data'
//     },
//     {
//         question: 'Example of Case Sensitive Variable',
//         answer: 'thisIsAVariable'
//     }
// ];

// Store cards data

const cardsData = getCardData();

// Create all cards 

function createCards() {
    cardsData.forEach((data, index) => createCard(data, index));
}

// Create a single card in DOM

function createCard(data, index) {
    const card = document.createElement('div');
    card.classList.add('card');

    if(index === 0) {
        card.classList.add('active');
    }

    card.innerHTML = `
        <div class="inner-card">
            <div class="inner-card-front">
                <p>
                    ${data.question}
                </p>
            </div>
            <div class="inner-card-back">
                <p>
                    ${data.answer}
                </p>
            </div>
        </div>
    `;

    card.addEventListener('click', () => card.classList.toggle('show-answer'))

    // Add to DOM cards

    cardsEl.push(card);

    cardsContainer.appendChild(card);

    updateCurrentText();
}

// Show number of cards 

function updateCurrentText() {
    currentEl.innerText = `${currentActivedCard + 1} / ${cardsEl.length}`
}

// Get card from local storage

function getCardData() {
    const cards = JSON.parse(localStorage.getItem('cards'));
    return cards === null ? [] : cards;
}

// Add card to local storage

function setCardsData(cards) {
    localStorage.setItem('cards', JSON.stringify(cards));

    window.location.reload;
}

createCards();

// Event Listeners 

// nextBtn

nextBtn.addEventListener('click', () => {
    cardsEl[currentActivedCard].className = 'card left';

    currentActivedCard = currentActivedCard + 1;

    if(currentActivedCard > cardsEl.length - 1) {
        currentActivedCard = cardsEl.length - 1;
    }

    cardsEl[currentActivedCard].className = 'card active'

    updateCurrentText();
}); 

// prevBtn

prevBtn.addEventListener('click', () => {
    cardsEl[currentActivedCard].className = 'card left';

    currentActivedCard = currentActivedCard - 1;

    if(currentActivedCard < 0) {
        currentActivedCard = 0;
    }

    cardsEl[currentActivedCard].className = 'card active'

    updateCurrentText();
});

// showBtn

showBtn.addEventListener('click', () => addContainer.classList.add('show'));

// hideBtn

hideBtn.addEventListener('click', () => addContainer.classList.remove('show'));

// add new card

addCardBtn.addEventListener('click', () => {
    const question = questionEl.value;
    const answer = answerEl.value;

    if(question.trim() && answer.trim()) {
        const newCard = {question, answer};        createCard(newCard);

        questionEl.value = '';
        answerEl.value = '';
    
        addContainer.classList.remove('show');
    
        cardsData.push(newCard);
        setCardsData(cardsData);
    }
});

// Clear cards button

clearBtn.addEventListener('click', () => {
    localStorage.clear();
    cardsContainer.innerHTML = '';
    window.location.reload();
});