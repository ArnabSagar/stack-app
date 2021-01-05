const express = require('express');
const path = require('path')


const app = express();


app.get('/', (req, res) => {

    res.send('<h1>API is being set up</h1>');

});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server is running'));
