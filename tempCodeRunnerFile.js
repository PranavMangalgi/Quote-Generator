fetch('https://zenquotes.io/api/quotes').then(response=>response.json()).then(result=>console.log(result)).catch(err=>console.log(err));