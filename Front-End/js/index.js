// let clickCamera = document.getElementsByClassName('camClick');

// for (var i = 0; i < clickCamera.length; i++) {
//     clickCamera[i].addEventListener('click', myFunction, false);
// }

// function myFunction (event) {
//     alert(this.id);
// }

// clickCamera.setAttribute("href", "./products.html?id=${item.id}");

function openTab(id) {
    const nextPageUrl = './products.html?id=${item.id}'
 const link = document.createElement('a');
 link.href = `${nextPageUrl }/${id}`;
 link.target = '_blank';
 document.body.appendChild(link);
 link.click();
 link.remove();
}


fetch('https://p5octt.herokuapp.com/api/cameras')
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
    }); 
    


////////////////////////////////////////////////////////////////////////////////////////////////////

