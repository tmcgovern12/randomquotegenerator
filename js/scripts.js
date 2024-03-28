function generateQuote() {
    const quotes = [
        {
            quote: "No, no, because the ice melts, and then it's like Second Drink!",
            author: "Pam Beesly"
        },
        {
            quote: "Boy, have you lost your mind, 'cause I'll help you find it!",
            author: "Stanley Hudson"
        },
        {
            quote: "I love inside jokes. I'd love to be a part of one someday.",
            author: "Michael Scott"
        },

        {
            quote: "Identity theft is not a joke, Jim!",
            author: "Dwight Schrute"
        },

        {
            quote: "I just want to lie on the beach and eat hot dogs. That's all I've ever wanted.",
            author: "Kevin Malone"

        },

        


    ];
    
    let arrayIndex = Math.floor(Math.random() * quotes.length); 
    document.getElementById("quotation").innerHTML =  "&quot;" + quotes[arrayIndex].quote + "&quotes;";
    document.getElementById("author").innerHTML = quotes[arrayIndex].author; 
}

window.onload = function () {
    generateQuote();
}

document.getElementById("generate").addEventListener("click", generateQuote);




//documenmt.getElementById("generate").addEventListener('click', generateQuote)