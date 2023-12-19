



let carousel = document.getElementById("carousel");

let slideDir = "../resources"
let slides = [
                `${slideDir}/slide-1.jpg`,
                `${slideDir}/slide-2.jpg`, 
                `${slideDir}/slide-3.jpg`, 
                `${slideDir}/slide-4.jpg`
            ];


let slideIndex = 0;

carousel.style.backgroundImage = `url(${slides[0]})`;


const intervalId = setInterval(
    () => {
        slideIndex++;
        if (slideIndex >= slides.length) slideIndex = 0;
        carousel.style.backgroundImage = `url(${slides[slideIndex]})`
    },
    5000
)



function fun() {
    const element = document.getElementById("availability");
    element.innerText = "Available Now";
}




