window.addEventListener("DOMContentLoaded", () => {
    const html = document.querySelector("html");
    const nav = document.querySelector("nav");
    const header = document.querySelector("header");
    const logo = document.querySelector("#logo");
    const li = document.querySelectorAll("li")
    let menu = false;

    function show() {
        menu = true;
        header.style.height = "100vh";
        html.style.overflowY = "hidden";
        logo.style.visibility = "hidden";
    }
    function hide() {
        menu = false
        header.style.height = "";
        html.style.overflowY = "";
        logo.style.visibility = "";
    }

    window.addEventListener("resize", function scrolling() {
        if (menu && window.innerWidth > 640) {
            hide()
        }
    });
    header.addEventListener("click", () => {
        if (window.innerWidth < 640) {
            if (!menu) {
                show()
            } else {
                hide();
            }
        }
    })
})