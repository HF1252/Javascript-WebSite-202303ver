const username = document.getElementById('username');
const userId = document.getElementById('userId');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (event) => {
    //ユーザー名
    let message = [];
    if (username.value === '' || username.value == null) {
        message.push('Name is required');
    }

    //パスワード
    if (password.value.length <= 3) {
        message.push('Password must be longer than 3 characters');
    }

    if (password.value.length >= 20) {
        message.push('Password must be less than 20 characters');
    }

    if (password.value === 'password') {
        message.push('Password cannot be password');
    }

    //ユーザーID
    if (userId.value.length <= 6) {
        message.push('UserId must be longer than 6 characters');
    }

    if (userId.value === 'userId') {
        message.push('UserID cannot be password');
    }

    //デフォルト0の場合
    if (message.length > 0) {
        event.preventDefault();
        errorElement.innerText = message.join(', ');
    }
});
