

const words = ["(Currently Studying for Exams)", "(Thinking of new project ideas)", "(Exploring Open Source Projects)", "(Playing Volleyball or Pickleball)"];
let currentIndex = 0;
const header = document.getElementById("description");

function changeText() {
    header.textContent = words[currentIndex];
    currentIndex = (currentIndex + 1) % words.length; 
}

header.addEventListener("animationiteration", changeText);

changeText();

function linkToWeb(event){
    
   const url = event.currentTarget.getAttribute('data-url');
   if(url){
    window.open(url, "_blank");
   }
   

}
const repository = document.getElementById('view');
repository.addEventListener('click', linkToWeb);
const projectCards = document.querySelectorAll('.project-cards');
projectCards.forEach(card =>{
    card.addEventListener('click', linkToWeb);
})

//default WM 
//document.getElementById("WM").click();