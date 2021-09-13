let cart = JSON.parse(localStorage.getItem("productsInCart"));
let cartContainer = document.querySelector(".cartContain");
let cartCost = localStorage.getItem("totalCost");

if( cart && cartContainer ) { 
    cartContainer.innerHTML = ' ';
    Object.values(cart).map(item => {
        cartContainer.innerHTML += `
            <div class="product">
                <div class="product-title">
                    <i class="fas fa-times"></i>
                    <img src=${item.imageUrl}>
                    <span>${item.name}</span>
                </div>
                <div class="price">${item.price/100}€</div>
                <div class="quantity">
                    <i class="fas fa-minus decrease"></i>
                    <span>${item.inCart}</span>
                    <i class="fas fa-plus increase"></i>
                </div>
                <div class="total">
                    ${item.inCart * item.price/100}€
                </div>
            </div>
        `;
    });

    cartContainer.innerHTML += `
        <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">Total du panier :</h4>
            <h4 class="basketTotal">${cartCost}€</h4>
        </div>
    `
}

