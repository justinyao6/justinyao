/* Dark-Mode*/ 

//stores user's preference locally
const element = document.body;
function myFunction(){
    element.classList.toggle("dark-mode");
    
    if(element.classList.contains("dark-mode")){
        localStorage.setItem('theme','dark')
    }
    else{
        localStorage.setItem('theme', 'light')
    }
}
//loads the preference
window.addEventListener('DOMContentLoaded', () =>{
    const user_saved = localStorage.getItem('theme');
    if(user_saved == 'dark'){
        element.classList.add("dark-mode");
    }
});

/* Dark-Mode*/ 

/* Company section */
function changeOpacity(id){
    document.getElementById(id).style.opacity = 1;
    
}
//change color to aquarime and make it bold
//also opacity to be 1
//also change the descriptions


function changeDescription(id){
    const description = document.getElementById("company-description");
    const descriptions = {
        WM: {
            title: "Software Engineer @ WM",
            language: '<img src="clogo.png" alt="" class="logo">C#',
            dates: "01/22-12/22",
            points: `
                <li>Developed a robust waste management system.</li>
                <li>Improved system efficiency by 30%.</li>
                <li>Integrated new machine learning algorithms.</li>
            `,
    
        }
    }
}

/* Company section */


