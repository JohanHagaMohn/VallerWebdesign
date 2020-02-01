function hamburger() {
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
    document.querySelectorAll("li").forEach(e => {
        e.firstElementChild.addEventListener("click", () => {
            if (visibility) {
                document.querySelector("html").classList.toggle("hamburger");
                input.checked = visibility = false;
            }
        })
    })
}

function form() {
    const submit = document.querySelector("#send").firstElementChild;
    submit.addEventListener("click", e => {
        e.preventDefault();
        const message = document.querySelector("#melding").firstElementChild.value;
        const email = document.querySelector("#email").firstElementChild.value;
        window.open(`mailto:jmohn02@gmail.com?body=${message}&subject=${email}`, "_blank");
    })
}

window.addEventListener("DOMContentLoaded", () => {
    hamburger();
    form();
})
