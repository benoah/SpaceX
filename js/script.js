const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
    this.classList.toggle("open");
    menu.classList.toggle("dropdown");
}

/*Accordion*/
const accordionBtn = document.querySelectorAll(".accordion_btn");
accordionBtn.forEach((button) => {
    button.addEventListener("click", openTab)
});

function openTab(event) {
    this.classList.toggle("active");
}


var currentSlide = 1;
function showSlide(slideIndex) {
    const slides = document.getElementsByClassName('carouselImgs');
    if (slideIndex > slides.length) { currentSlide = 1 }
    if (slideIndex < 1) { currentSlide = slides.length }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }
    slides[currentSlide - 1].style.display = 'flex'
}
function previousSlide() {
    showSlide(currentSlide -= 1);
}


function nextSlide() {
    showSlide(currentSlide += 1);
}
const baseUrl = "https://api.spacexdata.com/v3/";
const rocketsUrl = `${baseUrl}rockets/`;


// the function must be marked as async
async function fetchRockets() {
    try {
        // use await when calling fetch
        const response = await fetch(rocketsUrl);
        // use await when resolving the returned value, which is a promise
        const rocket = await response.json();
        // pass the array of elephants to the displayElephants function
        displayRockets(rocket);
        createDetails(rocket);
    } catch (error) {
        console.log(error);
    }
}
fetchRockets();


function displayRockets(rocket) {
    const rocketContainer = document.querySelector(".home");
    // declare a vairable to hold the HTML we will create
    let html = "";
    // loop through each using a for loop
    for (let i = 0; i < rocket.length; i++) {
        // console.log(rocket[i].rocket_name);

        if (!rocket[i].rocket_name) {
            // continue will skip the remaining code and return to the top of the loop
            continue;
        }
        // add the new HTML string to the existing HTML string
        html += `  
        

      
        
        
        `;
    }
    // assign the new HTML string to the innerHTML property of Container
    rocketContainer.innerHTML = html;
}
