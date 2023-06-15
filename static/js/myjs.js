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
$(document).ready(function () {
        // Активація каруселі
        $('#service-carousel').carousel();

        // Зміна активного елемента каруселі кожні 4 секунди
        setInterval(function () {
            $('#service-carousel').carousel('next');
        }, 4000);
    });
// Выберите элемент с текстом
var element = document.querySelector('.fade-in');

// Функция для проверки, виден ли элемент на экране
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Функция, которая будет вызываться при прокрутке страницы
function checkFade() {
  if (isElementInViewport(element)) {
    element.classList.add('fade-in');
    window.removeEventListener('scroll', checkFade);
  }
}

// Запустите проверку при загрузке страницы и при прокрутке
window.addEventListener('load', checkFade);
window.addEventListener('scroll', checkFade);

