const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const burger = document.querySelector(".burger");
const slideMenus = document.querySelector(".slide-menus");
const goTop = document.querySelector(".go-top");

const renderMenus = () => {
    slideMenus.style.left = "0";
    line2.style.display = "none";
    line1.style.marginTop = "0.2rem";
    line3.style.marginBottom = "0.2rem";
    line1.style.transform = "rotate(45deg)";
    line3.style.transform = "rotate(-45deg)";
};

const unRenderMenus = () => {
    slideMenus.style.left = "-100%";
    line2.style.display = "block";
    line1.style.marginTop = "0";
    line3.style.marginBottom = "0";
    line1.style.transform = "rotate(0deg)";
    line3.style.transform = "rotate(0deg)";
};

burger.addEventListener("click", () => {
    if (line2.style.display === "block" || line2.style.display === "") {
        renderMenus();
    } else {
        unRenderMenus();
    }
});

goTop.addEventListener("click", () => {
    window.scrollTo(0,0);
});

window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goTop.style.display = "flex";
    } else {
        goTop.style.display = "none";
    }
};