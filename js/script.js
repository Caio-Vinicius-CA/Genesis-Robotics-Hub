document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("scrollToTop").addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
    document.getElementById("acronym-cagr").addEventListener("mouseenter", function (){
        message.style.display = 'block';
    })
});