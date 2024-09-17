
const quotes = [
    { 
        quote: "The hardest choices requires the strongest wills", 
        author: "Thanos" 
    },
    { 
        quote: "In my culture, death is not the end", 
        author: "T'Chala" 
    },
    { 
        quote: "With great power, comes the absolute certainty that you turn into the right cunt.", 
        author: "Billy Butcher" 
    },
    { 
        quote: "As long as there are those that remember what was, there will always be those that are unable to accept what can be. They will resist.", 
        author: "Thanos" 
    },
    { 
        quote: "It's not who I am underneath, but what I do that defines me.", 
        author: "Batman" 
    },
    {
        quote: "You either die a hero, or live long enough to see yourself become the villain.",
        author: "Harvey Dent"
    },
    {
        quote: "Their morals, their code; it's a bad joke. Dropped at the first sign of trouble. They're only as good as the world allows them to be.",
        author: "Joker"
    }
];


// Get elements by ID
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteButton = document.getElementById('quote');
const readAloudButton = document.getElementById('read-aloud');

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    quoteText.textContent = `"${randomQuote.quote}"`;
    authorText.textContent = `- ${randomQuote.author}`;
}

// Function to read the quote aloud
function readQuoteAloud() {
    const quote = quoteText.textContent;
    const author = authorText.textContent;

    const utterance = new SpeechSynthesisUtterance(`${quote} ${author}`);
    speechSynthesis.speak(utterance);
}

// Event listeners
newQuoteButton.addEventListener('click', getRandomQuote);
readAloudButton.addEventListener('click', readQuoteAloud);

// Automatically change the quote every 10 seconds
setInterval(getRandomQuote, 8000);
