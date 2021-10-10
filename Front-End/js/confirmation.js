let paramsUrl = new URL(window.location).searchParams;

let order = paramsUrl.get("orderId");

let cart = JSON.parse(localStorage.getItem("productsInCart"));
// recupere les donnees du contact (qui a rempli le formulaire)
let contact = JSON.parse(localStorage.getItem("contact"));

// cout total
let totalPrice = JSON.parse(localStorage.getItem("totalCost"));

let jsConfirmation = document.getElementById("jsConfirmation");

showContainer = () => { 
    jsConfirmation.innerHTML += `
        <div class="text-center mt-2 mb-2">
            <p class="">Merci ${contact.firstName} ${contact.lastName} d'avoir choisi Orinoco!</p>
            <p>Votre commande est enregistrée au numéro : ${order}</p>
            <p>Montant : ${totalPrice}€</p>
            <p>Vous serez informés de l'avancement de votre commande à l'adresse : ${contact.email}</p>      
        </div>
        <div class="text-center mt-2 mb-2">
            <a id="mainPage" class="btn mt-2 btn-dark" href="./index.html">
                <i class="fas fa-home"></i> Accueil
            </a>
        </div>
    `;
};

showContainer();

backMainPage = () => {
    localStorage.clear();
    window.location.reload();
}

let backPage = document.getElementById("mainPage");
backPage.addEventListener('click', backMainPage);



