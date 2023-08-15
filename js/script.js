document.getElementById('input-button').addEventListener('click',function(){
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const emailValue = email.value;
    const passwordValue = password.value;
    if (emailValue === 'asibhasanriyad@gmail.com' && passwordValue ==='006007ok') {
        window.location.href = 'bank.html'
    }
    else{
        alert ('Invalid User')
    }
})