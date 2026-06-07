JavaScript & TypeScript Fundamentals

📌 Description

This section contains all theory answers and practical implementations for JavaScript and TypeScript fundamentals.

---

📚 SECTION A: JAVASCRIPT BASICS

Q1. What is JavaScript?

JavaScript is a programming language used to create dynamic and interactive web pages. It runs in the browser and allows developers to update content, control multimedia, and handle user interactions.

---

Q2. What is TypeScript?

TypeScript is a superset of JavaScript that adds static typing. It helps catch errors early and improves code readability and maintainability.

---

Q3. JavaScript vs TypeScript

- JavaScript → loosely typed, more flexible
- TypeScript → strongly typed, more structured

TypeScript helps prevent bugs before runtime.

---

Q4. Variables

Variables are used to store data.

- "let" → can be reassigned
- "const" → cannot be reassigned
- "var" → older, function-scoped

Example:

let name = "John";
const age = 25;

---

Q5. Data Types

- String → "text"
- Number → 10
- Boolean → true/false
- Object → { key: value }
- Undefined → variable declared but not assigned
- Null → intentional empty value

---

Q6. Functions

Functions are reusable blocks of code.

Example:

function greet() {
  console.log("Hello");
}

---

Q7. Arrow Functions

Shorter way to write functions.

Example:

const add = (a, b) => a + b;

---

Q8. Conditionals

Used for decision-making.

Example:

if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

---

Q9. Loops

Used to repeat actions.

Example:

for (let i = 0; i < 5; i++) {
  console.log(i);
}

---

Q10. Arrays

Used to store multiple values.

Example:

let fruits = ["apple", "banana"];

---

Q11. Objects

Store data in key-value pairs.

Example:

let person = {
  name: "John",
  age: 25
};

---

Q12. DOM (Document Object Model)

The DOM allows JavaScript to interact with HTML.

Example:

document.getElementById("demo").innerHTML = "Hello";

---

Q13. Events

Events are user actions like clicks or typing.

Example:

button.onclick = function() {
  alert("Clicked!");
};

---

📚 SECTION B: TYPESCRIPT FUNDAMENTALS

Q14. TypeScript Types

TypeScript allows defining types explicitly.

Example:

let username: string = "John";
let score: number = 100;
let isActive: boolean = true;

---

Q15. Benefits of TypeScript

- Detects errors early
- Improves code readability
- Makes large projects easier to manage
- Enhances developer productivity

---
