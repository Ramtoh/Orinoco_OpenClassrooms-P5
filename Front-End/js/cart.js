let cart = JSON.parse(localStorage.getItem("productsInCart"));
let cartContainer = document.querySelector(".cartContain");
let cartCost = localStorage.getItem("totalCost");

if( cart && cartContainer ) { 
    cartContainer.innerHTML = ' ';
    Object.values(cart).map(item => {
        cartContainer.innerHTML += `
            <div class="product">
                <div class="product-title">
                    <a class="delItem">
                        <i class="fas fa-times"></i>
                    </a>
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
        <div class="confirmOrder">
            <button>Confirmer la commande</button>
        </div>
        <div id="delAllCart">
            <span id="delItem">Supprimer le panier</span>
        </div>
    `
};

delAllCart = () => {
    if ( cart == null ) {

    } else {
        localStorage.clear();
        window.location.reload();
    } 
};

delAllCart = document.getElementById('delAllCart');
delAllCart.addEventListener('click', delAllCart);


// FORMULAIRE DE COMMANDE
// formOrder = document.getElementById("form_container");
// formOrder.innerHTML = `

// `

// const contact = {
//     firstName: document.querySelector("#inputfirstName").value,
//     lastName: document.querySelector("#inputLastName").value,
//     email: document.querySelector("#inputEmail").value,
//     address: document.querySelector("#inputAddress").value,
//     city: document.querySelector("#inputCity").value,
// };

// JSON.stringify(contact);

// const userOrder = {
//     products,
//     contact,
// };

// console.log(userOrder);

// fetch("https://p5octt.herokuapp.com/api/cameras/order", {
//     method: 'POST',
//     headers: {
//         'content-type': "application/json"
//     },
//     mode:"cors",
//     body: JSON.stringify(userOrder),
// })

// FIN FORMULAIRE DE COMMANDE
