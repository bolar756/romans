const login = document.querySelector('.login')
const signup = document.querySelector('#signup')
const register = document.querySelector('#register') 
const loginForm = document.querySelectorAll('form')


function rems(){
   console.log('stupid')
}
login.addEventListener('mouseenter' ,function(){
    signup.classList.remove('act')
})
login.addEventListener('mouseout' , function(){
    signup.classList.add('act')
})
for (let i = 0; i < loginForm.length; i++) {
    const element = loginForm[i];
    forms = element[1]
    forms.classList.add('none')
    document.querySelector('.sign').classList.remove('none')
}