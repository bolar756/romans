const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(faqItem => {
  faqItem.addEventListener('click', () => {
    faqItem.classList.toggle('active');
  });
});
function myFunction() {
    document.querySelector('.parents1').toggle('none')
    document.querySelector('.parents2').toggle('none')
}
myFunction()
setInterval(myFunction, 3000);