const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(faqItem => {
  faqItem.addEventListener('click', () => {
    faqItem.classList.toggle('active');
  });
});
