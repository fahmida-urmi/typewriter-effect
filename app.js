// app.js
document.getElementById("startButton").addEventListener("click", startTyping);

const textToType = "Hello, welcome to the Typewriter effect demo using Tailwind CSS and JavaScript!";
let index = 0;
const typingSpeed = 100; // Time delay between each character (ms)

function startTyping() {
  const typewriterElement = document.getElementById("typewriterText");
  typewriterElement.innerHTML = ""; // Clear text before starting
  index = 0;
  typeWriterEffect(typewriterElement);
}

function typeWriterEffect(element) {
  if (index < textToType.length) {
    element.innerHTML += textToType.charAt(index); // Add one character at a time
    index++;
    setTimeout(() => typeWriterEffect(element), typingSpeed); // Call the function recursively
  }
}