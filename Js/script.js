let menuBtn = document.querySelector('header nav .menuBtn');
let menuBar = document.querySelector('header nav ul');

menuBtn.onclick = () => {
    menuBar.classList.toggle('Active');
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

// Animate services slide
let serviceGraphic = document.getElementById('serviceGraphic');
let serviceWeb = document.getElementById('serviceWeb');
let serviceDigital = document.getElementById('serviceDigital');
let serviceSlide = document.querySelector('#serviceGraphic span');
let servicesPack = document.getElementById('servicesPack');

serviceGraphic.onclick = () => {
    // serviceSlide.classList.remove('graphic web digital');
    if (serviceSlide.classList.contains('web')) {
        serviceSlide.classList.remove('web');
    }
    if (serviceSlide.classList.contains('digital')) {
        serviceSlide.classList.remove('digital');
    }
    serviceSlide.classList.add('graphic');
    servicesPack.style.left = '0';
}
serviceWeb.onclick = () => {
    if (serviceSlide.classList.contains('graphic')) {
        serviceSlide.classList.remove('graphic');
    }
    if (serviceSlide.classList.contains('digital')) {
        serviceSlide.classList.remove('digital');
    }
    serviceSlide.classList.add('web');
    servicesPack.style.left = '-100%';
}
serviceDigital.onclick = () => {
    if (serviceSlide.classList.contains('graphic')) {
        serviceSlide.classList.remove('graphic');
    }
    if (serviceSlide.classList.contains('web')) {
        serviceSlide.classList.remove('web');
    }
    serviceSlide.classList.add('digital');
    
    servicesPack.style.left = '-200%';
};

// Add counting effect in customer satisfaction
function startCounter(){
    let countTime = 1000;
    let Numberchar = document.querySelectorAll("#satRecord h2");
    Numberchar.forEach( e => {
        let startValue = 0;
        let endValue = parseInt(e.getAttribute('totalnum'));
        let duration = Math.floor(countTime / endValue);
    
        let counter = setInterval(function(){
            startValue += 1;
            e.textContent = startValue;
            if (startValue == endValue) {
                clearInterval(counter);
                e.textContent += '+';
            }
        }, duration)
    })
}

let countStatus = true;

window.onscroll = (e) => {
    if ((window.scrollY > 2000) && (countStatus == true)) {
        startCounter();
        countStatus = false;
    }
}

// Lat's make Smooth scroling functionality
let homeBtn = document.getElementById('homeBtn');
let aboutBtn = document.getElementById('aboutBtn');
let servicesBtn = document.getElementById('servicesBtn');
let contactBtn = document.getElementById('contactBtn');

// Footer pages
let fHome = document.getElementById('fHome');
let fService = document.getElementById('fService');
let fAbout = document.getElementById('fAbout');
let fContact = document.getElementById('fContact');

let home = document.getElementById('main');
let about = document.getElementById('teamSection');
let services = document.getElementById('xtarServices');
let contact = document.getElementById('contactForm');

// servicesBtn.onclick = () => {
//     services.scrollIntoView({behavior: "smooth"});
// }


scrollPage(fHome, home, "start");
scrollPage(fAbout, about, "center");
scrollPage(fService, services, "start");
scrollPage(fContact, contact, "center");

scrollPage(homeBtn, home, "start");
scrollPage(aboutBtn, about, "center");
scrollPage(servicesBtn, services, "start");
scrollPage(contactBtn, contact, "center");
function scrollPage(btn, section, alignMent){
    btn.onclick = () => {
        section.scrollIntoView({behavior: "smooth", block: alignMent});
    }
}


// Form Validation
let fullName = document.getElementById('fullName');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let companyName = document.getElementById('companyName');
let message = document.getElementById('phone');
let submitBtn = document.getElementById('submitBtn');

submitBtn.onclick = (e) => {
    e.preventDefault();
    formValidation(fullName);
    formValidation(email);
    formValidation(phone);
    
    typeInput(fullName);
    typeInput(email);
    typeInput(phone);

    if ((fullName.value == "") || (email.value == "") || (phone.value == "")) {
        console.log("no ready");
    }else{
        submitBtn.innerText = "Sending...";
        submitBtn.disabled = true;
        submitBtn.style.background = "#8348ffdb";
        // Send message on mail
        let Form = document.getElementById('Form');
        let FData = new FormData(Form);
        fetch("PHP/sendMail.php",{
            method: "POST",
            body: FData
        })
        .then((Response) => Response.json())
        .then((Data) => {
            console.log(Data)
            submitBtn.innerText = "Sand Enquiry";
            submitBtn.style.background = "#8348FF";
            submitBtn.disabled = false;
        })
    }

}

function typeInput(input){
    input.onkeyup = () => {
        if (input.value == "") {
            input.style.border = "1px solid red";
        }else{
            input.style.border = "none";
        }
    }
}

function formValidation(input){
    if (input.value == "") {
        input.style.border = "1px solid red";
    }else{
        input.style.border = "none";
    }
}