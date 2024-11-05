const carousel = document.querySelector(".carousel");
const imgs = [
    "../images/bruce-mars-HHXdPG_eTIQ-unsplash.jpg",
    "../images/pexels-leon-ardho-1552242 (1).jpg",
    "../images/dylan-gillis-YJdCZba0TYE-unsplash.jpg"
];
let count = 0;
const right = document.querySelector(".right");
const left = document.querySelector(".left");

right.addEventListener("click", () => {
    if(count >= 2) {
        count = 0;
        carousel.setAttribute("src",imgs[count]);
    } else {
        count++;
        carousel.setAttribute("src",imgs[count]);
    }
});

left.addEventListener("click", () => {
    if(count <= 0) {
        count = 2;
        carousel.setAttribute("src",imgs[count]);
    } else {
        count--;
        carousel.setAttribute("src",imgs[count]);
    }
})