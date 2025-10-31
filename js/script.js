"use strict";

//array med quotes 
const quotes = [
    {quote: "At vinde er ikke alt; at ville vinde er", author: "Vince Lombardi"},
    {quote: "Jeg er så klog, at nogle gange forstår jeg ikke et eneste ord af hvad jeg siger", author: "Oscar Wilde"},
    {quote: "Lykken bliver aldrig mindre af at blive delt", author: "Buddha"},
    {quote: "Jeg har haft tusinder af bekymringer, de færreste er blevet til noget", author: "Mark Twain"},
    {quote: "Jeg drikker ikke vand, fisk knalader i det", author: "W.C. Fields"},
    {quote: "Uden musik ville livet være en fejl", author: "Friedrich Nietzsche"},
    {quote: "Find ikke fejl, find en løsning", author: "Henry Ford"},
    {quote: "Hvis du ikke kan forklare det til en seks årig, forsår du det ikke selv", author: "Albert Einstein"}

];


//getRandomQuote funktion, sættes kun igang hvis den string med quote og author vi kalder er tom
//altid skriv function før variablen, ellers bliver det ikke til en funktion
function getRandomQuote (){
if(quotes.length === 0){
    const errorMsg = "No quotes available!!!";
    document.getElementById("quotes").innerHTML = `<p>${errorMsg}</p>`; //fejlbeskeden skal stå det samme sted som citaterne altså i quotes
}


//hvis der er noget i vores objekt, altså citater køres denne her funktion
//funktionen regner ud hvor mange tal der er at vælge mellem (8 citater) også gange den det 
    const randomIndex = Math.floor(Math.random() * quotes.length); 
    return quotes[randomIndex];
}


//displayRandomQuote funktionen, henter et random tal afhængig af hvor mange quotes der er
function displayRandomQuote(){
    const randomQuote = getRandomQuote(); 

    //tom tekst string som viser data fra vores quotes
    let quoteDetails = ""; 

    //+= tilføj til det allerede eksisterende data
    quoteDetails += ` 
        <p>${randomQuote.quote}</p>
        <h4>${randomQuote.author}</h4>
    `;

    //henter den indre html fra id "quotes"
    document.getElementById("quotes").innerHTML = quoteDetails;
}


//nu sørger vi for at der er addEventListeners på så vores displayQuote knap bliver akitveret når der klikkes på den
document.getElementById("displayQuoteBtn").addEventListener("click", displayRandomQuote);


