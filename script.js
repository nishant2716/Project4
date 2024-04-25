var scrollContainer= document.querySelector(".section-4")
var leftbtn = document.getElementById("left"); 
var rightbtn = document.getElementById("right");

rightbtn.addEventListener("click", () => {
    scrollContainer.style.transform = translateX(20%);
    scrollContainer.style.scrollBehavior = "smooth";
});

leftbtn.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 900;
    scrollContainer.style.scrollBehavior = "smooth";
});

