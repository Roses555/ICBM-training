function greetUser(name) {
  return `Hello, ${name}!`;
}

let name = prompt("Enter your name:");
document.getElementById("output").innerText = greetUser(name);