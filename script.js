console.log('Hello World');

// // Primitive datatyper:
// string som er en "Setning der du kan skrive"
// number som er et tall 100
// boolean som sjekker om noe er sant eller usant

// // Variabler:

// let variabel kan skifte lagret data
// datatypen: number
let age = 26;
console.log(age);
console.log(typeof age);

// const variabel kan IKKE skifte lagret data
// datatypen: string
const userName = 'Julie';
console.log(userName);
console.log(typeof userName);

const greet = 'Good morning';
console.log(greet);

// Variable combination
const greetPerson1 = greet + ', ' + userName + '!';
console.log(greetPerson1);

// Template litteral
const greetPerson2 = `${greet}, ${userName}!`;
console.log(greetPerson2);

// variabelen 'var' har gått ut på dato og skal ikke lenger brukes i moderne javascript.

// // DOM Manipulasjon (Document Object Model Manipulation)
// Teaser for neste uke...

let htmlGreeting = document.querySelector('h1');
// htmlGreeting.textContent('Good afternoon, Julie!');
htmlGreeting.textContent = 'Good afternoon, Julie!';
console.log(htmlGreeting);

// Etter vi avsluttet så jeg at grunnen til at det ikke fungerte. Jeg erklærte på feil måte som dere kan se på hva jeg kommenterte ut over^ i kodeblokken.
