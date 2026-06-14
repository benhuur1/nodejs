const response = await fetch('http://localhost:3000/produto?cor=azul', {
    method: 'POST',
});

const body = await response.text();
console.log(body)
