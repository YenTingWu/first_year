const submitButton = document.getElementById('button');
const userNameBox = document.querySelector('#userName')
const passwordBox = document.querySelector("#password");
const confirmPasswordBox = document.querySelector("#confirm_password");
const emailBox = document.querySelector("#email");

const includeLetter = () => {
    const password = passwordBox.value;
    const passwordArray = password.split("");
    const letterArray = 
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    return passwordArray.some(item => {
        const lowItem = item.toLowerCase();
        return (letterArray.indexOf(lowItem) > -1);
    });
}

const checkUserName = () => {
    const userName = userNameBox.value;
    if (userName.length > 3) {
        return true;
    }
    else {
        return false;
    }
}

const checkEmail = () => {
    const email = emailBox.value;
    if(email.indexOf('@') >= 0) {
        return true;
    } else {
       return false;
    }
}

const checkPassword = () => {
    if(includeLetter() && passwordBox.value.length >= 8) {
        return true;
    } else {
        return false;
    }
}

const confirmPassword = () => {
    const confirmPassword = confirmPasswordBox.value;
    const password = passwordBox.value;
    if(confirmPassword === password && password.length) {
        return true;
    } else {
        return false;
    }
}

const allowRegister = (element, success) => {
    if(success) {
        element.classList.add("input_green");
        element.classList.remove("input_red");
    } else {
        element.classList.add("input_red");
        element.classList.remove("input_green");
    }
}


const submit = e => {
    e.preventDefault();
    allowRegister(userNameBox, checkUserName());
    allowRegister(emailBox, checkEmail());
    allowRegister(passwordBox, checkPassword());
    allowRegister(confirmPasswordBox, confirmPassword());
}

submitButton.addEventListener('click', submit);