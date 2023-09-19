const animatedText = document.querySelector(".animated-text");
const exploreButton = document.getElementById("exp-el");
const parallaxSection = document.querySelector(".parallax-gradient-section");
const conSection = document.querySelector(".foot");
const homeSec = document.querySelector("logo");
const homeButton = document.getElementById("home-el");
const conButton = document.getElementById("con-el");
window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const opacity = 1 - scrollPosition / 400; //  scroll threshold 

    animatedText.style.opacity = opacity;

 
    const translateX = scrollPosition;
    animatedText.style.transform = `translateX(${translateX}px)`;


    if (translateX >= window.innerWidth) {
        animatedText.style.opacity = 0;
    }
});

homeButton.addEventListener("click", () => {
    homeSec.scrollIntoView({ behavior: "smooth" })
});
exploreButton.addEventListener("click", () => {
    parallaxSection.scrollIntoView({ behavior: "smooth" });
});
    
conButton.addEventListener("click", () => {
    conSection.scrollIntoView({behavior : "smooth"});
});