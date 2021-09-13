const params = (new URL(document.location)).searchParams;

const cameraId = params.get("id");

// Pointe le container Products dans notre Products.html
let containerProducts = document.getElementById("containerProducts");


// Injecte du HTML sur notre page products.html en fonction de la camera choisie = ( Fiche produit )

const productsView = item => {
    containerProducts.innerHTML =
    `<div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src=${item.imageUrl} alt="..." /></div>
    <div class="col-md-6">
        <div class="small mb-1">Référence: ${item._id}</div>
        <h1 class="display-5 fw-bolder">${item.name}</h1>
        <div class="fs-5 mb-5">
            <span>${item.price/100}€</span>
        </div>
        <p class="lead">${item.description}</p>
        <div class="d-flex">
            <select id="options" class="me-3 dropdown">
            </select>  
            <button class="btn btn-outline-dark flex-shrink-0 add-to-cart" type="button">
                <i class="bi-cart-fill me-1"></i>
                Ajouter au panier 
            </button>
        </div>
    </div>`;

    // selection des objectifs 
    for (lenses of item.lenses)  {
        options = document.getElementById('options');
        options.innerHTML += `<option value="${lenses}">${lenses}</option>`
    };
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ajout au panier 
    let carts = document.querySelectorAll('.add-to-cart');

    for (let i=0; i < carts.length; i++) {
        carts[i].addEventListener('click', () => {
            cartNumbers(item);
            totalCost(item);
        })
    }
    
    function onLoadCartNumbers() {
        let productNumbers = localStorage.getItem('cartNumbers');

        if(productNumbers) {
            document.querySelector('.cart span').textContent = productNumbers;
        }
    }
    
    function cartNumbers(products) {
        
        let productNumbers = localStorage.getItem('cartNumbers');

        productNumbers = parseInt(productNumbers); // converti le cart numbers "string" en nombre 

        if( productNumbers ) {
            localStorage.setItem('cartNumbers', productNumbers + 1);
            document.querySelector('.cart span').textContent = productNumbers + 1;
        } else {
            localStorage.setItem('cartNumbers', 1);
            document.querySelector('.cart span').textContent = 1;
        }

        setItems(products);
    }

    function setItems(products) {
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);

        if(cartItems != null) {

            if(cartItems[products.name] == undefined) {
                cartItems = {
                    ...cartItems,
                    [products.name]: item
                }
            }
            cartItems[products.name].inCart += 1;
        } else {
            products.inCart = 1;
            cartItems = {
                [products.name]: item
            }
        }

        localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    }

    function totalCost(product) {
        let cartCost = localStorage.getItem("totalCost");

        if(cartCost != null) {
            cartCost = parseInt(cartCost);
            localStorage.setItem("totalCost", cartCost + product.price/100);
        } else {
            localStorage.setItem("totalCost", product.price/100);
        }
    }

    onLoadCartNumbers();
};

fetch(`https://p5octt.herokuapp.com/api/cameras/${cameraId}`)
    .then(res => res.json())
    .then(camera => {
        console.log("camera:", camera)
        const product = new Products(camera)
        console.log("product:", product)
        productsView(camera);
    })
    .catch(err => {
        console.error("fetch Error:", err)
        alert("Aucun produit n'a été trouvé")
    });

