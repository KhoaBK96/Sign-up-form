const button = document.querySelector('.button')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm_password')


button.addEventListener('click', e => {
    if(password.value != confirmPassword.value);
    return alert('confirm password must the same as password')
})

