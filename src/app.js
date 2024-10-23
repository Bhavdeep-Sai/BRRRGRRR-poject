// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var basePrice = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredients();
  renderPrice();

}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}
 //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
 function renderCheese() {
  let cheese = document.querySelector('#cheese');
  cheese.style.display = state.Cheese ? 'inherit' : 'none';

 
}

//Trial 2 - Change the visibility of Tomatoes based on state by manipulating the DOM

function renderTomatoes() {
  let tomato = document.querySelector("#tomato");
  tomato.style.display = state.Tomatoes ? "inherit" : "none";

}


//Trial 3 - Change the visibility of Onions based on state by manipulating the DOM

function renderOnions() {
  let onion = document.querySelector("#onion");
  onion.style.display = state.Onions ? "inherit" : "none";

}

//Trial 4 - Change the visibility of Lettuce based on state by manipulating the DOM

function renderLettuce() {
  let lettuce = document.querySelector("#lettuce");
  lettuce.style.display = state.Lettuce ? "inherit" : "none";

}


document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};


document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};


document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes=!state.Tomatoes;
  renderAll();
}



document.querySelector(".btn-onions").onclick = function () {
  state.Onions=!state.Onions;
  renderAll();
}


document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce=!state.Lettuce;
  renderAll();
}


//Trial 5 Add/Remove the class active to the buttons based on state
function renderButtons() {
  document.querySelector(".btn-cheese").classList.toggle('active', state.Cheese);
// Complete it for every class
document.querySelector(".btn-cheese").classList.toggle('active', state.Cheese);
  document.querySelector(".btn-tomatoes").classList.toggle('active', state.Tomatoes);
  document.querySelector(".btn-onions").classList.toggle('active', state.Onions);
  document.querySelector(".btn-lettuce").classList.toggle('active', state.Lettuce);

}


//Trial 6- Render only the items selected in the ingredients board based on the state
// The function to render Patty is already given in the code, we need not write it again here.

function renderIngredients() {
  document.getElementById("cheese").style.visibility = state.Cheese ? "visible" : "hidden";
  // complete the function for remaining ingredients
  document.getElementById("cheese").style.visibility = state.Cheese ? "visible" : "hidden";
  document.getElementById("tomato").style.visibility = state.Tomatoes ? "visible" : "hidden";
  document.getElementById("onion").style.visibility = state.Onions ? "visible" : "hidden";
  document.getElementById("lettuce").style.visibility = state.Lettuce ? "visible" : "hidden";


}

//Trial 7
//In the p element having price-details as the class, display the calculated
//price based on ingredients
function renderPrice() {
 //complete the function to see the change in price
 const totalPrice = basePrice +
 (state.Cheese ? ingredients.Cheese : 0) +
 (state.Tomatoes ? ingredients.Tomatoes : 0) +
 (state.Onions ? ingredients.Onions : 0) +
 (state.Lettuce ? ingredients.Lettuce : 0);

document.querySelector('.price-details').innerText = "INR " + totalPrice;

}