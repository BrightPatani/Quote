// Quotes Array
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

// Get Elements
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const readAloudBtn = document.getElementById('read-aloud');


// Generate Random Quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    
    // Slide out animation
    quoteText.classList.add('fade-out');
    authorText.classList.add('fade-out');

    setTimeout(() => {
        // Set the new quote and author
        quoteText.textContent = `"${randomQuote.quote}"`;
        authorText.textContent = `- ${randomQuote.author}`;
        
        // Slide in animation
        quoteText.classList.remove('fade-out');
        authorText.classList.remove('fade-out');
    }, 500);  // 500ms delay for the fade-out effect
}

function readQuoteAloud() {
    const quote = quoteText.textContent;
    const author = authorText.textContent;

    const utterance = new SpeechSynthesisUtterance(`${quote} ${author}`);
    utterance.voice = speechSynthesis.getVoices()[6];  // Use the default voice
    
    speechSynthesis.speak(utterance);  // Speak the quote
}

// Add event listener to "Read Aloud" button
readAloudBtn.addEventListener('click', readQuoteAloud);

// Add Event Listener to Button
newQuoteBtn.addEventListener('click', getRandomQuote);

// Automatically change the quote every 10 seconds
setInterval(getRandomQuote, 10000);
