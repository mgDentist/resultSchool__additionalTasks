const userName = prompt('Введите имя пользователя');
const userPassword = prompt('Введите пароль');

if (userPassword.length >= 3 && userPassword.length <= 30) {
    let hasUpperCase = false;
    let hasNumber = false;

    for (let i = 0; i < userPassword.length; i++) {

        if (userPassword[i] >= 'A' && userPassword[i] <= 'Z') {
            hasUpperCase = true;
        }

        if (!isNaN(userPassword[i])) {
            hasNumber = true;
        }

        if (hasUpperCase && hasNumber) {
            break;
        }
    }

    if (hasUpperCase && hasNumber) {
        alert(`Пароль валидный. Добро пожаловать в аккаунт, ${userName}!`);
    } else {
        alert(`${userName}, пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.`);
    }
} else {
    alert(`${userName}, пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.`);
}
