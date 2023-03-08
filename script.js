const mobileMenuIcon = document.querySelector(".mobile_menu_icon")
const mobileMenu = document.querySelector(".mobile-menu")
const cartAside = document.querySelector(".cart")
const cartIcon = document.querySelector(".cart_icon")

mobileMenuIcon.addEventListener("click", toggleMobileMenu)
cartIcon.addEventListener("click", toggleCartAside)

function toggleMobileMenu() {
    cartAside.classList.add("inactive");
    mobileMenu.classList.toggle("inactive");
}
function toggleCartAside() {
    mobileMenu.classList.add("inactive");
    cartAside.classList.toggle("inactive");
}