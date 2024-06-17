menu = document.querySelector('i#menu')
window.addEventListener('scroll', function(){
    if (window.scrollY > 0){
    document.querySelector('nav').classList.add('sticky')
    }
    else{
        document.querySelector('nav').classList.remove('sticky')
    }
})
function collapse(){
    creed= document.createElement('i');
creed.onclick=function remover(){
document.querySelector('body').classList.remove('scroll')
document.querySelector('.navbar').classList.add('prevent')
elementToRemove = document.querySelector('.bx-x')
const parentElement = elementToRemove.parentNode;
if (parentElement) {
  parentElement.removeChild(elementToRemove);
  document.querySelector('.wrapper').classList.remove('wrap')
}
}
    creed.classList.add('bx')
    creed.classList.add('bx-x')
    creed.style.color='red'
    creed.style.fontsize='32px'
    document.querySelector('.navbar').appendChild(creed)
}
function trent(){
   elementToRemove = document.querySelector('.bx-x')
const parentElement = elementToRemove.parentNode;

if (parentElement) {
  parentElement.removeChild(elementToRemove);
}
}
let currentDate = new Date();
let currentYear = currentDate. getFullYear(); 
console. log(currentYear);
document.querySelector('footer p').innerText=currentYear;
menu.addEventListener( 'onclick', function(){
    console.log('men')
    document.querySelector('.navbar').classList.remove('prevent')
    collapse()
})

function wrapElement(elementToWrap, wrapperElement) {
    // Check if elements exist
    if (!elementToWrap || !wrapperElement) {
      console.error("Error: Invalid elements provided");
      return;
    }
    const parentNode = elementToWrap.parentNode;
  
    if (!parentNode) {
      console.error("Error: elementToWrap has no parent node");
      return;
    }
    parentNode.insertBefore(wrapperElement, elementToWrap);
    wrapperElement.appendChild(elementToWrap);
  }
  
  const elementToWrap = document.querySelector(".navbar");
  const wrapperElement = document.createElement("div");
  wrapperElement.classList.add("wrapper"); 
  wrapElement(elementToWrap, wrapperElement);
  function navigator(){
    document.querySelector('body').classList.add('scroll')
    console.log('men')
    document.querySelector('.navbar').classList.remove('prevent')
    collapse()
    wrapperElement.classList.add("wrap"); 
}
const myDiv = document.querySelector("header");

// Set a timeout to hide the div after 5 seconds (5000 milliseconds)
setTimeout(function() {
  myDiv.style.display = "none";
}, 5000);
// Replace "YOUR_API_KEY" with your actual ExchangeRate-API key
const apiKey = "94d492e072dc3f666fb49aa4";

// Base currency (USD) and target currency (NGN)
const baseCurrency = "USD";
const targetCurrency = "NGN";

// Build the API endpoint URL with your key, base, and target currencies
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${baseCurrency}/${targetCurrency}`;


const carouselI= document.querySelectorAll('.rates .parents') 
const Carousel = document.querySelector('.divs')

function carousel(j,event){
  event.preventDefault()
  for (let i = 0; i < carouselI.length; i++) {
    const element = carouselI[i];
    element.classList.add('none')
    carouselI[j].classList.remove('none')
    console.log('mean')
  }
}