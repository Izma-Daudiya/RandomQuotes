//   fetch('https://dummyjson.com/quotes')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log(error));


const quote = document.querySelector('.quote-text')
const author = document.querySelector('.quote-author')

setInterval(() => {
  fetch('https://dummyjson.com/quotes') // Fetch the quotes
  .then(response => response.json()) // Parse the JSON response
  .then(data => data.quotes) // Extract the 'quotes' array
  .then(quotes => {
    const randomIndex = Math.floor(Math.random() * quotes.length); // Select a random index
    const selectedQuote = quotes[randomIndex]; // Get the quote at the random index
    // Update the DOM with the quote text and author
    quote.innerHTML = `${selectedQuote.quote}`; // Use 'quote' key for the text
    author.innerHTML = `- ${selectedQuote.author}`; // Use 'author' key for the author
  })
  .catch(error => {
    // Handle errors
    quote.innerHTML = `An error occurred while fetching a quote.`;
    author.innerHTML = '';
    console.error(error); // Log the error
  });
}, 3000);