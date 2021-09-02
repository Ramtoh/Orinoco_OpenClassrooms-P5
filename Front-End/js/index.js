fetch('https://p5octt.herokuapp.com/api/cameras')
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        // cameraZ1.textContent = data[0].lenses; // rappel : import le texte "lenses" dans la premiere camera 
    }); 

////////////////////////////////////////////////////////////////////////////////////////////////////
// MODAL CAMERA 

let modal = document.getElementById("myModal");

let cam = document.getElementById("myCam");

let span = document.getElementsByClassName("close")[0];

cam.onclick = function() {
  modal.style.display = "block";
}

// Lorsque l'utilisateur clique sur la croix : Ferme l'element 

span.onclick = function() {
  modal.style.display = "none";
}

// Lorsque l'utilisateur clique sur un element hors du cadre : Ferme l'element 
window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }

// FIN MODAL CAMERA 
////////////////////////////////////////////////////////////////////////////////////////////////////

//// ajouter au panier
let carts = document.querySelectorAll('.addToCart');


//// fin ajouter au panier