const express = require('express');
const quotesLimitGenerator = require('./quotesLimitGenerator');


const app = express();


app.all('*', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    next();
})


app.get('/api/quotes', (req, res) => {
    res.send(quotesLimitGenerator.getRandomQuote());
});


const PORT = process.env.PORT || 9000;
app.listen(PORT,  () => console.log(`Ryan's driving on port ${PORT}`));