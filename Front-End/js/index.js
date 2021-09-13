function openTab(id) {
  const link = document.createElement('a');
  link.href = `./products.html?id=${id}`
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');

  if(productNumbers) {
      document.querySelector('.cart span').textContent = productNumbers;
  }
}
onLoadCartNumbers();

fetch('https://p5octt.herokuapp.com/api/cameras')
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
    }); 

