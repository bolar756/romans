function InputChange(){
   inpu = document.querySelector('#form input')
   if (inpu.value > 5000){
    document.querySelector('#label1').innerText='value should not be more than $5000'
    document.querySelector('#form button').setAttribute('disabled',true)
    span = document.querySelector('.span')
    span.innerText=inpu.value
    console.log('red')
   }
   else{
    document.querySelector('#label1').innerText='price'
    console.log('value is correct ')
    document.querySelector('#form button').removeAttribute('disabled',true)
    document.querySelector('.price2').value=inpu.value
    span = document.querySelector('span')
    span.innerText=inpu.value
   }
}
function Submitter(event){
    event.preventDefault()
    console.log('clicked'); 
}
function current(){
    slect2= document.querySelector('.select')
    document.querySelector('.price').value=slect2.value
}
function stars(){
    slect2= document.querySelector('.select1')
    document.querySelector('.price1').value=slect2.value
}