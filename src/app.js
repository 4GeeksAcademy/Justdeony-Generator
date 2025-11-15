import "bootstrap";
import "./style.css";



// Arrays for excuse generator here //

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

// Function //
function generatorExcuse() {
  let whoRandom = who[Math.floor(Math.random() * who.length)];
  let actionRandom = action[Math.floor(Math.random() * action.length)];
  let whatRandom = what[Math.floor(Math.random() * what.length)];
  let whenRandom = when[Math.floor(Math.random() * when.length)];

  // Statement for random words here //
  let excuse = `my excuse: ${whoRandom} ${actionRandom} ${whatRandom} ${whenRandom}`
  document.getElementById("excuse").innerHTML = excuse;
}



window.onload = generatorExcuse;


