const menuBtn = document.getElementById("menu-btn");
const navlinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navlinks.classList.toggle("open");

    const isopen = navlinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isopen ?"ri-close-line" : "ri-menu-line")
});

navlinks.addEventListener("click", (e) =>{
    navlinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const ScrollRevealOption = {
    distance: "50px",
    origin:"bottom",
    duration: 1000,
};

ScrollReveal().reveal(".about_container .section_header", {
    ...ScrollRevealOption,
});
ScrollReveal().reveal(".about_container .section_description", {
    ...ScrollRevealOption,
    delay: 500,
    interval: 500,
});
ScrollReveal().reveal(".about_container img", {
    ...ScrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(".service_container .section_header", {
    ...ScrollRevealOption,
});
ScrollReveal().reveal(".service_container .section_description", {
    ...ScrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".service_card", {
    duration: 1000,
    delay: 1000,
    interval: 500,
});

const swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
});

ScrollReveal().reveal(".blog_content .section_header", {
    ...ScrollRevealOption,
});
ScrollReveal().reveal(".blog_content h4", {
    ...ScrollRevealOption,
    delay: 500,
});ScrollReveal().reveal(".blog_content p", {
    ...ScrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".blog_content .blog_btn", {
    ...ScrollRevealOption,
    delay: 1500,
});

const instagram = document.querySelector(".instagram_flex");
Array.from(instagram.children).forEach((item) => {
         const duplicateNode = item.cloneNode(true);
         duplicateNode.setAttribute("aria-hidden", true);
         instagram.appendChild(duplicateNode);
});