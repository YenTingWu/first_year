const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const richestPeople = [
    'Jeff Bezos',
    'Bill Gates',
    'Warren Buffett',
    'Bernard Arnault',
    'Carlos Slim Helu',
    'Amancio Ortega',
    'Larry Ellison',
    'Mark Zuckerberg',
    'Michael Bloomberg',
    'Larry Page'
];

// Store listitems 

const listItems = [];

let dragStartIndex;

createList();

// Insert list items into DOM

function createList() {
    [...richestPeople]
        .map(person => ({name: person, sortNumber: Math.random()}))
        .sort((a, b) => a.sortNumber - b.sortNumber)
        .forEach((person, index) => {
            
            const listItem = document.createElement('li');

            listItem.setAttribute('data-index', index);

            listItem.innerHTML = `
                    <span class="number">${index + 1}</span>
                    <div class="draggable" draggable="true">
                        <p class="person-name">${person.name}</p>
                        <i class="fas fa-grip-lines"></i>
                    </div>
                `;
            
            listItems.push(listItem);

            draggable_list.appendChild(listItem);
        });
    addEventListeners();
}

// Drag start 

function dragStart() {
    dragStartIndex = +this.closest('li').getAttribute('data-index');
    this.closest('li').classList.remove('right');
}

// Drag over

function dragOver(e) {
    e.preventDefault();
    this.classList.add('over');
}

// Drag drop 

function dragDrop() {
    const dragEndIndex = +this.getAttribute('data-index');
    swapItem(dragStartIndex, dragEndIndex);
    this.classList.remove('over');

}

// Swap the item from startIndex to endIndex


function swapItem(fromIndex, toIndex) {
    
    const itemOne = listItems[fromIndex].querySelector('.draggable');
    const itemTwo = listItems[toIndex].querySelector('.draggable');

    
    listItems[fromIndex].appendChild(itemTwo);
    listItems[toIndex].appendChild(itemOne);
}

// Drag Leave 

function dragLeave() {
    this.classList.remove('over');
}

// Check the order

function checkOrder() {
    listItems.forEach((list, index) => {
        const sortName = list.querySelector('.person-name').innerText.trim();
        if(richestPeople[index] === sortName) {
            list.classList.remove('wrong');
            list.classList.add('right');
        } else {
            list.classList.add('wrong');
        }
    })
}

// all the drag event listeners

function addEventListeners() {
    const draggables = document.querySelectorAll('.draggable');
    const dragListItems = document.querySelectorAll('.draggable-list li');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart);
    })

    dragListItems.forEach((item, index) => {
        item.addEventListener('dragover', dragOver);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragleave', dragLeave);
    });
}

check.addEventListener('click', checkOrder);