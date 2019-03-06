const express = require("express");
const quotesLimitGenerator = require("./quotesLimitGenerator");

const app = express();

app.all("*", (req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/api/quotes", (req, res) => {
  res.send(quotesLimitGenerator.getAllQuotes());
});

app.get("/api/quotes/random", (req, res) => {
  res.send(quotesLimitGenerator.getRandomQuote());
});

app.get("/api/quotes/:num?", (req, res) => {
  res.send(quotesLimitGenerator.getQuotesByNumber(req.params.num || 1));
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Ryan's driving on port ${PORT}`));
