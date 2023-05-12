// const reponse = await fetch("./data.json");
// const data = await reponse.json();

import data from "./data.json" assert { type: "json" };


const cardRed = data[0];

document.getElementById('red').innerHTML=`<h4><img src="./assets/images/icon-reaction.svg" alt="reaction"> <span id='hcb'>${cardRed.category}</span></h4>
<p><span id='scb'>${cardRed.score}</span> / 100</p>`

const cardYellow = data[1];

document.getElementById('yellow').innerHTML=`<h4><img src="./assets/images/icon-memory.svg" alt="memory"> <span id='hcb'>${cardYellow.category}</span></h4>
<p><span id='scb'>${cardYellow.score}</span> / 100</p>`

const cardGreen = data[2];

document.getElementById('green').innerHTML=`<h4><img src="./assets/images/icon-verbal.svg" alt="verbal"> <span id='hcb'>${cardGreen.category}</span></h4>
<p><span id='scb'>${cardGreen.score}</span> / 100</p>`

const cardBlue = data[3];

document.getElementById('blue').innerHTML=`<h4><img src="./assets/images/icon-visual.svg" alt="visual"> <span id='hcb'>${cardBlue.category}</span></h4>
<p><span id='scb'>${cardBlue.score}</span> / 100</p>`

document.getElementById('h2').textContent= Math.floor((cardRed.score + cardYellow.score + cardGreen.score + cardBlue.score) / 4)

// const sectionCard = document.querySelectorAll(".card");

// const cardRed = data[0];
// const Cred = document.getElementById("hcr");
// Cred.innerText = cardRed.category;
// sectionCard.appendChild(Cred);
// const Sred = document.getElementById("scr");
// Sred.innerText = cardRed.score;
// sectionCard.appendChild(Sred);

// const cardYellow = data[1];
// const Cyellow = document.getElementById("hcy");
// Cyellow.innerText = cardYellow.category;
// sectionCard.appendChild(Cyellow);
// const Syellow = document.getElementById("scy");
// Syellow.innerText = cardYellow.score;
// sectionCard.appendChild(Syellow);

// const cardGreen = data[2];
// const Cgreen = document.getElementById("hcg");
// Cgreen.innerText = cardGreen.category;
// sectionCard.appendChild(Cgreen);
// const Sgreen = document.querySelector("#cg");
// Sgreen.innerText = cardGreen.score;
// sectionCard.appendChild(Sgreen);

// const cardBlue = data[3];
// const Cblue = document.getElementById("hcb");
// Cblue.innerText = cardBlue.category;
// sectionCard.appendChild(Cblue);
// const Sblue = document.getElementById("scb");
// Sblue.innerText = cardBlue.score;
// sectionCard.appendChild(Sblue);
