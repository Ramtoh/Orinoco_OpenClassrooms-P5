function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let cartContainer = document.querySelector('.cartContain')
    if( cartItems && cartContainer ) {
        cartContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            cartContainer.innerHTML += `
            <div class="product">
                <i class="fas fa-times-circle"></i>
                <img src=${item.imageUrl}>
                <span>${item.name}</span>
            </div>
            `
        });
    }
}


fetch('https://p5octt.herokuapp.com/api/cameras')
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
    }); 