// app.js - Random Quote Generator 🎯

const quotes = [
  "Stay hungry, stay foolish. – Steve Jobs",
  "Code is like humor. When you have to explain it, it’s bad. – Cory House",
  "First, solve the problem. Then, write the code. – John Johnson",
  "Talk is cheap. Show me the code. – Linus Torvalds",
  "The best way to predict the future is to invent it. – Alan Kay"
];

// Random quote picker
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Print a random quote
console.log("✨ Your random motivation: ");
console.log(getRandomQuote());
