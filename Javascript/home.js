// let slideIndex = 1;

// function setslide(input, index) {
//     slideIndex = index;
//     let item = document.querySelector(`#${input}`);
//     let slides = [...document.querySelector('.slids').children];
//     slides.forEach((element) => {
//         element.classList.remove('active');

//     })
//     item.classList.add('active');
// }

// setInterval(() => {
//     slideIndex += 1;
//     if (slideIndex == 4) {
//         slideIndex = 1;
//     }
//     setslide(`slide${slideIndex}`, slideIndex)
// }, 2000);



let remainingTimer = 70000;

function setTime() {
    if (remainingTimer == 0) return;
    let h = Math.floor(remainingTimer / 3600);
    let m = Math.floor((remainingTimer % 3600) / 60);
    let s = (remainingTimer % 3600) % 60;

    document.querySelector("#hours").innerHTML = h
    document.querySelector("#minutes").innerHTML = m
    document.querySelector("#seconds").innerHTML = s

}

setInterval(() => {
    remainingTimer -= 1;
    setTime();

}, 1000);



let slideIndex = 1;
function setSlide(input, index) {
    slideIndex = index;
    let item = document.querySelector(`#${input}`)
    let slides = [...document.querySelector('.slides').children];
    slides.forEach((element) => {
        element.classList.remove('active');
    })
    item.classList.add('active');
}

setInterval(() => {
    slideIndex += 1;
    if (slideIndex == 4) {
        slideIndex = 1;
    }
    setSlide(`slide${slideIndex}`, slideIndex)
}, 4000)