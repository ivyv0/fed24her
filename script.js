const menuButton = document.querySelector ("nav button");
const deNav = document.querySelector ("nav");
menuButton.onclick = toggleMenu; 

function toggleMenu () {
  deNav.classList.toggle("toonMenu");
  
}


let currentSlide = 0;

function goToSlide(index) {
    currentSlide = (index + slides.children.length) % slides.children.length;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

prev.onclick = () => goToSlide(currentSlide - 1);
next.onclick = () => goToSlide(currentSlide + 1);


