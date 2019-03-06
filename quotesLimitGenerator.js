"use strict";

const quotes = require("./quotes");

const getAllQuotes = () => quotes;

const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

module.exports = {
  getAllQuotes,
  getRandomQuote
};
