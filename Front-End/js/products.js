const params = (new URL(document.location)).searchParams;

const cameraId = params.get("id");

fetch(`https://p5octt.herokuapp.com/api/cameras/${id}`)
    .then(res => res.json())
    .then(camera => {
        console.log("camera:", camera)
        const product = new Products(camera)
        console.log("product:", product)
        productsView(item);
    })
    .catch(err => {
        console.log("fetch Error:", err)
        alert("Aucun produit n'a été trouvé")
    });

// Pointe le container Products dans notre Products.html
let containerProducts = document.getElementById("containerProducts");

productsView = item => {
    containerProducts.innerHTML =
    `<div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src=${item.imageUrl} alt="..." /></div>
    <div class="col-md-6">
        <div class="small mb-1">Référence: ${item.id}</div>
        <h1 class="display-5 fw-bolder">${item.name}</h1>
        <div class="fs-5 mb-5">
            <span class="text-decoration-line-through">${item.price/100}€</span>
            <span>$40.00</span>
        </div>
        <p class="lead">${item.description}</p>
        <div class="d-flex">
            <input class="form-control text-center me-3" id="inputQuantity" type="num" value="1" style="max-width: 3rem" />
            <select id="options" class="me-3 dropdown">

            </select>
            <button class="btn btn-outline-dark flex-shrink-0" type="button">
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
};

