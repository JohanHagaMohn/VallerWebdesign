window.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("#menu").firstElementChild;
    let visibility = false
    input.addEventListener("click", () => {
        document.querySelector("html").classList.toggle("hamburger");
        visibility = !visibility;
    })
    window.addEventListener("resize", function scrolling() {
        if (visibility && window.innerWidth > 640) {
            document.querySelector("html").classList.toggle("hamburger");
            input.checked = visibility = false;
        }
    });
})
