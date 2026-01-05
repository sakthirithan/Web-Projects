import quotes from "./quotes.js";

const quoteContainer = document.getElementById("quote");
const authorContainer = document.getElementById("author");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const tweetBtn = document.getElementById("tweetBtn");

function getRandomQuote() {
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
}

function getQuote(quote) {
    quoteContainer.innerHTML = `${quote.content}`;
    authorContainer.innerHTML = `${quote.author}`;
}
getQuote(getRandomQuote());

newQuoteBtn.addEventListener("click", () => {
    getQuote(getRandomQuote());
})

function tweet() {
    const text = `${quoteContainer.innerText} \n        --${authorContainer.innerText}`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(tweetUrl, "Tweer Window", "width=600,height=300");
}

tweetBtn.addEventListener("click", tweet);