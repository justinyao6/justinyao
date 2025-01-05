

const words = ["(Deepening further studies)", "(Learning design fundamentals)", "(Currently creating LLMs )", "(Playing Volleyball or Pickleball)"];
let currentIndex = 0;
const header = document.getElementById("description");

// Function to update the text of h1
function changeText() {
    header.textContent = words[currentIndex];
    currentIndex = (currentIndex + 1) % words.length; // Loop through the words
}

// Change text every time the animation resets
header.addEventListener("animationiteration", changeText);

// Initialize the first word
changeText();

//default WM 
//document.getElementById("WM").click();