function openTab(id) {
  const link = document.createElement('a');
  link.href = `./products.html?id=${id}`
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

