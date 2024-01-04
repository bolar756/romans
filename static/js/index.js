scroller = document.querySelectorAll('.cont')

if (!window.matchMedia("(prefers-reduced-motion:reduce)").matches){
 addAnimation();
}
function addAnimation(){
  scroller.forEach((scroller) => {
    scroller.setAttribute('data-animated',true);

  const scrollerInner = document.querySelector('cont')
  const scrollercontent = Array.from(scrollerInner.children)

  scrollercontent.forEach((item) => {
    const duplicated = item.cloneNode(true);
    duplicated.setAttribute("aria-hidden=true");
   scrollerInner.appendChild(duplicated);
  });
});
}