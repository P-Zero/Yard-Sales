const mobileMenuIcon = document.querySelector(".mobile_menu_icon")
const mobileMenu = document.querySelector(".mobile-menu")
const cartAside = document.querySelector(".cart")
const cartIcon = document.querySelector(".cart_icon")
const mainSection = document.querySelector("#main")
const productList = [];

mobileMenuIcon.addEventListener("click", toggleMobileMenu)
cartIcon.addEventListener("click", toggleCartAside)

function toggleMobileMenu() {
    cartAside.classList.add("inactive")
    mobileMenu.classList.toggle("inactive")
}
function toggleCartAside() {
    mobileMenu.classList.add("inactive")
    cartAside.classList.toggle("inactive")
}

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/819805/pexels-photo-819805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Monitor',
    price: 240,
    image: 'https://9to5google.com/wp-content/uploads/sites/4/2022/08/samsung-odyssey-1.jpg?quality=82&strip=all&w=1067',
});
productList.push({ 
    name: 'Pc',
    price: 840,
    image: 'https://cdn.shopify.com/s/files/1/0061/7594/8882/products/SY-PCBuild-Frost_grande.png?v=1658745338',
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div')
        const productImg = document.createElement('img')
        const productInfoDiv = document.createElement('div')
        const productPrice = document.createElement('p')
        const productName = document.createElement('p')
        const productInfoFigure = document.createElement('figure')
        const productImgCart = document.createElement('img')

        productCard.classList.add('product-container')
        productImg.setAttribute('src', product.image)
        productImg.classList.add('product')
        productInfoDiv.classList.add('description')
        productPrice.innerText = '$' + product.price
        productPrice.classList.add('price')
        productName.innerText = product.name
        productName.classList.add('p_name')
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')

        productInfoDiv.append(productPrice, productName)
        productInfoFigure.appendChild(productImgCart)
        productCard.append(productImg, productInfoDiv, productInfoFigure)
        mainSection.appendChild(productCard)
    }
}
renderProducts(productList);