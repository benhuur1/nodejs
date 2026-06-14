const response = await fetch('http://localhost:3000/sobre', {
    method: 'GET',
});

const body = await response.text();
console.log(body)
