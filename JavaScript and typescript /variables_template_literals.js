window.onload = function () {
  const name = "Rhoda";
  const age = 24;
  const language = "JavaScript";

  let message = `My name is ${name}, I am ${age}, and I love ${language}`;

  document.getElementById("aboutme").innerText = message;
};