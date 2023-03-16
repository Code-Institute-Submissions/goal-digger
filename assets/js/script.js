// Array of quotes
const quotes = [
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      quote: "You are never too old to set another goal or to dream a new dream.",
      author: "C.S. Lewis"
    },
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    }
  ];
  
  // Function to display a random quote
  function newQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomNumber].quote;
    const author = quotes[randomNumber].author;
    const quoteDisplay = document.getElementById("quoteDisplay");
    quoteDisplay.innerHTML = `"${quote}"<br>- ${author}`;
  }
  
  // Function to submit a new quote
  function submitQuote() {
    const authorInput = document.getElementById("author");
}