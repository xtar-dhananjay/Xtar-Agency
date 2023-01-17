let menuBtn = document.querySelector('header nav .menuBtn');
let menuBar = document.querySelector('header nav ul');

menuBtn.onclick = () => {
    menuBar.classList.toggle('Active');
    console.log('clicked now');
}

// This is for Text Effect
const homeSkill = document.querySelector('#homeSkill');

const TextLoad = () => {
    setTimeout(() => {
        homeSkill.textContent = "Web Developer";
    }, 0);
    setTimeout(() => {
        homeSkill.textContent = "Designer";
    }, 4000);
    setTimeout(() => {
        homeSkill.textContent = "Digital Marketer";
    }, 8000);
}

TextLoad();
setInterval(TextLoad, 12000);
console.log('asfdohasdf');

// Animate services slide
let serviceGraphic = document.getElementById('serviceGraphic');
let serviceWeb = document.getElementById('serviceWeb');
let serviceDigital = document.getElementById('serviceDigital');
let serviceSlide = document.querySelector('#serviceGraphic span');

serviceGraphic.onclick = () => {
    // serviceSlide.classList.remove('graphic web digital');
    if (serviceSlide.classList.contains('web')) {
        serviceSlide.classList.remove('web');
    }
    if (serviceSlide.classList.contains('digital')) {
        serviceSlide.classList.remove('digital');
    }
    serviceSlide.classList.add('graphic');
}
serviceWeb.onclick = () => {
    if (serviceSlide.classList.contains('graphic')) {
        serviceSlide.classList.remove('graphic');
    }
    if (serviceSlide.classList.contains('digital')) {
        serviceSlide.classList.remove('digital');
    }
    serviceSlide.classList.add('web');
}
serviceDigital.onclick = () => {
    if (serviceSlide.classList.contains('graphic')) {
        serviceSlide.classList.remove('graphic');
    }
    if (serviceSlide.classList.contains('web')) {
        serviceSlide.classList.remove('web');
    }
    serviceSlide.classList.add('digital');
    
}