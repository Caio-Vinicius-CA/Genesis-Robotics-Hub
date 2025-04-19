document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("bars");
    const sideMenu = document.getElementById("side-menu");
    const closeMenu = document.getElementById("close-menu");

    // Abrir menu lateral
    menuIcon.addEventListener("click", function () {
        sideMenu.style.right = "0"; // Exibir menu lateral
    });

    // Fechar menu lateral
    closeMenu.addEventListener("click", function () {
        sideMenu.style.right = "-250px"; // Ocultar menu lateral
    });

    // Fechar ao clicar fora do menu
    document.addEventListener("click", function (event) {
        if (!sideMenu.contains(event.target) && event.target !== menuIcon) {
            sideMenu.style.right = "-250px";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var MainImg = document.getElementById("main-img");
    var smallimg = document.getElementsByClassName("small-img");

    if (MainImg && smallimg.length > 0) {
        for (let i = 0; i < smallimg.length; i++) {
            smallimg[i].onclick = function () {
                MainImg.src = this.src;
            };
        }
    } else {
        console.error("Elementos não encontrados ou sem imagens suficientes.");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const addCartButtons = document.querySelectorAll(".add-to-cart");
    addCartButtons.forEach(button => {
        button.addEventListener("click", event => {
            const productBox = event.target.closest(".productBox");
            addToCart(productBox)
        });

    });

    const addToCart = productBox => {
        const productImgSrc = productBox.querySelector("#main-img");
        const productTitle = productBox.querySelector("#main-img");
        const productPrice = productBox.querySelector("#main-img");
    };
});