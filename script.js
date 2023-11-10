function menuShow() {
    let menuMobile = document.querySelector("header .mobile-menu");
    if (menuMobile.classList.contains("open")) {
        menuMobile.classList.remove("open");
        document.querySelector(".icon").src =
            "/images/mobile-icon-hamburguer.svg";
    } else {
        menuMobile.classList.add("open");
        document.querySelector(".icon").src = "/images/mobile-icon-close.svg";
    }
}

function closeMenu() {
    let menuMobile1 = document.querySelector("header .mobile-menu");
    menuMobile1.classList.remove("open");
    document.querySelector(".icon").src = "/images/mobile-icon-hamburguer.svg";
}
