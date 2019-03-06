const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send('Surfs up, dude')
});








const PORT = process.env.PORT || 9000;
app.listen(PORT,  () => console.log(`Surfs up on port ${PORT}`));