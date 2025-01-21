const menuButton = document.querySelector (".menu-toggle");
const deNav = document.querySelector ("nav");
menuButton.onclick = toggleMenu; 

function toggleMenu () {
  deNav.classList.toggle("toonMenu");
}



