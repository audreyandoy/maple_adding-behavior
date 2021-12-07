const mainSection = document.getElementById("main-section");

//h1
const parrotHeading = document.createElement("h1");
parrotHeading.innerHTML = "<img src='https://cultofthepartyparrot.com/parrots/hd/parrot.gif'>Welcome to My Party Parrot Fan Site <img src='https://cultofthepartyparrot.com/parrots/hd/parrot.gif'>";
;

//paragraph
const parrotPargraph = document.createElement("p");
parrotPargraph.textContent = "Here is my website where I post interesting facts about party parrots.";



// list of fact-strings
const parrotFacts = [
    "Ansel likes party parrots",
    "Ansel loves party sloths",
    "Party parrots are the last to leave",
    "Party parrots like farty ferrts"
];

const factsList = document.createElement("ul");
const parrotElems = [];

for (const fact of parrotFacts) {
    let temp = document.createElement("li");
    temp.textContent = fact;
    parrotElems.push(temp);
}

for (const elem of parrotElems) {
    factsList.appendChild(elem);
}

console.log(parrotElems);
console.log(parrotHeading);
console.log(mainSection);

mainSection.appendChild(parrotHeading);
mainSection.appendChild(parrotPargraph);
mainSection.appendChild(factsList);