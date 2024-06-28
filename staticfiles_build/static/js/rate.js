const form = document.querySelector('form')
form.addEventListener('submit',function(event){
    event.preventDefault()
    console.log('mean')
    window.open('/' , as='_self')
})