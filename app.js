const express = require('express');
const voiture = require('./routes/voitures');

const app = express();
const port = 3000;


app.use('/voiture', voiture)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

