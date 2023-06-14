function submitForm() {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var phoneInput = document.getElementById('phone');
    var messageInput = document.getElementById('message');

    var name = nameInput.value;
    var email = emailInput.value;
    var phone = phoneInput.value;
    var message = messageInput.value;

    // Проверка заполненности обязательных полей
    var isValid = true;
    if (name.trim() === '') {
        nameInput.style.borderColor = 'red';
        nameInput.setAttribute('placeholder', 'Поле обязательно для ввода');
        isValid = false;
    } else {
        nameInput.style.borderColor = '';
        nameInput.removeAttribute('placeholder');
    }

    if (email.trim() === '') {
        emailInput.style.borderColor = 'red';
        emailInput.setAttribute('placeholder', 'Поле обязательно для ввода');
        isValid = false;
    } else {
        emailInput.style.borderColor = '';
        emailInput.removeAttribute('placeholder');
    }

    if (phone.trim() === '') {
        phoneInput.style.borderColor = 'red';
        phoneInput.setAttribute('placeholder', 'Поле обязательно для ввода');
        isValid = false;
    } else {
        phoneInput.style.borderColor = '';
        phoneInput.removeAttribute('placeholder');
    }

    if (message.trim() === '') {
        messageInput.style.borderColor = 'red';
        messageInput.setAttribute('placeholder', 'Поле обязательно для ввода');
        isValid = false;
    } else {
        messageInput.style.borderColor = '';
        messageInput.removeAttribute('placeholder');
    }

    // Проверка заполненности всех полей
    if (!isValid) {
        alert('Пожалуйста, заполните все обязательные поля.');
        return;
    }

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/contact', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('name=' + encodeURIComponent(name) + '&email=' + encodeURIComponent(email) + '&phone=' + encodeURIComponent(phone) + '&message=' + encodeURIComponent(message));

    // Сброс только обязательных полей
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    messageInput.value = '';

    alert('Сообщение отправлено!');
}
