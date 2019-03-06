"use strict";

const quotes = require("./quotes");

const getAllQuotes = () => quotes;

const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

const getQuotesByNumber = numberOfQuotes => {
  const limit = numberOfQuotes > quotes.length ? quotes.length : numberOfQuotes;
  let output = new Array(limit);
  let quote;
  let quoteUsed;

  for (let i = 0; i < limit; i++) {
    quote = quotes[Math.floor(Math.random() * quotes.length)];
    // quote used boolean
    quoteUsed = output.indexOf(quote) > -1;

    while (quoteUsed) {
      quote = quotes[Math.floor(Math.random() * quotes.length)];
      quoteUsed = output.indexOf(quote) > -1;
    }
    output[i] = quote;
  }
  return output;
};

module.exports = {
  getAllQuotes,
  getRandomQuote,
  getQuotesByNumber
};
