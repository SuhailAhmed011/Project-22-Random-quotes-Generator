let quotes = [
    {
        quote:"Every moment is a fresh beginning",
        source: "T.S Eliot"
    },
    {
        quote:"Success is the child of audacity",
        source: "Benjamin Disraeli"   
    },
    {
        quote:"If you tell the truth you don't have to remember anything",
        source: "Mark Twain"   
    },
    {
        quote:"Reality is wrong, dreams are for real",
        source: "Tupac"   
    },
    {
        quote:"Work hard untill you don't achieve your goals",
        source: "suhail"   
    },
    {
        quote:"Life becomes easier when you learn to accept the apology you never got",
        source: "R. Brault"   
    }
];
 
function getRandomQuote(){

let randomNum = Math.floor(Math.random() * (quotes.length));
let randomQuotes = quotes[randomNum];
return randomQuotes;

}

function getRandomColor(){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    return randomColor;
}

function printQuote(){
    let quotes = getRandomQuote();
    let quoteContainer = document.getElementById("quote-box");
    let quoteString = `<p class="quote">${quotes.quote}</p>
    <p class="source">${quotes.source}</p>`;
    quoteContainer.innerHTML = quoteString;
                
    

    document.body.style.backgroundColor = getRandomColor();
}
document.getElementById("btn").addEventListener("click", printQuote(), false);
console.log(btn)
 
 

