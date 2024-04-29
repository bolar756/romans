const login = document.querySelector('.login')
const signup = document.querySelector('.signup')
const register = document.querySelector('#register') 
const loginForm = document.querySelector('form')
const signin = document.querySelector('.step2')
const signi = document.querySelector('.step1')
login.addEventListener('mouseenter' ,function(){
    signup.classList.remove('act')
})
login.addEventListener('mouseout' , function(){
    signup.classList.add('act')
})
function Signup(event){
    event.preventDefault()
    signin.classList.remove('none')
    signi.classList.add('none')
    document.querySelector('.spin').classList.toggle('none')
}
function back(){
    signin.classList.add('none')
    signi.classList.remove('none')
    document.querySelector('.spin').classList.toggle('none')
}