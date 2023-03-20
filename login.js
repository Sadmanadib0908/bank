const loginBtn = document.getElementById('login-btn');
const email = document.getElementById('input-email');
const password = document.getElementById('input-password');
loginBtn.addEventListener('click', function () {
    const attemptLeft = document.getElementById('attempt');
    const tryLeft = parseInt(attemptLeft.innerText);
    if (email.value === 'testUser@gmail.com' && password.value === 'valid' && attemptLeft.innerText > 0) {
        window.location.href = 'bank.html'
    }
    else if (attemptLeft.innerText > 0 && email.value !== 'testUser@gmail.com' && password.value !== 'valid') {
        alert('Email or Password not found!!!')
        attemptLeft.innerText = tryLeft - 1;

    }
    else {
        document.getElementById('login-btn').disabled = true;
        loginBtn.classList.remove('hover:bg-blue-300');
        loginBtn.classList.remove('bg-blue-600');
        loginBtn.classList.add('bg-blue-100')
        loginBtn.classList.add('border-2,border-blue-100')
    }

})
