const form = document.querySelector('form');
const emailField = document.querySelector('input[type=email]');
const passwordFields = document.querySelectorAll('input[type=password]');

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
    e.preventDefault();

    if (!emailValid()) {
        alert('Verifique seu email.');
    }
    else if (!passwordsMatch()) {
        alert('Verifique se suas senhas coincidem.');
    }
    else {
        alert('OK');
    }
};

form.onsubmit = handleSubmit;
emailField.oninput = function (e) {
    console.log (e);
}