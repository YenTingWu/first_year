const search = document.getElementById('search'),
    searchBtn = document.getElementById('searchBtn'),
    randomBtn = document.getElementById('randomBtn'),
    cartBtn = document.getElementById('cart'),
    cartContainer = document.getElementById('cartContainer'),
    container = document.getElementById('container');
    resultHeading = document.getElementById('result-heading'),
    cocktailsEl = document.getElementById('cocktailsEl'),
    logo = document.getElementById('logo'),
    totalCartAmounts = document.getElementById('total-cart-amounts'),
    searchBtnNote = document.getElementById('searchBtn-note'),
    randomBtnNote = document.getElementById('randomBtn-note'),
    mainNav = document.getElementById('main-nav');
    

cartContainer.innerText = `You haven't selected any drink!`;

// popup the cart container

function popupCartContainer() {
    cartContainer.classList.toggle('popupCartContainer');
}

// Get a single drink page

function getSingleDrinkData(drinkID) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkID}`)
        .then(res => res.json())
        .then(data => {
            const drink = data.drinks[0];

            renderDOM(drink);
        })
}

// Get a random drink

function getRandomDrink() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(data => {
            const drink = data.drinks[0];

            renderDOM(drink);
        })
}

// Render the single drink data on the DOM and change the style of div.cocktailsEl

function renderDOM(drink) {
    let ingredients = [];

    cocktailsEl.style.gridTemplateColumns = "1fr";

    // Restructure the data

    for(let i = 1; i < 15; i++) {
        if(drink[`strIngredient${i}`]) {
            ingredients.push(`${drink[`strIngredient${i}`]} ${drink[`strMeasure${i}`]}`);
        } else {
            break;
        }
    }

    // render the data on the DOM

    resultHeading.innerHTML = `<h2>${drink.strDrink}</h2>`;
    cocktailsEl.innerHTML = `
            <div id="single-cocktail">
                <img 
                    id="single-cocktail-img" 
                    src="${drink.strDrinkThumb}" 
                    alt="${drink.strDrink}" 
                    />    
                <h3>Glass:  ${drink.strGlass}</h3>
                <p>${drink.strInstructions}</p>
                <ul id="single-page-ingredients">
                    ${ingredients.map(ing => `<li>${ing}</li>`).join('')}
                </ul>
            </div>
        `
}

// Add to cart list 

function addToCart(drinkID) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkID}`)
        .then(res => res.json())
        .then(data => {
            const drink = data.drinks[0];

            cartData(drink);
        })
}

// Store the data going into the cart

const cartList = [];

function cartData(drink) {
    const checkSelected = cartList.some(cocktailInfo => {
        return cocktailInfo.name === drink.strDrink
    }) 

    if(checkSelected) {
        const i = getPosition(drink.strDrink);
        cartList[i].count += 1;       
    } else {
        cartList.push({
            name: drink.strDrink,
            category: drink.strCategory,
            image: drink.strDrinkThumb,
            count: 1
        })
    }
    displayToCartContainer(cartList);
}

// Display the cart data to the cart container

function displayToCartContainer(cartList) {

    cartContainer.innerHTML = cartList.map(item => {
        return (
            `
            <div class="cart-item" id=${item.name}>
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.category}</p>
                <div class="cart-counting-area">
                    <button class="cart-btn" data-parent="${item.name}" data-operator="-">
                        <i class="fas fa-minus"></i>
                    </button>
                    <input type="text" data-parent="${item.name}" value="${item.count}" class="cartAmountInput"/>
                    <button class="cart-btn" data-parent="${item.name}" data-operator="+">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            `
        ) 
    })
    .join('') 
    + 
    `
    <div id="register">
        You have order &nbsp<span id="total-amounts-register"></span>&nbsp&nbsp <span id="drink-register"></span>
        <button id="checkOut" type="submit">Check out</button>  
    </div>
       `;

    displayTotalCartAmount();  
}

// drunkYourNight

function drunkYourNight() {
    cocktailsEl.style.gridTemplateColumns = '1fr';
    cocktailsEl.innerHTML = cartList.map(item => {
        return (
            `
            <div class="checkout-item" id=${item.name}>
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.category}</p>
                <p>${item.count}</p>
            </div>
            `
        ) 
    })
    .join('') 
}

// Get the information of cocktails

function searchCocktails(e) {
    e.preventDefault();
    
    const term = search.value;

    // Check if there a value in the seach. If so, the next step we're going to do if fetching the data from thecocktaildb
    // If not, we give a awareness and render the div.cocktails with empty string.

    if(term) {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${term}`)
        .then(res => res.json())
        .then(data => {
            const cocktails = data.drinks;
            
            cocktailsEl.style.gridTemplateColumns = "repeat(4, 1fr)";
            
            resultHeading.innerHTML = 
                `<h2>The result for searching <span>${term}</span></h2>` ;
                
            // Check if cocktails has a value. If so, then we render div#cocktails with the cocktail info and image
            // If not, return false
            if(cocktails) {
                cocktailsEl.innerHTML = 
                    cocktails.map(cocktail => 
                        `
                        <div class="cocktail">
                            <img 
                                src="${cocktail.strDrinkThumb}" 
                                alt="${cocktail.strDrink}"
                                />
                            <div class="drink-info" data-drinkID=${cocktail.idDrink}>
                                <h3>${cocktail.strDrink}</h3>
                                <div class="add-to-cart" data-drinkID=${cocktail.idDrink}>
                                    <i class="fas fa-cart-plus"></i><h5>Add to List</h5>
                                </div>
                            </div>
                        </div>
                        `
                    )
                    .join('')
            } else {
                return false;
            }
        }) 
    } else {
        resultHeading.innerHTML = 
            `<h2>Please enter a cocktail</h2>`
        cocktailsEl.innerHTML = '';
    }   
}

// Delete the div element(cart item) in the cart container

function deleteCartItem(target) {
    const i = getPosition(target);
    if(cartList[i].count === +0) {
        cartList.splice(i, 1);
    } 
}

// Plus and minus btns inside the cart container

function plusMinus(btn, operator) {
    const btnParent = btn.getAttribute('data-parent');
    const i = getPosition(btnParent)
    
    if(operator === "+") {
        cartList[i].count++;
    } else {
        if(cartList[i].count <= 0) {
            cartList[i].count = 0;
        } else {
            cartList[i].count--;
        }
    }
    deleteCartItem(btnParent);
    displayToCartContainer(cartList);
}

// total amount 

function totalDrinks() {
    return cartList.reduce((acc, cur) => {
        return +cur.count + acc;
    }, 0);
}

// Get the position in the cartList array

function getPosition(target) {
    let i;
    cartList.forEach((cocktail, index) => {
        if(cocktail.name === target) {
            i = index;
        };
    });
    return i;
}

// Display the total amounts beside the cart icon

function displayTotalCartAmount() {
    let amount = totalDrinks();

    if(amount > 0) {
        const totalAmountsRegister = document.getElementById('total-amounts-register');
        const drink = document.getElementById('drink-register');
        totalCartAmounts.style.display = 'block';
        totalCartAmounts.innerText = amount;
        totalAmountsRegister.innerHTML = amount;
        amount === 1 ? drink.innerText = "drink" : drink.innerText = 'drinks';
    } else {
        totalCartAmounts.style.display = 'none';
        cartContainer.innerText = `You haven't selected any drink!`;
    }
}

// Event listners

window.addEventListener('scroll', () => {
    if(window.scrollY !== 0) {
        mainNav.classList.add('dark');
    } else {
        mainNav.classList.remove('dark');
    }
});
searchBtn.addEventListener('click', searchCocktails);
randomBtn.addEventListener('click', getRandomDrink);
cartBtn.addEventListener('click', popupCartContainer);
searchBtn.addEventListener('mouseover', () => {
    searchBtnNote.classList.add('popupNote');
});

searchBtn.addEventListener('mouseout', () => {
    searchBtnNote.classList.remove('popupNote');
});

randomBtn.addEventListener('mouseover', () => {
    randomBtnNote.classList.toggle('popupNote');
});

randomBtn.addEventListener('mouseout', () => {
    randomBtnNote.classList.remove('popupNote');
});

logo.addEventListener('click', () => {
    resultHeading.innerHTML = '';
    cocktailsEl.innerHTML = '';
});

cartContainer.addEventListener('click', e => {
    const btn = e.path.find(item => {
        if(item.classList) {
            return item.classList.contains('cart-btn');
        } else {
            return false;
        }
    });

    if(btn) {
        const operator = btn.getAttribute('data-operator');
        plusMinus(btn ,operator);
    } else {
        return false;
    }
})

cartContainer.addEventListener('change', e => {
    const cocktailName = e.target.getAttribute('data-parent');
    const i = getPosition(cocktailName);

    if(!isNaN(e.target.value)) {
        cartList[i].count = +e.target.value;
    } else {
        alert('please enter a number');
        return false;
    }
    deleteCartItem(cocktailName);
    displayToCartContainer(cartList);
});

cartContainer.addEventListener('click', e => {
    const checkOutBtn = e.path.find(item => {
        if(item.id) {
            return item.id === 'checkOut'; 
        } else {
            return false;
        }
    });    
    if(checkOutBtn) {
        drunkYourNight();
    }
})

cocktailsEl.addEventListener('click', e => {
    const drinkInfo = e.path.find(item => {
        if(item.classList) {
            return item.classList.contains('drink-info');
        } else {
            return false;
        }
    });

    if(drinkInfo) {
        const drinkID = drinkInfo.getAttribute('data-drinkid');
        if(!e.target.classList.contains('add-to-cart') && 
           !e.target.parentElement.classList.contains('add-to-cart')) {
                getSingleDrinkData(drinkID);
           } else {
                addToCart(drinkID);
           }  
    } else {
        return false;
    }
});