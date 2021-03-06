const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000; 
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.sendFile(path.resolve('./views/home.html'));
});



app.listen(PORT, () => console.log ('Servidor en puerto 3000'));

app.get('/register.html', (req,res) => {
    res.sendFile(path.resolve('./views/register.html')); });

app.get('/login.html', (req,res) => {
    res.sendFile(path.resolve('./views/login.html')) }); 