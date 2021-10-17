let cart = JSON.parse(localStorage.getItem("productsInCart"));
let cartContainer = document.querySelector(".cartContain");
let cartCost = localStorage.getItem("totalCost");

if( cart && cartContainer ) { 
    cartContainer.innerHTML = ' ';
    Object.values(cart).map(item => {
        cartContainer.innerHTML += `
            <div class="product">
                <div class="product-title">
                    <img src=${item.imageUrl}>
                    <span>${item.name}</span>
                </div>
                <div class="price">${item.price/100}€</div>
                <div class="quantity">
                    <span>${item.inCart}</span>
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
            <button class="btn-dark" id="confirmButton">Confirmer la commande</button>
        </div>
        <div id="delAllCart">
            <span id="delItem">Supprimer le panier</span>
        </div>
    `
};

// alerte l'utilisateur que son panier est vide et le redirige a la page d'accueil

if ( cart == null ) {
    alert('Votre panier est vide');
    window.location.href = 'index.html';
}


// supprime tout le panier 

delAllCart = () => {
    if ( cart == null ) {

    } else {
        localStorage.clear();
        window.location.reload();
    }   
};

delAllCartButton = document.getElementById('delAllCart');
delAllCartButton.addEventListener('click', delAllCart);

// FORMULAIRE DE COMMANDE

formOrder = document.getElementById("form_container");
formOrder.innerHTML += `
    <div id="error"></div>
    <form id="formRegister">
        <input type="text" required class="form-control" id="firstNameConfirmation" placeholder="Prénom">

        <input type="text" required class="form-control mt-2" id="lastNameConfirmation" placeholder="Nom">

        <input type="text" required class="form-control mt-2" id="addressConfirmation" placeholder="Adresse">

        <input type="text" required class="form-control mt-2" id="cityConfirmation" placeholder="Ville">

        <input type="email" required class="form-control mt-2" id="emailConfirmation" placeholder="Adresse mail"> 

        <input type="submit" value="Commander" class="btn mt-2 btn-dark form-control" id="orderConfirmation"> 
    </form>
`
 
function showForm() {
    let showForm = document.getElementById('form_container');
    showForm.style="display: block;";
    window.location.replace('#orderConfirmation') ;
}

let showFormButton = document.getElementById('confirmButton');
showFormButton.addEventListener('click', showForm);



confirmOrder = () => {

    if ((checkFirstName(document.querySelector("#firstNameConfirmation").value) == false) || (checkLastName(document.querySelector("#lastNameConfirmation").value) == false) || (checkAddress(document.querySelector("#addressConfirmation").value) == false) || (checkCity(document.querySelector("#cityConfirmation").value) == false) || (checkEmail(document.querySelector("#emailConfirmation").value) == false) ) {
        alert('Certains champs ne sont pas corrects !');
    } else {
        const contact = {
            "firstName": document.querySelector("#firstNameConfirmation").value,
            "lastName": document.querySelector("#lastNameConfirmation").value,
            "address": document.querySelector("#addressConfirmation").value,
            "city": document.querySelector("#cityConfirmation").value,
            "email": document.querySelector('#emailConfirmation').value
        };

        let products = [];

        for (const [key, value] of Object.entries(JSON.parse(localStorage.getItem('productsInCart')))) {
            products.push(value._id);
        }

        const userOrder = {
            contact,
            products,
        };

        fetch("https://p5octt.herokuapp.com/api/cameras/order", {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            mode:"cors",
            body: JSON.stringify(userOrder),
            })
        .then(function(response){
            return response.json()
        })
        .then(function (r){
            localStorage.setItem("contact", JSON.stringify(r.contact));
            window.location.assign("confirmation.html?orderId=" + r.orderId);
            console.log(r);
        })
        .catch(function (err){
            console.log("fetch Error");
        });
    };
}; 

let orderConfirmation = document.getElementById('formRegister');
orderConfirmation.addEventListener('submit', function(e) {e.preventDefault(); confirmOrder()});

// Expressions regulieres pour le formulaire 

function checkFirstName(firstName) {
    let re= /^[a-zA-Z]+$/;
    return re.test(firstName) 
}

function checkLastName(lastName) {
    let re= /^[a-zA-Z]+$/;
    return re.test(lastName)
}

function checkAddress(address) {
    let re= /^[a-zA-Z0-9\s,'-]*$/;
    return re.test(address)
}

function checkCity(city) {
    let re = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
    return re.test(city)
};

function checkEmail(email) {
    let re= /\S+@\S+\.\S+/;
    return re.test(email)
} 

///////// 

