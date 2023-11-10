//Opdracht 1


let salaris = 2000;
let verhoging = salaris * 0.05;

console.log("Je krijgt een salarisverhoging van €" + verhoging + ".");

//Opdracht 2
let prijs1 = 400000;
let percentage = 0.025;
let rente = prijs1 * percentage;

console.log("De jaarlijkse rente bedraagt €" + rente + ".");

//Opdracht 3
let prijs = 100;
let btw = 0.21;
let prijs_incl_btw = prijs * (1 + btw);

console.log("De prijs inclusief btw bedraagt €" + prijs_incl_btw + ".");

//Opdracht 4

let persoon = prompt("Wat is uw beroep?");

if (persoon === "Docent") {
  console.log("Jij bent een docent.");
} else {
  console.log("Jij bent gek!");
}

//Opdracht 5
let bedrag = parseFloat(prompt("Wat is het bedrag in euro's?"));
let valuta = prompt("Welke valuta wilt u omrekenen?");

switch (valuta) {
  case "BTC":
    bedrag = bedrag / 35050;
    break;
  case "ETH":
    bedrag = bedrag / 1887;
    break;
  case "XRP":
    bedrag = bedrag / 0.7;
    break;
  case "DOG":
    bedrag = bedrag / 0.07;
    break;
  case "SOL":
    bedrag = bedrag / 40.26;
    break;
  default:
    console.log("Onbekende valuta.");
   
}

console.log("Het bedrag in " + valuta + " is " + bedrag + ".");

//Opdracht 6
for (let i = 0; i <= 9; i++) {
  console.log(i);
}

console.log("Einde programma");



  ///Opdracht 7
  let x = 0;

while (x < 20) {
  if (x < 10) {
    console.log("De eerste zin");
    console.log("De tweede zin");
  } else {
    console.log("De eerste zin");
  }
  x++;
}

console.log("Einde programma");

//Opdracht 8
let i = 0;

while (true) {
  console.log("Loop");
  i++;

  if (i == 10) {
    break;
  }
}



//Opdracht 9

let kleuren = ["rood", "groen", "geel", "blauw", "roze"];

for (let i = 0; i < kleuren.length; i++) {
  console.log(kleuren[i]);
}

//Opdracht 10

let artiesten = ["The Beatles", "The Rolling Stones", "Michael Jackson", "Queen", "Pink Floyd"];

function voegArtiestToe() {
  let input = document.querySelector(".input");
  let artiest = input.value;

  artiesten.push(artiest);

  let div = document.createElement("div");
  div.textContent = artiest;

  document.querySelector(".artiesten").appendChild(div);
}

document.querySelector(".button").addEventListener("click", voegArtiestToe);


//Opdracht 11
let input = document.querySelector(".inputOne");
  let ul = document.querySelector(".ul");

  function voegItemToe() {
    let item = input.value;

    ul.appendChild(document.createElement("li")).textContent = item;
  }

  function verwijderItems() {
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
  }

  document.querySelector(".add").addEventListener("click", voegItemToe);
  document.querySelector(".clear").addEventListener("click", verwijderItems);
 

   
  //Opdracht 12
  function showMessage(message) {
    console.log(message);
  }
  
  showMessage("Hallo wereld!");

  
  //Opdracht 13
  function showSum(a, b) {
    console.log(a + b);
  }
  
  showSum(1, 2);

  
//Opdracht 14
function showArray(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }
  
  let array1 = ["a", "b", "c", "d", "e"];
  showArray(array1);

  
  //Opdracht 15

  function getProduct(a, b) {
    return a * b;
  }
  
  let a = 2;
  let b = 3;
  console.log(getProduct(a, b));

  
  //Opdracht 16
  function getSumOfArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }
  
  let array = [1, 3, 5, 7, 11];
  console.log(getSumOfArray(array));

 
