async function fetchQuote() {
    try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        return data.content;
    } catch (error) {
        console.error("Error fetching quote:", error);
    }
}

async function generateRandomQuote() {
    const quote = await fetchQuote();
    document.getElementById("quote").textContent = quote;
}

document.getElementById("generate-btn").addEventListener("click", generateRandomQuote);

// Generate a random quote on page load
generateRandomQuote();
