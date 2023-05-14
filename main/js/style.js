//creating a variable to maintain proper vh on mobile browsers
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);