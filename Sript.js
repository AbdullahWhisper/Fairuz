// function toggleNav() {
//     var nav = document.getElementById("menu-toggle");
//     if (nav.style.display === "flex") {
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});


let mybutton = document.getElementById("ppp");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ( document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function scrolltop() {
  document.documentElement.scrollTop = 0;
}