// 🎯 PART 1: JavaScript Basics
// Variable declaration, user input, conditionals, and output

function greetUser() {
  const name = document.getElementById('nameInput').value;
  let greetingMessage = "";

  if (name.trim() === "") {
    greetingMessage = "Please enter your name.";
  } else {
    greetingMessage = `Hello, ${name}! Welcome to JavaScript.`;
  }

  document.getElementById('greeting').textContent = greetingMessage;
}

// ❤️ PART 2: Functions — Reusable Logic

// Function to calculate total price with tax
function calculateTotal(price, taxRate) {
  return price + (price * taxRate);
}

// Function to format a name string
function formatName(firstName, lastName) {
  return `${firstName.trim()} ${lastName.trim()}`.toUpperCase();
}

// Example usage in console
console.log("Total with tax:", calculateTotal(100, 0.07));
console.log("Formatted name:", formatName("  Jane", "doe  "));

// 🔁 PART 3: Loops — Repetition Practice

// Using a for loop to list fruits
const fruits = ["Apple", "Banana", "Cherry", "Dragonfruit"];
const fruitListElement = document.getElementById('fruitList');

for (let i = 0; i < fruits.length; i++) {
  const li = document.createElement('li');
  li.textContent = fruits[i];
  fruitListElement.appendChild(li);
}

// Using a while loop to count down
let count = 3;
while (count > 0) {
  console.log(`Countdown: ${count}`);
  count--;
}

// 🌐 PART 4: DOM Manipulation

// DOM Interaction 1: Toggle visibility of a message
document.getElementById('toggleBtn').addEventListener('click', () => {
  const message = document.getElementById('toggleMessage');
  message.classList.toggle('hidden');
});

// DOM Interaction 2: Change text dynamically
document.getElementById('toggleBtn').addEventListener('mouseover', () => {
  document.getElementById('toggleBtn').textContent = "Now Click Me!";
});
document.getElementById('toggleBtn').addEventListener('mouseout', () => {
  document.getElementById('toggleBtn').textContent = "Toggle Message";
});

// DOM Interaction 3: Create and append a new element
const newParagraph = document.createElement('p');
newParagraph.textContent = "This paragraph was added via JavaScript.";
document.body.appendChild(newParagraph);
