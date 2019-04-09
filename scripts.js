// const form = document.querySelector('form');
const sendButton = document.querySelector('form button');
const nameField = document.querySelector('input[name=name]');
const cpfField = document.querySelector('input[name=cpf]');
const emailField = document.querySelector('input[type=email]');
const passwordFields = document.querySelectorAll('input[type=password]');

const nameMask = function (e) {
    if ((e.keyCode >= 65 && e.keyCode <= 90) || e.keyCode === 32 || e.keyCode === 8) {
        return true;
    }
    else {
        return false;
    }
};

const cpfMask = function (e) {
    if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 8) {
        let length = cpfField.value.length;
        
        if (length === 3 || length === 7) {
            cpfField.value += '.';
        }
        else if (length === 11) {
            cpfField.value += '-';
        }

        return true;
    }
    else {
        return false;
    }
}

const emailValid = function () {
    const emailIndex = emailField.value.indexOf('@');
    const dotIndex = emailField.value.lastIndexOf('.');

    return emailIndex !== -1 && dotIndex !== -1 && emailIndex < dotIndex && dotIndex - emailIndex !== 1 && dotIndex !== emailField.value.length - 1;

    // return emailField.value.includes('@') && emailField.value.includes('.');
};

const passwordsMatch = function () {
    // if (passwordFields[0].value === passwordFields[1].value) {
    //     return true;
    // }
    // else {
    //     return false;
    // }

    return passwordFields[0].value === passwordFields[1].value;
};

const handleSubmit = function (e) {
    // e.preventDefault();

    if (!nameField  || !nameField.value) {
        alert('Verifique seu nome.');
    }
    else if (!emailValid()) {
        alert('Verifique seu email.');
    }
    else if (!passwordsMatch()) {
        alert('Verifique se suas senhas coincidem.');
    }
    else {
        alert('OK');
    }
};

// form.onsubmit = handleSubmit;
sendButton.onclick = handleSubmit;
nameField.onkeydown = nameMask;
cpfField.onkeydown = cpfMask;